
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    // your code here
    document.getElementById("run").addEventListener('click', function() {
        let year = new Date(document.getElementById("year").value + '-1-01');
        let yearFinished = false;
        let fullNameMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let monthWithFriday13 = [];
        while(!yearFinished){
            if(year.getDay() === 5 && year.getDate() === 13){
                monthWithFriday13.push(fullNameMonth[year.getMonth()]);
                
            }
            else if(year.getDate() === 31 && year.getMonth() === 11){
                yearFinished = true;
            }
            year.setDate(year.getDate()+1);
            
        }
        alert(monthWithFriday13); 
    })
})();
