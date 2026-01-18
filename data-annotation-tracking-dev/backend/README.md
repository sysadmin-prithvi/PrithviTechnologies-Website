project-root/
├─ backend/
│ ├─ db/
| | |-**init**.py
| | |-database.py
│ ├─ core/
│ ├─ models/
│ │ ├─ **init**.py
│ │ ├─ user.py
│ │ └─ ...other model files...
│ ├─ schemas/
│ ├─ routers/
│ └─ scripts/ # (optional) for seed scripts
└─ (other files)

uvicorn - acts as a web server to run the fastAPI app
folders:
core - core applications of our project
db - for database operations
models - for database models
routers - for handling the API routes
schemas - define the data that comes in and out of the apis

---

Install the required packages listed in requirements.txt

uv add fastapi[all] python-dotenv pandas openpyxl python-multipart uvicorn psycopg2-binary sqlalchemy databases psycopg2-binary python-jose[cryptography] passlib[bcrypt] python-decouple pyJWT alembic

---

To run the backend:
uv run .\main.py
