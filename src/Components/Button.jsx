import React from "react";


function Button(props){

    function handelClick(e){
        props.clickedOnBtn(e.target.title);
    }

    return (
        <button onClick= {handelClick} title= {props.name} type="button" className="btn btn-outline-primary btn-sm">
            <i className= {props.btnIconClassName} ></i>{props.buttonText}
        </button>
    );
}

export default Button;