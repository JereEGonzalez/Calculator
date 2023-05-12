import React from "react";
import "../stylesheet/Button.css"

const Clear = (props) => (
    <div className="btn-container operator" onClick={props.managerClear}>
        {props.children}
    </div>
);

export default Clear;