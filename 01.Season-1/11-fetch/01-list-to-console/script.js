// 11-fetch/01-list-to-console/script.js - 11.1: liste vers console


(() => {
    // your code here
    document.getElementById("run").addEventListener('click', () => {
        fetch("http://localhost:3000/heroes")
            .then(retour => retour.json())
            .then(heroes => console.log(heroes))
    })
})();
