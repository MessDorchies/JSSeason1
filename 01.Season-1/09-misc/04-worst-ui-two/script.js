// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {

    // your code here
    let num1 = document.getElementById("part-one");
    let num2 = document.getElementById("part-two");
    let num3 = document.getElementById("part-three");
    let num4 = document.getElementById("part-four");
    let numOf1 = parseInt(num1.getAttribute("data-min"));
    let numOf2 = parseInt(num2.getAttribute("data-min"));
    let numOf3 = parseInt(num3.getAttribute("data-min"));
    let numOf4 = parseInt(num4.getAttribute("data-min"));
    let target = document.getElementById("target");
    let targValue = [4,6,0,0,0,0,0,0,0];
    let finalValue = "+";
    num1.addEventListener('click', function(){
        (numOf1 > 498) ? numOf1 = 459 : numOf1 = numOf1;
        numOf1++;
        let numOf1ToString = numOf1.toString();
        for(let i = 0; i < numOf1ToString.length; i++){
            (i === 0) ? targValue[0] = numOf1ToString[i] : ( i === 1) ? targValue[1] = numOf1ToString[i] : targValue[2] = numOf1ToString[i];
        }
        console.log(targValue);
        
    })
    num2.addEventListener('click', function() {
        (numOf2 > 98) ? numOf2 = -1 : numOf2 = numOf2;
        numOf2++;
        let numOf2ToString ="";
        if(numOf2 < 10){
            numOf2ToString = "0" + numOf2.toString();
        }
        else{
            numOf2ToString = numOf2.toString();
        }
        for(let i = 0; i < numOf2ToString.length; i++){
            (i === 0) ? targValue[3] = numOf2ToString[i] : targValue[4] = numOf2ToString[i]; 
        }
        console.log(targValue);
        
    })
    num3.addEventListener('click', function() {
        (numOf3 > 98) ? numOf3 = -1 : numOf3 = numOf3;
        numOf3++;
        let numOf3ToString = "";
        if(numOf3 < 10){
            numOf3ToString = "0" + numOf3.toString();
        }
        else{
            numOf3ToString = numOf3.toString();
        }
        for(let i = 0; i < numOf3ToString.length; i++){
            (i === 0) ? targValue[5] = numOf3ToString[i] : targValue[6] = numOf3ToString[i]; 
        }
        console.log(targValue);
    })
    num4.addEventListener('click', function() {
        (numOf4 > 98) ? numOf4 = -1 : numOf4 = numOf4;
        numOf4++;
        let numOf4ToString = "";
        if(numOf4 < 10){
            numOf4ToString = "0" + numOf4.toString();
        }
        else{
            numOf4ToString = numOf4.toString();
        }
        for(let i = 0; i < numOf4ToString.length; i++){
            (i === 0) ? targValue[7] = numOf4ToString[i] : targValue[8] = numOf4ToString[i]; 
        }
        console.log(targValue);
    })
    let body = document.getElementById("container");
    body.addEventListener('mousedown', function() {
        if(finalValue === "+"){
            for(let i = 0; i < targValue.length; i++){
                finalValue += targValue[i];
            }
        }
        else{
            finalValue = "+";
            for(let i = 0; i < targValue.length; i++){
                finalValue += targValue[i];
            }
        }
        
        target.innerHTML = finalValue;
    })
    
    
    
})();
