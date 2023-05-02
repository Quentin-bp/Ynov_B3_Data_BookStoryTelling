import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Image from "../../components/UI/Image/Image"
import "./Story.css";
import Wave from "../../components/Wave/Wave"
import GraphRepartitionCategory from "../../images/Repartition_lecture_categorie.png";
import GraphCompletionCategory from "../../images/Completion_lecture_categorie.png";
import PeintureLascaux from "../../images/PeintureLascaux.jpg";
import FontBookBackground from "../../components/FontBookBackground/FontBookBackground"
import FontTextBackground from "../../components/FontTextBackground/FontTextBackground"


import Modal from "../../components/Modal/Modal";

function Story() {
    const [genres, setGenres] = useState("");

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="main_container">
            <div className="title_story">
                <h1>Historique rapide et analyse de la littérature </h1>
            </div>
            <br></br><br></br>

            <Wave text={" La lecture existe depuis aussi longtemps que l'écriture, c'est à dire à la préhistoire, avec les peintures."} description_modal="📜 Un peu de culture ! 📜" onClick={() => setIsOpen(true)}></Wave>
            {isOpen && <Modal setIsOpen={setIsOpen} title={"L'art de la communication dans les temps anciens"} img={PeintureLascaux} legend="Peinture présente dans la grotte de Lascaux, dans le sud-ouest de la France" />}

            <div className="section" name="section2">
                <div>
                    <FontBookBackground description="En 2010, d'après les études de Google, il n'existerait pas moins de :" main="130 millions de livres uniques"></FontBookBackground>
                </div>
            </div>
            <Wave text={"Évidemment, ce sont des chiffres estimatifs et à l'heure de la digitalisation et d'internet, il est fort probable que ce nombre soit déjà bien supérieur. Aujourd'hui, il existe également énormément de lecteurs, que ça soit occasionnel ou aguérie, et pour n'importe quel type de lecture"}></Wave>
            <br></br><br></br>

            <Image image={GraphRepartitionCategory} legend="Répartition des catégories de livre lu, depuis les données d'un sondage de l'IPSOS" /><br></br>
            <Image image={GraphCompletionCategory} legend="Répartition de la complétion des livres par catégorie, depuis les données d'un sondage de l'IPSOS" /><br></br>

            <Wave text={"Beaucoup de lecteur, oui... Mais à quel prix?"} _class="margin_top" ></Wave>
            <div className="section" name="section3">
                <div>
                    <FontTextBackground description="Genre, âge, expérience, goût, catégorie de livre ... Il est impossible d'estimer le nombre de livre qui pourraient convenir à un unique individu, mais il est possible de trouver un livre qui pourrait convenir à ses goûts" main="Une histoire rien que pour vous" description_modal="📚 Quelques catégories ! 📚" onClick={() => setIsOpen(true)}></FontTextBackground>
                </div>
            </div>
            [Mettre des graphiques sur les types de personnes qui lisent, femme, homme, âge si possible, type du livre etc] < br ></br > <br></br>

            Le problème qui se pose très souvent est de trouver le livre qui nous conviendra à partir de nos critères de sélection.< br ></br > <br></br>
            [Mettre un graphique avec des données "originales" : les colonnes elle - même des livres : notes / auteur / catégorie du livre / nb pages, etc] < br ></br >


        </div >
    );
};

export default Story;