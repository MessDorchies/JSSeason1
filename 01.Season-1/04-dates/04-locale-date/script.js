
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let currentDate = new Date();
    let fullNameDay = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    let day = currentDate.getDay();
    let dateOfToday = currentDate.getDate();
    let fullNameMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    document.getElementById("target").innerHTML = fullNameDay[day] + " " + dateOfToday + " " + fullNameMonth[month] + " " + year + ", " + hours + "h" + minutes;
})();
