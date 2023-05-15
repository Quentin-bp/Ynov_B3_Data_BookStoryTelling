import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import Image from "../../components/UI/Image/Image"
import "./Search.css";
import Wave from "../../components/Wave/Wave"

import CardSuggestion from "../../components/CardSuggestion/CardSuggestion"

import BookServices from "../../services/BookServices"

import Modal from "../../components/Modal/Modal";

import Button from "../../components/UI/Button_/Button";

function Search() {

    const bookEndRef = useRef(null)

    const navigate = useNavigate();

    /*
    const [age, setAge] = useState("20");
    const [genre, setGenre] = useState("f");
    */
    const [genres, setGenres] = useState("");
    const [authors, setAuthors] = useState("")
    const [languages, setLanguages] = useState("")
    const [languagesPick, setLanguagePick] = useState("")
    const [genresPick, setGenresPick] = useState("")

    const [suggestions, setSuggestions] = useState("")
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

    const setGenresPicked = (val) => {
        console.log(val);
        if (!genresPick.includes(val)) {
            setGenresPick([...genresPick, val])
        }
        else {
            setGenresPick(genresPick.filter(e => e !== val))
        }
    }
    const setLanguagesPicked = (val) => {
        if (!languagesPick.includes(val)) {
            setLanguagePick([...languagesPick, val])
        }
        else {
            setLanguagePick(languagesPick.filter(e => e !== val))
        }
    }
    const onSubmit = async () => {
        console.log({
            //age: age,
            //genre: genre,
            genres: genresPick,
            languages: languagesPick
        })
        let result = await BookServices.getBooksWithData({
            //age: age,
            //genre: genre,
            genres: genresPick,
            languages: languagesPick
        })

        let removeDuplicates = [];
        result.items.forEach(element => {
            if (removeDuplicates.filter(e => e.volumeInfo.title === element.volumeInfo.title).length == 0) {
                removeDuplicates.push(element)
            }
        });
        setSuggestions(removeDuplicates);

    }
    useEffect(() => {
        bookEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [suggestions]);



    useEffect(() => {    // Met à jour le titre du document via l’API du navigateur
        getAllGenres()
        getAllLanguages()
        getAllAuthors()
    }, []);
    return (
        <div className="main_container">
            <div className="title_story">
                <h1>Recherche de livre </h1>
            </div>
            <br></br><br></br>

            <Wave text={"Cherchons ensemble !"}></Wave>
            <form className="form_search">
                <div>
                    {

                        Array.isArray(authors) ?
                            authors
                            :
                            null
                    }
                </div>
                <br></br>
                <div class="form_container">
                    { /* 
                    
                                        <div class="row">
                        <div class="col-25">
                            <label>Age :</label>
                        </div>
                        <div class="col-75">
                            <input type="number" onChange={(e) => setAge(e.target.value)} value={age} />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label>Genre</label>
                        </div>
                        <div class="col-75">
                            <div className="list_checkbox_container">
                                <div class="col-75">
                                    <select id="genre" name="genre" onChange={(e) => setGenre(e.target.value.toLowerCase())}>
                                        <option value="f">Femme</option>
                                        <option value="h">Homme</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    */

                    }

                    <div class="row">
                        <div class="col-25">
                            <label>Genre(s) apprécié(s) :</label>
                        </div>
                        <div class="col-75">
                            <div className="list_checkbox_container">
                                {Array.isArray(genres) ?
                                    genres.map((genre, i) => {
                                        // Affichage
                                        return (
                                            <div> <input key={genre + i} type="checkbox" id={genre + i} className="checkbox" onClick={() => setGenresPicked(genre)} />  <label key={genre + i + "lab"} htmlFor={genre + i}>{genre}</label> </div>
                                        )
                                    })
                                    :
                                    null
                                }

                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label>Langue(s)</label>
                        </div>
                        <div class="col-75">
                            <div className="list_checkbox_container">
                                {Array.isArray(languages) ?
                                    languages.map((language, i) => {
                                        // Affichage
                                        return (
                                            <div> <input key={language + i} type="checkbox" id={language + i} className="checkbox" onClick={() => setLanguagesPicked(language.toLowerCase())} />  <label key={language + i + "lab"} htmlFor={language + i}    >{language}</label> </div>
                                        )
                                    })
                                    :
                                    null
                                }
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div class="row" style={{ paddingTop: "100px" }}>
                            <Button label="Voir le résultat" onClick={() => onSubmit()} />
                        </div>
                    </div>

                </div>
            </form>
            <div className="form_search grid_suggestion">
                {Array.isArray(suggestions) ?
                    suggestions.map((suggestion, i) => {
                        // Affichage
                        return (
                            <CardSuggestion book={suggestion}></CardSuggestion>
                        )
                    })
                    :
                    null
                }
            </div>
            <br></br>
            < div ref={bookEndRef}></div>
        </div >
    );
};

export default Search;