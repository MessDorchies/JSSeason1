// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {

    // your code here
    let tableCreator = document.getElementById("target");
    let tableBallise = "";
    tableBallise += "<table><tbody>";
    for(let i = 0; i < 10; i++){
        tableBallise += "<tr>";
        for(let j = 0; j < 10; j++){
            tableBallise += "<td class=\'multi\'>";
            tableBallise += "</td>";
        }
        tableBallise += "</tr>";
    }
    tableBallise += "<tbody></table>";
    tableCreator.innerHTML = tableBallise;
    let cell = document.getElementsByClassName('multi');
    let iterator = 0;
    for(let k = 1; k < 11; k++){
        for(let l = 1; l <11 ; l++){
            cell[iterator].innerHTML += k*l;
            iterator++;
        }
    }
    console.log(tableBallise);
})();
