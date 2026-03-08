# Portfolio Backend API

A simple FastAPI backend for the portfolio website.

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On macOS/Linux
# or
venv\Scripts\activate  # On Windows
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

## Running the API

Start the development server:
```bash
uvicorn main:app --reload
```

The API will be available at:
- API: http://localhost:8000
- Interactive docs (Swagger): http://localhost:8000/docs
- Alternative docs (ReDoc): http://localhost:8000/redoc

## API Endpoints

- `GET /` - Root endpoint with API info
- `GET /health` - Health check endpoint
- `GET /api/projects` - Get all projects
- `GET /api/blog` - Get all blog posts

## CORS Configuration

The API is configured to accept requests from `http://localhost:3000` (Next.js frontend).
