import React from "react";
import "../stylesheet/Button.css"

function Button (props){
   
    const isOperator = value => {
        return isNaN(value) && (value != ".") && (value != "=");
    };

    return(
        <div className={`btn-container ${isOperator(props.children) ? "operator" : null}`.trimEnd()} onClick={() => props.managerClic(props.children)}>
            {props.children}
        </div>
    )
};

export default Button;