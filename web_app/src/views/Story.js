import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Button/Button"
import Image from "../components/UI/Image/Image"
import BookServices from "../services/BookServices"
import "./Home.css";
import GraphRepartitionCategory from "../images/Repartition_lecture_categorie.png";
import GraphCompletionCategory from "../images/Completion_lecture_categorie.png";
import PeintureLascaux from "../images/PeintureLascaux.jpg";
function Home() {
    const [genres, setGenres] = useState("");

    const navigate = useNavigate();

    /*
    useEffect(() => {    // Met à jour le titre du document via l’API du navigateur
        //searchBooks()
    }, [choicesPicked]);
*/
    return (
        <>
            <div>
                La lecture existe depuis aussi longtemps que l'écriture, c'est à dire à la préhistoire, avec les peintures.
                <Image image={PeintureLascaux} legend="Peinture présente dans la grotte de Lascaux, dans le sud-ouest de la France"/><br></br>

            </div><br></br>
            <div>
                En 2010, d'après les études de Google, il n'existerait pas moins de : <br></br>
                <span style={{ fontSize: "60px" }}>130 millions de livres uniques </span>
            </div>
            <div>
            <br></br>
            Évidemment, ce sont des chiffres estimatifs et à l'heure de la digitalisation et d'internet, il est fort probable que ce nombre soit déjà bien supérieur.<br></br><br></br>

            
            Aujourd'hui, il existe également énormément de lecteurs, que ça soit occasionnel ou aguérie, et pour n'importe quel type de lecture<br></br><br></br>
            <Image image={GraphRepartitionCategory} legend="Répartition des catégories de livre lu, depuis les données d'un sondage de l'IPSOS"/><br></br>
            <Image image={GraphCompletionCategory} legend="Répartition de la complétion des livres par catégorie, depuis les données d'un sondage de l'IPSOS"/><br></br>
            [Mettre des graphiques sur les types de personnes qui lisent, femme , homme, âge si possible, type du livre etc]<br></br><br></br>

            Le problème qui se pose très souvent est de trouver le livre qui nous conviendra à partir de nos critères de sélection.<br></br><br></br>
            [Mettre un graphique avec des données "originales" : les colonnes elle-même des livres : notes / auteur / catégorie du livre / nb pages , etc ]<br></br>


            </div>
        </>
    );
};

export default Home;