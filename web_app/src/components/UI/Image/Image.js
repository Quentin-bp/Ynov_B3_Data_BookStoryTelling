import React from 'react';
import "./Image.css"
function Image({ legend, image, onClick, className, style, classNameList }) {
    const classNamePrefix = "image_main ";

    return (
        <div className="image_container">
            <div className="border_image">
                <img style={style} className={classNamePrefix + (classNameList ? classNameList : "")} src={image} onClick={onClick} /><br></br>
                <div className="legend_image">{legend} </div>
            </div>
        </div>
    );
};

export default Image;

Image.defaultProps = {

}