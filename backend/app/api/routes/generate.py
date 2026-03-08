from fastapi import APIRouter
from app.schemas.generate_schema import GenerateRequest, GenerateResponse
from app.services.openai_service import generate_code

router = APIRouter()

@router.post("/generate", response_model=GenerateResponse)
async def generate(request: GenerateRequest):

    code = await generate_code(request.prompt)

    return GenerateResponse(code=code)
