import React from "react";
import { useState } from 'react';
import '../stylesheet/Panel.css'

const Panel = (props) => {


    return (
        <div className={`input ${props.onOff ?  null :"input-off"}`}>
            {props.input}
        </div>
    );
}


export default Panel;