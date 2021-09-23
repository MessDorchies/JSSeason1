// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    // your code here
    
    let rand = Math.floor(Math.random()*99);
    let numbGuess = true;
    let guess = 0;
    let numbTry = 1;
    while(numbGuess){
        guess = parseInt(prompt("Entrez un nombre"));
        if(rand === guess){
            alert("Congrat you got the number! It take you " + numbTry + " try.");
            numbGuess = false;
        }
        else{
            (rand > guess) ? alert("to low ! try higther.") : alert("to higth ! try lower.");
        }
        numbTry++;
    }

})();
