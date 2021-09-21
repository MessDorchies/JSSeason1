
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    const today = new Date();
    if(today.getHours() < 18 && today.getMinutes() <30){
        document.getElementById("target").innerHTML = "Hello!";
    }
    else{
        document.getElementById("target").innerHTML = "Good evening!";
    }
})();
