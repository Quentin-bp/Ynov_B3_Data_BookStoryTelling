import React from 'react';
import "./FontBookBackground.css"
import FontBook from '../../images/font_book1.jpg'
function FontBookBackground({ description, main }) {
    const classNamePrefix = "font_book_main ";

    return (
        <>
            <div className={classNamePrefix}>
                <img src={FontBook} /><br></br>
                <div className="text_container">{description} <br></br><br></br>
                    <span className="title">{main} </span> </div>
            </div>
        </>
    );
};

export default FontBookBackground;
