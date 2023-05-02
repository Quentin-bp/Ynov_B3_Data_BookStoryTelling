import requests
import pandas as pd


def getBookInfo(isbn):
    url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        if 'items' in data and data['items']:
            book = data['items'][0]['volumeInfo']
            if 'pageCount' in book:
                page_count = book['pageCount']
            else:
                page_count = 'N/A'
            if 'categories' in book:
                genre = book['categories'][0]
            else:
                genre = 'N/A'
            return page_count, genre
    return 'N/A', 'N/A'
