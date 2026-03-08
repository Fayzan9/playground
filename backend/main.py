from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Portfolio API",
    description="Backend API for portfolio website",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "message": "Welcome to Portfolio API",
        "status": "running",
        "version": "1.0.0"
    }

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy"}

@app.get("/api/projects")
async def get_projects():
    """Get all projects"""
    return {
        "projects": [
            {
                "id": 1,
                "title": "Portfolio Website",
                "description": "A modern portfolio website built with Next.js and FastAPI",
                "technologies": ["Next.js", "FastAPI", "TypeScript", "Python"]
            }
        ]
    }

@app.get("/api/blog")
async def get_blog_posts():
    """Get all blog posts"""
    return {
        "posts": [
            {
                "id": 1,
                "title": "Getting Started with Next.js",
                "excerpt": "Learn how to build modern web applications with Next.js",
                "date": "2026-03-08"
            }
        ]
    }
