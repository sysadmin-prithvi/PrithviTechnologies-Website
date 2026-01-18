from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

from core.config import settings

# SQLAlchemy engine
# - In dev, we commonly use SQLite; it needs `check_same_thread=False` for FastAPI.
connect_args = {}
if settings.DATABASE_URL and settings.DATABASE_URL.startswith("sqlite"):
    connect_args = {"check_same_thread": False}

engine = create_engine(settings.DATABASE_URL, connect_args=connect_args)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()



def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def create_tables():
    Base.metadata.create_all(bind=engine)

# Import models so SQLAlchemy registers them with Base.metadata
from models.user import User
from models.projects import Project
from models.daily_status import DailyStatus
from models.problem_list import ProblemList
from models.project_problem_mapping import ProjectProblemMapping
from models.problem_noted import ProblemNoted

from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError


def seed_dummy_users():
    from db.database import SessionLocal
    from core.auth_handler import get_password_hash
    dummy_users = [
        {
            "username": "admin",
            "password": "admin123",
            "email": "admin@example.com",
            "role": "admin",
            "is_active": True
        },
        {
            "username": "annotator1",
            "password": "annotator123",
            "email": "annotator1@example.com",
            "role": "annotator",
            "is_active": True
        },
        {
            "username": "checker1",
            "password": "checker123",
            "email": "checker1@example.com",
            "role": "checker",
            "is_active": True
        },
    ]
    db: Session = SessionLocal()
    for user_data in dummy_users:
        user_data["password"] = get_password_hash(user_data["password"])
        if not db.query(User).filter(User.username == user_data["username"]).first():
            try:
                db_user = User(**user_data)
                db.add(db_user)
                db.commit()
            except IntegrityError:
                db.rollback()
    db.close()