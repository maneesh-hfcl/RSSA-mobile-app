from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"msg":"Home url of Remote Self Audit project"}

