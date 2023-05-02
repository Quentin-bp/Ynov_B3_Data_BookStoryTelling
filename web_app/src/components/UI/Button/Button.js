import React from 'react';
import "./Button.css"
function Button ({label,onClick, className ,style,classNameList}) {
    const classNamePrefix = "button ";

    return (
        <>
            <button style={style} className={classNamePrefix + classNameList} onClick={onClick}>{label}</button>
        </>
    );
};

export default Button;

Button.defaultProps = {
    className : "validate",
    type : "button",
    disabled : false,
    style : {}
}