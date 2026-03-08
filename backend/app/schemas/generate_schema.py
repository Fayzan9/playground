from pydantic import BaseModel

class GenerateRequest(BaseModel):
    prompt: str


class GenerateResponse(BaseModel):
    code: str


class ComponentGenerateRequest(BaseModel):
    """Request schema for component generation endpoint."""
    prompt: str


class ComponentGenerateResponse(BaseModel):
    """Response schema for component generation endpoint."""
    code: str
    filename: str
    filepath: str
