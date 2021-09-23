// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)


(() => {

    // your code here
    document.getElementById("pass-one").addEventListener('input', function() {
        let validate = document.getElementById("validity");
        document.getElementById("pass-one").setAttribute('maxlength','10');
        let inputValue = document.getElementById("pass-one").value.toString();
        let length = inputValue.length;
        let atLeast2 = false;
        let count = 0;
        for(let i = 0; i < length; i++){
            if(!isNaN(parseInt(inputValue[i]))){
                count++;
            }
            if(count > 1){
                atLeast2 = true;
            }
        }
        if(length > 8 && atLeast2 === true ){
            validate.innerHTML = "Ok";
        }
        
    })
})();
