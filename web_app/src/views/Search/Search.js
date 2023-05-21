import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import Image from "../../components/UI/Image/Image"
import "./Search.css";
import Wave from "../../components/Wave/Wave"

import CardSuggestion from "../../components/CardSuggestion/CardSuggestion"

import BookServices from "../../services/BookServices"

import Modal from "../../components/Modal/Modal";

import Button from "../../components/UI/Button/Button";

function Search() {

    const bookEndRef = useRef(null)

    const navigate = useNavigate();

    const [inputResearch, setInputResearch] = useState("")
    const [genres, setGenres] = useState("");
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

    const setGenresPicked = (val) => {
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
        let result = "";
        if (inputResearch != "") {
            result = await BookServices.getBooksWithResearch({
                labels: inputResearch
            })
        }
        else {
            if (languagesPick == "" || genresPick == "") return;
            result = await BookServices.getBooksWithData({
                genres: genresPick,
                languages: languagesPick
            })
            console.log(result);
        }
        let removeDuplicates = [];
        result.items.forEach(element => {
            if (removeDuplicates.filter(e => e.volumeInfo.title === element.volumeInfo.title).length == 0) {
                removeDuplicates.push(element)
            }
        });
        setSuggestions(removeDuplicates);

    }

    const handleKeyDown = (e, bool) => {
        
        e.preventDefault();
        if (e.key === 'Enter' || bool == true) {
            onSubmit();
            return;
        }
    }

    useEffect(() => {

        if ( languagesPick == "" || genresPick == ""){// si pas de selection,
            if (inputResearch == "") return;
        };
        
        bookEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [suggestions]);



    useEffect(() => {    // Met à jour le titre du document via l’API du navigateur
        getAllGenres()
        getAllLanguages()
    }, []);
    return (
        <div className="main_container">
            <div className="title_story">
                <h1>Recherche de livre </h1>
            </div>
            <br></br><br></br>

            <Wave text={"Cherchons ensemble !"}></Wave>
            <form className="form_search" onSubmit={ (e) => { handleKeyDown(e, true) }}>

                <br></br>
                <div className="form_container">
                    <div className="row">
                        <div className="col-25">
                            <label>Une idée précise ? Entrez la !</label>
                        </div>
                        <div className="col-75" style={{ marginBottom: "25px" }}>
                            <div className="list_checkbox_container">
                                <input type="text" onChange={(e) => setInputResearch(e.target.value)}></input>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label>Genre(s) apprécié(s) :</label>
                        </div>
                        <div className="col-75">
                            <div className="list_checkbox_container">
                                {Array.isArray(genres) ?
                                    genres.map((genre, i) => {
                                        // Affichage
                                        return (
                                            <div> <input key={genre + i} type="checkbox" id={genre + i} className="checkbox" onClick={() => setGenresPicked(genre)} onKeyDown={(e) => handleKeyDown(e)} />  <label key={genre + i + "lab"} htmlFor={genre + i}>{genre}</label> </div>
                                        )
                                    })
                                    :
                                    null
                                }

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label>Langue(s)</label>
                        </div>
                        <div className="col-75">
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
                        <div className="row" style={{ paddingTop: "100px" }}>
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