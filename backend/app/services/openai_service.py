import os
import re
from datetime import datetime
from pathlib import Path
from openai import OpenAI
from app.core.config import settings
from app.core.prompts import get_component_generation_prompt

client = OpenAI(api_key=settings.OPENAI_API_KEY)


async def generate_code(prompt: str) -> str:
    """
    Generate code based on a simple prompt.
    
    Args:
        prompt: User's code generation request
        
    Returns:
        Generated code as a string
    """
    response = client.responses.create(
        model="gpt-4.1-mini",
        input=f"Write code for: {prompt}"
    )

    return response.output_text


async def generate_component(prompt: str) -> tuple[str, str, str]:
    """
    Generate a React component based on user prompt and save it to the components_designed folder.
    
    Args:
        prompt: User's description of the component to generate
        
    Returns:
        Tuple of (generated_code, filename, filepath)
    """
    # Get the complete prompt with guidelines
    full_prompt = get_component_generation_prompt(prompt)
    
    # Generate the component code using OpenAI
    response = client.responses.create(
        model="gpt-4.1-mini",
        input=full_prompt
    )
    
    generated_code = response.output_text
    
    # Extract component name from the code to create filename
    filename = _extract_component_filename(generated_code, prompt)
    
    # Save the component to the components_designed folder
    filepath = _save_component(generated_code, filename)
    
    return generated_code, filename, filepath


def _extract_component_filename(code: str, fallback_prompt: str) -> str:
    """
    Extract component name from the generated code to create a filename.
    
    Args:
        code: Generated component code
        fallback_prompt: Fallback prompt to generate filename if extraction fails
        
    Returns:
        Filename in kebab-case format with .tsx extension
    """
    # Try to extract from 'export function ComponentName'
    match = re.search(r'export\s+function\s+([A-Z][a-zA-Z0-9]*)', code)
    
    if match:
        component_name = match.group(1)
        # Convert PascalCase to kebab-case
        filename = re.sub(r'(?<!^)(?=[A-Z])', '-', component_name).lower()
    else:
        # Fallback: create filename from prompt
        # Take first few words, clean them, and convert to kebab-case
        words = re.findall(r'\w+', fallback_prompt.lower())[:3]
        filename = '-'.join(words) if words else 'generated-component'
    
    # Add timestamp to avoid collisions
    timestamp = datetime.now().strftime('%Y%m%d-%H%M%S')
    filename = f"{filename}-{timestamp}.tsx"
    
    return filename


def _save_component(code: str, filename: str) -> str:
    """
    Save the generated component to the components_designed folder.
    
    Args:
        code: Component code to save
        filename: Name of the file
        
    Returns:
        Absolute path where the file was saved
    """
    # Get the project root directory (backend folder)
    backend_dir = Path(__file__).parent.parent.parent
    
    # Create components_designed directory path
    components_dir = backend_dir / 'data' / 'components_designed'
    
    # Create directory if it doesn't exist
    components_dir.mkdir(parents=True, exist_ok=True)
    
    # Full filepath
    filepath = components_dir / filename
    
    # Write the component code to file
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(code)
    
    return str(filepath)
