// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here
    document.getElementById("run").addEventListener('click', function() {
        let adj = Array.from(adjectives);
        let randomBird = birds[Math.floor(Math.random()*12)];
        let randomAdj = adj[Math.floor(Math.random()*adj.length)];
        let pronom = (randomBird.fem) ? "La" : "Le";
        (randomBird.fem) ? randomAdj += "e" : randomAdj = randomAdj;
        document.getElementById("target").innerHTML = pronom + " " + randomBird.name + " " + randomAdj;
    });
})();
