# API Documentation

## Component Generation API

### Generate Component

**Endpoint:** `POST /api/generate-component`

Generates a React TypeScript component based on a natural language prompt. The component follows playground guidelines and is automatically saved to the `data/components_designed/` folder.

#### Request

```json
{
  "prompt": "Create an animated gradient button with hover effects"
}
```

**Fields:**
- `prompt` (string, required): Natural language description of the component to generate

#### Response

```json
{
  "code": "// Full TypeScript/React component code...",
  "filename": "animated-gradient-button-20260308-143022.tsx",
  "filepath": "/absolute/path/to/backend/data/components_designed/animated-gradient-button-20260308-143022.tsx"
}
```

**Fields:**
- `code` (string): Complete .tsx file content ready to use
- `filename` (string): Generated filename in kebab-case with timestamp
- `filepath` (string): Absolute path where the file was saved

#### Component Guidelines

Generated components automatically follow these standards:

✅ **TypeScript** - Full type safety with interfaces  
✅ **Framer Motion** - Smooth animations and transitions  
✅ **Tailwind CSS** - Responsive design with CSS variables  
✅ **Design System** - Uses theme variables for colors/shadows  
✅ **Component Metadata** - Auto-discovery metadata included  
✅ **Interactive Controls** - Playground-ready with customizable props  

#### Example Usage

```bash
curl -X POST http://localhost:8000/api/generate-component \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Create a loading spinner with multiple color variants"
  }'
```

```python
import requests

response = requests.post(
    "http://localhost:8000/api/generate-component",
    json={"prompt": "Create a modern pricing card with a gradient border"}
)

data = response.json()
print(f"Component saved to: {data['filepath']}")
print(f"Code preview:\n{data['code'][:200]}...")
```

#### Design System Variables

Generated components use CSS variables for theming:

**Backgrounds:**
- `var(--bg-primary)` - Main background
- `var(--bg-secondary)` - Card/section backgrounds
- `var(--bg-tertiary)` - Hover states

**Text:**
- `var(--text-primary)` - Main text
- `var(--text-secondary)` - Secondary text
- `var(--text-muted)` - Disabled/placeholder

**Accents:**
- `var(--accent)` - Primary accent color
- `var(--accent-hover)` - Hover state
- `var(--accent-light)` - Light variant

**Borders & Shadows:**
- `var(--border)` - Default borders
- `var(--shadow-soft)`, `var(--shadow-medium)`, `var(--shadow-strong)`

#### Component Categories

Each component is assigned one of these categories:
- `button` - Buttons, CTAs, interactive triggers
- `card` - Cards, panels, containers
- `form` - Inputs, forms, form controls
- `navigation` - Menus, nav bars, breadcrumbs
- `animation` - Animated elements, loaders
- `layout` - Grid systems, layouts
- `feedback` - Alerts, toasts, notifications
- `data-display` - Lists, tables, badges

---

## Basic Code Generation API

### Generate Code

**Endpoint:** `POST /api/generate`

Simple code generation endpoint for general-purpose code snippets.

#### Request

```json
{
  "prompt": "Write a Python function to reverse a string"
}
```

#### Response

```json
{
  "code": "def reverse_string(s: str) -> str:\n    return s[::-1]"
}
```

---

## Health Check

**Endpoint:** `GET /`

Returns API health status.

#### Response

```json
{
  "status": "running"
}
```

---

## Configuration

The API requires the following environment variables:

- `OPENAI_API_KEY` - Your OpenAI API key

Set these in a `.env` file in the backend directory.

---

## Error Handling

All endpoints return standard HTTP status codes:

- `200` - Success
- `422` - Validation error (invalid request body)
- `500` - Server error (e.g., OpenAI API failure)

Error response format:
```json
{
  "detail": "Error message description"
}
```
