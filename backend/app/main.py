from fastapi import FastAPI
from app.api.routes.generate import router as generate_router

app = FastAPI(
    title="AI Code Generator API",
    version="1.0.0"
)

@app.get("/")
def health():
    return {"status": "running"}

app.include_router(generate_router, prefix="/api")
