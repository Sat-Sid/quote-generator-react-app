let quotesArray = [];
const quoteAPI1 = "https://zenquotes.io/api/random";
const quoteAPI2 = "https://type.fit/api/quotes";
const quoteAPI3 = "https://zenquotes.io/api/quotes";
const quoteAPI4 = "https://jacintodesign.github.io/quotes-api/data/quotes.json";


//function to fetch from API and cache them on to quotesArray
async function getQuotes(callbackFun){
    try {
        let quRequest = await fetch(quoteAPI2);
        let res = await quRequest.json();

        //store all quotes on to an array
        quotesArray = res;
        
        return await callbackFun();
    }
    catch (error){
        console.log(error);
    }

}


//choose random quote from an quotesArray 
function getRandomQuoteFromArray(){

    let randomQuoteObj;

    if (quotesArray.length != 0){
        let randomNum = Math.floor(Math.random() * quotesArray.length);
        randomQuoteObj = quotesArray[randomNum];

    } else {
        console.log("Some error fetching data from API. Array is null or undefined")
    }


    return randomQuoteObj;
}



export {getQuotes, getRandomQuoteFromArray};

