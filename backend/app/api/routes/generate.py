from fastapi import APIRouter
from app.schemas.generate_schema import (
    GenerateRequest, 
    GenerateResponse,
    ComponentGenerateRequest,
    ComponentGenerateResponse
)
from app.services.openai_service import generate_code, generate_component

router = APIRouter()

@router.post("/generate", response_model=GenerateResponse)
async def generate(request: GenerateRequest):
    """
    Generate code based on a simple prompt.
    """
    code = await generate_code(request.prompt)

    return GenerateResponse(code=code)


@router.post("/generate-component", response_model=ComponentGenerateResponse)
async def generate_react_component(request: ComponentGenerateRequest):
    """
    Generate a React component based on user prompt.
    
    The component will be generated following the playground component guidelines,
    including proper TypeScript types, Framer Motion animations, Tailwind CSS styling,
    and component metadata for auto-discovery.
    
    The generated component is automatically saved to the data/components_designed folder.
    """
    code, filename, filepath = await generate_component(request.prompt)
    
    return ComponentGenerateResponse(
        code=code,
        filename=filename,
        filepath=filepath
    )
