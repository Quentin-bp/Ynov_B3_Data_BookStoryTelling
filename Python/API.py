from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import tensorflow as tf
import json
import requests
import pandas as pd
app = FastAPI()

fileCategoryGoogle = open("./Model/CategoryListGoogle.json")
categoryGoogle = json.load(fileCategoryGoogle)
origins = [
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

@app.get("/genres")
async def genres():
    listeCategory = []
    for i in categoryGoogle["category"]:
        listeCategory.append(i)

    return listeCategory


@app.get("/languages")
async def languages():
    return ["EN"]

class Search(BaseModel):
    # age: str
    # genre: str
    genres: list
    languages: list


@app.post("/search")
async def searchBooks(data: Search):

    apiUrl = "https://www.googleapis.com/books/v1/volumes?q="
    genres = '+'.join(data.genres)
    languages = '+'.join(data.languages)

    apiUrl = apiUrl + "subject: \" " + genres + "\""
    print(apiUrl)
    apiUrl = apiUrl + "&langRestrict=" + languages
    apiUrl += "&orderBy=newest&printType=books&maxResults=12"
    response = requests.get(apiUrl)
    return response.json()


class Research(BaseModel):
    labels: str


@app.post("/research")

async def researchBooks(data: Research):
    print(data)
    apiUrl = "https://www.googleapis.com/books/v1/volumes?q="

    apiUrl = apiUrl + data.labels
    apiUrl += "&printType=books&maxResults=12"
    print(apiUrl)
    response = requests.get(apiUrl)
    return response.json()

@app.get("/test_ia")
async def test_ia():
    fileTest = "./Model/DatabaseIA.json"
    df = pd.read_json(fileTest)

    X = df.loc[:, df.columns != 'Livre_Prefere']
    Y = df.loc[:, 'Livre_Prefere']
    
    model = tf.keras.Sequential()
    model.add(tf.keras.layers.Dense(12, input_shape=(5,), activation='relu'))
    model.add(tf.keras.layers.Dense(5, activation='relu'))
    model.add(tf.keras.layers.Dense(1, activation='sigmoid'))

    model.compile(loss='binary_crossentropy', optimizer='adam', metrics=['accuracy'])
    model.fit(X, Y, epochs=100)
    #raw_val_ds = tf.keras.utils.text_dataset_from_directory('./Model/DatabaseIA.json',batch_size=32,validation_split=0.2,subset='validation',seed=42)

    #list_livre_pref = []
    # for i in dataTest:
    #    list_livre_pref.append(i["Livre_Prefere"])

    #raw_val_ds = tf.Tensor(list_livre_pref)

    return model