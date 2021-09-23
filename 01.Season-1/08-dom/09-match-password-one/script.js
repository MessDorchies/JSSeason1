// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    // your code here
    
    document.getElementById("run").addEventListener('click', function () {
        let pass1 = document.getElementById("pass-one").value;
        let pass2 = document.getElementById("pass-two").value;
        if( pass1 != pass2 ){
            document.getElementById("pass-two").style.borderColor = "red";
        }
        console.log(pass1);
        console.log(pass2);
    })
    
})();
