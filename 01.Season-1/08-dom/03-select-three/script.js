// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector


(() => {

    // your code here
    let all = document.getElementsByClassName("target");
    for(let i = 0; i < all.length; i++ ){
        all[i].innerHTML = "Owned.";
    }
})();
