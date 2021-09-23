// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {

    // your code here
    let val = document.getElementById("source");
    document.getElementById("target").innerHTML = "<img src=\'image.png\'>";
    console.log(val.getAttribute('data-image'));
    val.parentNode.removeChild(val);
})();
