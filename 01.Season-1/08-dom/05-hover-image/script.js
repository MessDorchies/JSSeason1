// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

    // your code here
    let image = document.querySelector('img');
    image.addEventListener('mouseover', function() {
        image.src = image.getAttribute('data-hover');
    }) 
    
})();
