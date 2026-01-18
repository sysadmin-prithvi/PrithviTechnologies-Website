import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import user, projects, daily_status, auth, problem_list, project_problem_mapping, problem_noted
from db.database import create_tables, seed_dummy_users

from core.config import settings

create_tables()
seed_dummy_users()

app = FastAPI(
    title="XequalsAI - Annotation Tracker",
    doc="/docs",
    redoc="/redoc",
)

app.include_router(user.router)
app.include_router(projects.router)
app.include_router(daily_status.router)
app.include_router(auth.router)
app.include_router(problem_list.router)
app.include_router(project_problem_mapping.router)
app.include_router(problem_noted.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins= settings.ALLOWED_ORIGINS,  # Use the allowed origins from settings
    allow_credentials=True,
    allow_methods=["*"], # Allows all methods (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],
)


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)