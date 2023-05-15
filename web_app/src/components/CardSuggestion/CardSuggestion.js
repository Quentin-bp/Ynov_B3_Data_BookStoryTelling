import React, { useEffect, useState } from 'react';
import "./CardSuggestion.css"
import Modal from "../../components/Modal/Modal";
function CardSuggestion({ book }) {
    const volumeInfo = book.volumeInfo;
    const authors = volumeInfo.authors?.toString();
    const publishedDate = volumeInfo.publishedDate ? new Date(volumeInfo.publishedDate).toLocaleDateString("fr") : ""
    const legend = (volumeInfo.description ? volumeInfo.description :  "Pas de description" )+ "\n\n" + "Auteur(s) : " + authors + "\n" + "Date de sortie : " + (publishedDate ? publishedDate + (new Date(volumeInfo.publishedDate) > new Date()  ? " -> Pas encore sortie" : ""  ) : "Pas de date saisie")
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="card-suggestion_container">
            <div className="card_container" onClick={()=>setIsOpen(true)}>
                <img src={volumeInfo.imageLinks?.thumbnail} /><br></br>
                <div className="title_card">{volumeInfo.title} </div>
            </div>
            {isOpen && <Modal setIsOpen={setIsOpen} title={volumeInfo.title} img={volumeInfo.imageLinks?.thumbnail} legend={legend} />}
        </div>




    );
};

export default CardSuggestion;
