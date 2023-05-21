import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import Image from "../../components/UI/Image/Image"
import "./IA.css";
import Wave from "../../components/Wave/Wave"

import CardSuggestion from "../../components/CardSuggestion/CardSuggestion"

import BookServices from "../../services/BookServices"

import Modal from "../../components/Modal/Modal";

import Button from "../../components/UI/Button/Button";
import FontBookBackground from "../../components/FontBookBackground/FontBookBackground"
import FontTextBackground from "../../components/FontTextBackground/FontTextBackground"

import MochiSad from "../../images/sad-peachcat.gif"
import FrequenceLivre from "../../images/Frequence_livres_ia.png"
import PoidsVariable from "../../images/PoidsVariables.png"
import PrecisionModel from "../../images/PrecisionModel.png"
import CoutModel from "../../images/CoutModel.png"
import Result from "../../images/ResultatsPredictions.png"
function Search() {

    const [isOpenHelpWebsite, setIsOpenHelpWebsite] = useState(false);
    const [isOpenPoidsVariable, setIsOpenPoidsVariable] = useState(false);
    const [isOpenResult, setIsOpenResult] = useState(false);
    const navigate = useNavigate();

    const links = [
        { url: "https://inside-machinelearning.com/premier-projet-keras/", label: "Tutoriel débutant machine learning" },
        { url: "https://www.kaggle.com/code/jl18pg052/classification-tensorflow-and-feature-selection", label: "Kaggle tutoriel de classification" }
    ]

    return (
        <div className="main_container">
            <div className="title_story">
                <h1>IA et livres </h1>
            </div>
            <br></br><br></br>

            <Wave text={"Pour faire du machine learning, il faut impérativement avoir des données."}></Wave>

            <div className="section" name="section1">
                <div>
                    <FontTextBackground description={"\n Besoin : Âge et genre du lecteur, catégorie de livre et livre préféré. \n Problème : Trop complexe à trouver"} main={"Solution : \n Les générer avec de l'aléatoire"}></FontTextBackground>
                </div>
            </div>

            <Wave text={"Une fois les données obtenues, il est temps de les travailler, et les complications au niveau algorithmie commencent."} description_modal="📜 Explications 📜" onClick={() => setIsOpenHelpWebsite(true)}></Wave>
            {isOpenHelpWebsite && <Modal setIsOpen={setIsOpenHelpWebsite} title={"Recherches variées"} img={MochiSad} legend={"Problèmes : Connaissances en machine learning fragiles. \n Ainsi, nous avons dû passer beaucoup de temps à faire des recherches. \n\n Exemple de tutoriels suivis (cliquez pour y accéder):"} links={links} />}
            <br></br><br></br>

            <Image image={FrequenceLivre} legend="Répartition des catégories de livre dans notre dataset" classNameList="space_picture" />

            <Wave text={"Il faut maintenant regarder informatiquement quelles variables sont intéressantes pour le modèle d'apprentissage que l'on créera par la suite"} description_modal="⚖️ Répartition des poids ⚖️" onClick={() => setIsOpenPoidsVariable(true)}></Wave>
            {isOpenPoidsVariable && <Modal setIsOpen={setIsOpenPoidsVariable} title={"Répartition des poids de chaque variable"} img={PoidsVariable} legend={"Avec respectivement les valeurs : \n 0 : Nom \n 1 : Prénom \n 2 : Âge \n 3 : Genre du lecteur \n 4 : Genre de livre préféré"} />}

            <Image image={PrecisionModel} legend="Courbes de précision du modèle" classNameList="space_picture" />
            <Image image={CoutModel} legend="Fonction de perte du modèle" classNameList="space_picture" />
            <div className="section" name="section2">
                <div>
                    <FontBookBackground description={"Les résultats obtenues par la suite ne sont malheureusement pas exploitables."} main={"Nous espérons vous avoir \n cultivé sur ce thème !"} description_modal="📚 Résultat peu probant 📚" onClick={() => setIsOpenResult(true)}></FontBookBackground>
                </div>
            </div>
            {isOpenResult && <Modal setIsOpen={setIsOpenResult} title={"Tableau de corrélation des valeurs prédites et réelles"} img={Result} legend={"Résultats lors de la prédiction avec les valeurs de test : peu exploitable"} />}

        </div >
    );
};

export default Search;