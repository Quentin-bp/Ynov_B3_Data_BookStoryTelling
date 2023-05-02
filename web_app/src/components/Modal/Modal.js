// @src/components/Modal.jsx
import { CgClose } from 'react-icons/cg';

import React from "react";
import styles from "./Modal.css";

const Modal = ({ setIsOpen, title, img, legend}) => {
    return (
        <>
                <div className="darkBG" onClick={() => setIsOpen(false)} />
                <div className="centered">
                    <div className="modal">
                        <div className="modalHeader">
                            <h5 className="heading">{title}</h5>
                        </div>
                        <button className="closeBtn" onClick={() => setIsOpen(false)}>
                    <CgClose></CgClose>
                        </button>
                        <div className="modalContent">
                            <img src={img}></img>
                            <div style={{marginTop:"10px"}}>{legend} </div>
                        </div>
                    </div>
                </div>

        </>
    );
};

export default Modal;
