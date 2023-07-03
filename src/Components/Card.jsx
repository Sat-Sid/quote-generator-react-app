import React from "react";
import Button from "./Button";


function Card(props){

    let authName = props.quoteObj.author;
    let authorName = (authName === null) ? "anonymous" : authName;

    function btnClick(btnName){
        props.clickedOn(btnName);
    }

    return (
        <div className="card-area">
            <div className="card-cust">
                <div className="quote-area d-flex flex-column text-dark">
                    <div className="quote-text">
                        <h1><i className="bi bi-quote opacity-50"></i></h1>
                        <p>{props.quoteObj.text}</p>
                    </div>
                    <div className="quote-author text-end">
                        <p className="text-uppercase fst-italic fw-semibold fs-sm-cust">- {authorName}</p>
                    </div>
                </div>
                <hr className="border border-primary border-2 opacity-25 rounded-pill" />
                <div className="buttons-area d-flex justify-content-between">
                    <Button clickedOnBtn= {btnClick} name= "twitter" buttonText= "Tweet" btnIconClassName= "bi bi-twitter me-1" />
                    <Button clickedOnBtn= {btnClick} name= "new quote" buttonText= "New Quote" btnIconClassName= "bi bi-arrow-clockwise me-1" />
                </div>

            </div>


        </div>

    );


}


export default Card;