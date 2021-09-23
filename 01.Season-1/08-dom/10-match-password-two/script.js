// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)


(() => {

    // your code here
    document.getElementById("run").addEventListener('click', function () {
        let pass1 = document.getElementById("pass-one").value;
        let pass2 = document.getElementById("pass-two").value;
        if( pass1 != pass2 ){
            document.getElementById("pass-two").setAttribute('class','error');
        }
        console.log(pass1);
        console.log(pass2);
    })
})();
