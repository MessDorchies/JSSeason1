
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    // YOUR CODE HERE
    function identity(){
        let confirmedID = false;
        while(!confirmedID){
            let name = prompt("What's your name?");
            let age = prompt("How old are you?");
            let city = prompt("Where do you live ?");
            alert("Your name is " + name + ", you have " + age + " years old and you live in " + city + ".");
            let isOk = prompt("Is that correct? ");
            if(isOk === "yes"){
                confirmedID = true;
            }
            else{
                confirmedID = false;
            }
        }
        
    }
    identity();
})();
