
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let sqNum = [];
        for(let i = 2; i < 21; i++){
            sqNum.push(i*i);
        }
        return alert(sqNum);

    });

})();
