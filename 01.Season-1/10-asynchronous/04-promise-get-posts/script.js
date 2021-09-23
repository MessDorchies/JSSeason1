// 10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)


(() => {
    // your code here
    document.getElementById("run").addEventListener('click', function(){
        window.lib.getPosts().then(articles => console.log(articles))
})
})();
