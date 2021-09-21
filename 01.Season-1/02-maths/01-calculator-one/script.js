
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        return alert(parseFloat(document.getElementById("op-one").value) + parseFloat(document.getElementById("op-two").value));
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        return alert(parseFloat(document.getElementById("op-one").value) - parseFloat(document.getElementById("op-two").value));
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        return alert(document.getElementById("op-one").value * document.getElementById("op-two").value);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        return alert(document.getElementById("op-one").value / document.getElementById("op-two").value);
    });
})();
