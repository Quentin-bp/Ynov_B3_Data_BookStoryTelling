import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Button/Button"
import BookServices from "../services/BookServices"
import "./Home.css";
function Home() {
    const [genres, setGenres] = useState("");
    const [authors, setAuthors] = useState("")
    const [books, setBooks] = useState("")
    const [languages, setLanguages] = useState("")
    const navigate = useNavigate();

    const [choicesPicked, setChoicesPicked] = useState([])
    const [languagePick, setLanguagePick] = useState("fr")
    //const [book]
    const getAllGenres = async () => {
        let result = await BookServices.getGenres();
        setGenres(result)
    }
    const getAllLanguages = async () => {
        let result = await BookServices.getLanguages();
        setLanguages(result)
    }
    const getAllAuthors = async () => {
        let result = await BookServices.getAuthors();
        setAuthors(result)
    }

    const getAllBooks = async () => {
        let result = await BookServices.getBooks();
        setBooks(result)
    }

    const setChoices = async (choice) => {
        if (!choicesPicked.includes(choice)) {
            setChoicesPicked([...choicesPicked, choice])
        }
        else {
            setChoicesPicked(choicesPicked.filter(e => e !== choice))
        }
    }
    useEffect(() => {    // Met à jour le titre du document via l’API du navigateur
        searchBooks()
    }, [choicesPicked, languagePick]);

    const searchBooks = async () => {
        let result = []
        if (choicesPicked != []) {
            console.log(languagePick)
            result = await BookServices.searchBooks({ content: choicesPicked, langage: languagePick })
        }
        setBooks(result.items)
    }
    return (
        <>
            <Button classNameList="validate" label="Un peu d'histoire ?" onClick={() => { navigate("/story") }}></Button>
            <Button classNameList="validate" label="Chercher un livre pour moi" onClick={() => { getAllGenres(); getAllLanguages(); }}></Button>
            { /* 
            <Button classNameList="validate" label="Liste auteurs" onClick={() => { getAllAuthors() }}></Button>
            <Button classNameList="validate" label="Liste livres" onClick={() => { getAllBooks() }}></Button>
    */ }
            <div>
                <div style={{ display: Array.isArray(genres) ? "block" : "none" }}> Genres appréciés : </div>
                {Array.isArray(genres) ?
                    genres.map((genre, i) => {
                        // Affichage
                        return (
                            <> <input key={genre + i} type="checkbox" id={genre + i} className="checkbox" onClick={() => setChoices(genre)} />  <label key={genre + i + "lab"} htmlFor={genre + i}>{genre}</label> </>
                        )
                    })
                    :
                    null
                }

            </div>
            <div>
                <div style={{ display: Array.isArray(languages) ? "block" : "none" }}> Languages souhaités : </div>
                {Array.isArray(languages) ?
                    languages.map((language, i) => {
                        // Affichage
                        return (
                            <> <input key={language + i} type="checkbox" id={language + i} className="checkbox" onClick={() => setLanguagePick(language)} />  <label key={language + i + "lab"} htmlFor={language + i}    >{language}</label> </>
                        )
                    })
                    :
                    null
                }

            </div>
            <div>
                {

                    Array.isArray(authors) ?
                        authors
                        :
                        null
                }
            </div>
            <div>
                {

                    Array.isArray(books) ?
                        books.map((book, i) => {
                            // Affichage
                            return (
                                <>
                                    <img src={book.volumeInfo.imageLinks?.thumbnail} />
                                    <div> {book.volumeInfo.title} </div>


                                </>

                            )

                        })
                        :
                        null
                }
            </div>
        </>
    );
};

export default Home;