// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set


(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    // your code here
    document.getElementById("run").addEventListener('click', function() {
        let newPeople = new Set(people);
        console.log(newPeople.size);
        console.log((newPeople.has("Alexandre")) ? "Yes Alexandre is part of the set" : "No Alexandre is not part of the set");
        
    });
})();
