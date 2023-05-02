import React from 'react';
import WaveImg from "../../images/wave.png";
import "./Wave.css"
function Wave({ text, description_modal, onClick }) {
    const classNamePrefix = "wave_main ";

    return (
        <div className="wave_container">
            <img src={WaveImg}></img>
            <div className="wave_text_container">
                {text}
                <br></br>
                <br></br>
                {
                    description_modal &&

                        <div className="button button--piyo" style={{ scale: "0.8" }} onClick={onClick}>
                            <div className="button__wrapper">
                                <span className="button__text">{description_modal}</span>
                            </div>
                            <div className="characterBox">
                                <div className="character wakeup">
                                    <div className="character__face"></div>
                                </div>
                                <div className="character wakeup">
                                    <div className="character__face"></div>
                                </div>
                                <div className="character">
                                    <div className="character__face"></div>
                                </div>
                            </div>
                        </div>
                }

                {/* 
                        <button className="button-story" role="button" onClick={onClick}>
                    description_modal
                </button>
    */}

            </div>


        </div>
    );
};

export default Wave;
