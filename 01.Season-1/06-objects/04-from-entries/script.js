// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here
    document.getElementById("run").addEventListener('click',function() {
        let allInOne = [];
        for(let i = 0; i < keys.length; i++){
            for(let j = 0; j < keys.length; j++){
                allInOne.push([keys[j],values[j]]);
            }
        }
        let animal = Object.fromEntries(allInOne);
        console.log(animal);

    })
})();
