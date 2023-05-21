import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Button/Button"
import BookServices from "../services/BookServices"
import "./Home.css";
import "./particles.scss"
import Mochi from "../images/mochi-peach.gif"
import MochiSlap from "../images/milk-and-mocha-cute.gif"
function Home() {
    const navigate = useNavigate();

    return (
        <div>

            <div id="home_page">
                <img src={Mochi} className="mochi_picture" /><br></br>
                <img src={MochiSlap} className="mochi_slap_picture" /><br></br>
                <Button classNameList="validate" label="Un peu d'histoire ?" onClick={() => { navigate("/story") }}></Button>
                <Button classNameList="validate" label="Chercher un livre pour moi" onClick={() => { navigate("/search") }}></Button>
                <Button classNameList="validate" label="IA et Livres" onClick={() => { navigate("/ia") }}></Button>
            </div>
        </div>
    );
};

export default Home;