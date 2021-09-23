// 10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", async () => {
        window.lib.getPersons()
            .catch( async error => console.error(error))
            .then( async (persons) => {
                console.log(persons);
            })
            
    });
})();
