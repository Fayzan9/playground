from openai import OpenAI
from app.core.config import settings

client = OpenAI(api_key=settings.OPENAI_API_KEY)


async def generate_code(prompt: str) -> str:

    response = client.responses.create(
        model="gpt-4.1-mini",
        input=f"Write code for: {prompt}"
    )

    return response.output_text
