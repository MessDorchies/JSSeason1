// 10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles


(() => {
    // your code here
    
    document.getElementById("run").addEventListener('click', function(){
        window.lib.getPosts((error, articles) => {
            for (let article of articles) {
                console.log(article);
            } 
    })
})
})();
