
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let n = parseInt(document.getElementById("number").value);
        for( let i = n-1 ; i > 0 ; i--){
            n = n * i;
        }
        alert(n);
    });

})();
