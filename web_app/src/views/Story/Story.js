import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Image from "../../components/UI/Image/Image"
import "./Story.css";
import Wave from "../../components/Wave/Wave"

import GraphRepartitionCategory from "../../images/Repartition_lecture_categorie.png";
import GraphCompletionCategory from "../../images/Completion_lecture_categorie.png";
import GraphRepartitionAge from "../../images/repartition_age.png";
import GraphRepartitionCategoryMen from "../../images/categorie_lecture_homme.png";
import GraphRepartitionCategoryWomen from "../../images/categorie_lecture_femme.png";
import PeintureLascaux from "../../images/PeintureLascaux.jpg"
import MentalCard from "../../images/categories_mental_card.jpg";
import FontBookBackground from "../../components/FontBookBackground/FontBookBackground"
import FontTextBackground from "../../components/FontTextBackground/FontTextBackground"


import Modal from "../../components/Modal/Modal";

function Story() {
    const [genres, setGenres] = useState("");

    const navigate = useNavigate();
    const [isOpenLascaux, setIsOpenLascaux] = useState(false);
    const [isOpenMentalCard, setIsOpenMentalCard] = useState(false);
    const [isOpenWoman, setIsOpenWoman] = useState(false);

    return (
        <div className="main_container">
            <div className="title_story">
                <h1>Analyse de la littérature </h1>
            </div>
            <br></br><br></br>

            <Wave text={" La lecture existe depuis aussi longtemps que l'écriture, c'est à dire à la préhistoire, avec les peintures."} description_modal="📜 Un peu de culture ! 📜" onClick={() => setIsOpenLascaux(true)}></Wave>
            {isOpenLascaux && <Modal setIsOpen={setIsOpenLascaux} title={"L'art de la communication dans les temps anciens"} img={PeintureLascaux} legend="Peinture présente dans la grotte de Lascaux, dans le sud-ouest de la France" />}

            <div className="section" name="section2">
                <div>
                    <FontBookBackground description="En 2010, d'après les études de Google, il n'existerait pas moins de :" main="130 millions de livres uniques"></FontBookBackground>
                </div>
            </div>
            <Wave text={"Évidemment, ce sont des chiffres estimatifs et à l'heure de la digitalisation et d'internet, il est fort probable que ce nombre soit déjà bien supérieur. \n Aujourd'hui, il existe également énormément de lecteurs, que ça soit occasionnel ou aguérie, et pour n'importe quel type de lecture"}></Wave>
            <br></br><br></br>

            <Image image={GraphRepartitionCategory} legend="Répartition des catégories de livre lu, depuis les données d'un sondage de l'IPSOS" /><br></br>
            <Image image={GraphCompletionCategory} legend="Répartition de la complétion des livres par catégorie, depuis les données d'un sondage de l'IPSOS" /><br></br>

            <Wave text={"Beaucoup de livres, et une grande part de lecture, oui... Mais pour quelles raisons ?"} _class="margin_top" ></Wave>
            <div className="section" name="section3">
                <div>
                    <FontTextBackground description={"Genre, âge, expérience, goût, catégorie de livre ... \n Il est impossible d'estimer le nombre de livre qui pourraient convenir à un unique individu, mais il est possible de trouver un livre qui pourrait convenir à ses goûts"} main="Une histoire rien que pour vous" description_modal="📚 Quelques facteurs ! 📚" onClick={() => setIsOpenMentalCard(true)}></FontTextBackground>
                    {isOpenMentalCard && <Modal setIsOpen={setIsOpenMentalCard} title={"Et vous, pourquoi lisez-vous?"} img={MentalCard} legend="Liste non exaustive des facteurs de lecture pour un individu" imgClass="mental_card" />}

                </div>
            </div>
            <Wave text={"Pour vous donnez une petite idée... Saviez-vous que ce ne sont pas les personnes âgées qui lisent le plus? "} ></Wave>
            <Image image={GraphRepartitionAge} legend="Répartition des lecteurs par tranche d'âge" /><br></br>
            <Wave text={"Et vous ? Vous avez une idée de thème qui pourrait vous plaire, ou pas encore ? \n Et bien, si l'on vous disait que ce choix peut dépendre de votre genre ?!"} _class="margin_top"></Wave>

            <Image image={GraphRepartitionCategoryMen} legend={"Répartition des catégories de livre lu par les hommes \n \nGraphique construit depuis les données de l'IPSOS"} classNameImageList="mental_card" />
            <Wave text={"Essayez de devinez pour les femmes, d'après vous, que préfèrent-t-elles?"} description_modal="📜Regardez le résultat !📜" onClick={() => setIsOpenWoman(true)} _class="margin_top"></Wave>

            {isOpenWoman && <Modal setIsOpen={setIsOpenWoman} title={"Les pratiques et art de vivre !"} img={GraphRepartitionCategoryWomen} legend={"Et non, ce ne sont pas les romans comme beaucoup le pense ! \n \nGraphique construit depuis les données de l'IPSOS"} imgClass="woman_repart" />}
            <div className="section" name="section4">
                <div>
                    <FontBookBackground description={"Il y a tellement de facteur à prendre en compte... \n C'est pour cela qu'on peut dire qu'il existe forcément un livre qui vous \n conviendra à la perfection !"} main={"Même sans chercher \nvous pouvez trouver !"} description_modal="📚 Quelques facteurs ! 📚" onClick={() => setIsOpenMentalCard(true)}></FontBookBackground>
                </div>
            </div>
            {
                /*
                
            [Mettre des graphiques sur les types de personnes qui lisent, femme, homme, âge si possible, type du livre etc] < br ></br > <br></br>

            Le problème qui se pose très souvent est de trouver le livre qui nous conviendra à partir de nos critères de sélection.< br ></br > <br></br>
            [Mettre un graphique avec des données "originales" : les colonnes elle - même des livres : notes / auteur / catégorie du livre / nb pages, etc] < br ></br >
            */
            }


        </div >
    );
};

export default Story;