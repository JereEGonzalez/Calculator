import React from "react";
import "../stylesheet/Button.css"

function ButtonOn (props){

    return(
        <div className="btn-container operator" onClick={() => props.managerClic(props.children)}>
            {props.children}
        </div>
    )
};

export default ButtonOn;