// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {
    let numbers = [];
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    // your code here
    document.getElementById("run").addEventListener('click', function() {
        for(let i = 0; i < 10 ; i++){
            numbers.push(Math.floor(Math.random()*100));
            document.getElementById("n-"+(i+1)).innerHTML = numbers[i];    
        }
        document.getElementById("min").innerHTML = Math.min(...numbers);
        document.getElementById("max").innerHTML = Math.max(...numbers);
        document.getElementById("sum").innerHTML = numbers.reduce(reducer);
        document.getElementById("average").innerHTML = (numbers.reduce(reducer))/10;
    });
    
})();
