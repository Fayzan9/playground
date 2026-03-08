from fastapi import FastAPI
from app.api.routes.generate import router as generate_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="AI Code Generator API",
    version="1.0.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Your Next.js frontend
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods including OPTIONS
    allow_headers=["*"],  # Allow all headers
)
@app.get("/")
def health():
    return {"status": "running"}

app.include_router(generate_router, prefix="/api")
