// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires


(() => {
    
    document.getElementById("run").addEventListener('click', function() {
        window.lib.getPosts((error, articles) => {
            for (let article of articles) {
                window.lib.getComments(article.id, (error, comment) => {
                    for (let com of comment){
                        article.comments += JSON.stringify(com);
                    }
                    console.log(article);
                });
            }
        })
    }
    )
})();
