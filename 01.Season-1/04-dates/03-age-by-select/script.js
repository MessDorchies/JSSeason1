
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    // your code here
    
    document.getElementById("run").addEventListener('click' , function() { 
        let dayOfBirth = document.getElementById("dob-day").value;
        let monthOfBirth = document.getElementById("dob-month").value;
        let yearOfBirth = document.getElementById("dob-year").value;
        let fullDateOfB = new Date(monthOfBirth + "/" + dayOfBirth + "/" + yearOfBirth);
        let currentDate = new Date();
        let age = (currentDate.getMonth() < fullDateOfB.getMonth() || currentDate.getMonth() == fullDateOfB.getMonth() && currentDate.getDay() < fullDateOfB.getDay()) ? (currentDate.getFullYear() - fullDateOfB.getFullYear()) -1 : currentDate.getFullYear() - fullDateOfB.getFullYear() ;
        alert(age) });
})();