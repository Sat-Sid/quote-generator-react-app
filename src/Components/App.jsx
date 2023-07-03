import React, {useState} from "react";
import {getQuotes, getRandomQuoteFromArray} from "../quotesModule";
import Spinner from "./Spinner";
import Card from "./Card";
import Footer from "./Footer";


//function to tweet quote
function tweetQuote(quoteToTweet){

    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteToTweet}`;

    window.open(twitterUrl, "_blank");
}


//setting true to run only once
let isLoadingFirstTime = true;



function App(){

    const [isLoading, setIsLoading] = useState(true);
    const [newQuoteObj, setNewQuoteObj] = useState("");
    

    //function to handle when button is pressed
    function handelBtnClick(btnClicked){

        if (btnClicked === "new quote"){
            setNewQuoteObj(getRandomQuoteFromArray());

        } else if (btnClicked === "twitter") {

            const qtToTweet = `${newQuoteObj.text} - ${newQuoteObj.author}`;
            
            tweetQuote(qtToTweet);
        }
    }


    //function to call getQuotes function from quotesModule
    async function loadingFirstTime(){

        let initialQuoteObj = await getQuotes(getRandomQuoteFromArray);

        setNewQuoteObj(initialQuoteObj);
    }


    //check if app is loading for first time, if true then call loadingFirstTime function
    if (isLoadingFirstTime){

        loadingFirstTime().then(function(){
            setIsLoading(false);
        });

        isLoadingFirstTime = false;
    }



    return (

        <div className="container-cust d-flex flex-column justify-content-center align-items-center">
            
            {

                (isLoading) ? <Spinner /> :  <Card quoteObj= {newQuoteObj} clickedOn= {handelBtnClick}/>
            }
            
            <Footer />
        </div>
    );
}

export default App;