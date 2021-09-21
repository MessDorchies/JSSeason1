// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById("run").addEventListener('click', function() {
        fruits.splice(0,1,"banana");
        fruits.splice((fruits.length-1),1,"kiwi");
        console.log(fruits);
        }
    )
})();
