import React from 'react';
import "./Image.css"
function Image({ legend, image, onClick, className, style, classNameList }) {
    const classNamePrefix = "image ";

    return (
        <>
            <div style ={{border : "1px solid black", textAlign : "center"}}>
                <img style={style} className={classNamePrefix + classNameList} src={image} onClick={onClick} /><br></br>
                <div>{legend} </div>
            </div>
        </>
    );
};

export default Image;

Image.defaultProps = {

}