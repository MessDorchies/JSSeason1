// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here
    document.getElementById("run").addEventListener('click', function() {
        let me = {
            "firstname" : "Mess",
            "lastname" : "Dorchies",
            "age" : "27",
            "city" : "Charleroi",
            "country" : "Belgium"
        }
        console.log(JSON.stringify(me));
    })
    
})();
