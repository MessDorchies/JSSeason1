// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let allNumber = document.getElementById("numbers").value.toString();
        
        let allNumSorted = [];
        for(let i=0; i< allNumber.length;i++){
            
            let parse = parseInt(allNumber[i]);
            if(isNaN(parse) === false){
                if((allNumber[i] != ",") && (allNumber[i+1] != ",") && (i != allNumber.length-1) ){
                        allNumSorted.push(allNumber[i] + allNumber[i+1]);
                        i++;
                    }
                else{
                    allNumSorted.push(allNumber[i]);
                }
            }
        }
        allNumSorted = allNumSorted.sort(function (a, b) {  return a - b;  });;
        alert(allNumSorted);

    });

})();
