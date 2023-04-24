from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# uvicorn API:app --reload

@app.get("/")
async def main():
    return {"message": "Hello `World"}

@app.get("/authors")
async def authors():
    return ["Alice Oseman", "JK. Rowling", "Antony Horrowitz"]


@app.get("/search/{genres}")
async def search(genres: str | None):
    apiUrl = "https://www.googleapis.com/books/v1/volumes?q="
    req = apiUrl + genres
    response = requests.get(req)
    return response.json()


@app.get("/genres")
async def genres():
    return ["Romance", "Aventure","Adolescent", "Science Fiction"]

@app.get("/languages")
async def languages():
    return ["FR", "EN", "SP"]


@app.get("/books")
async def genres():
    return ["Heartstopper", "Harry Potter", "Le pouvoir des 5"]


@app.post("/weapons/add")
async def addWeapon():
    return "2"


@app.put("/weapons/edit")
async def editWeapon():
    print("edit")


@app.delete("/weapons/remove")
async def deleteWeapon():
    print("delete")
