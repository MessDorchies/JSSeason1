// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {

    // your code here
    let target = document.getElementById("target");
    let value1 = document.getElementById("part-one");
    let value2 = document.getElementById("part-two");
    let value3 = document.getElementById("part-three");
    let value4 = document.getElementById("part-four");
    let finalValue = value1.value + value2.value + value3.value + value4.value;
    
    document.getElementById("fix-part-one").addEventListener('click', function() {
        value1.value = (Math.floor(Math.random()*40)) + 460;
        finalValue = value1.value + value2.value + value3.value + value4.value;
        target.innerHTML = 0 + finalValue;
    })
    document.getElementById("fix-part-two").addEventListener('click', function() {
        value2.value = (Math.floor(Math.random()*100));
        (value2.value < 10) ? value2.value = 0 + value2.value : value2.value = value2.value;
        finalValue = value1.value + value2.value + value3.value + value4.value;
        target.innerHTML = 0 + finalValue;
    })
    document.getElementById("fix-part-three").addEventListener('click', function() {
        value3.value = (Math.floor(Math.random()*100));
        (value3.value < 10) ? value3.value = 0 + value2.value : value3.value = value3.value;
        finalValue = value1.value + value2.value + value3.value + value4.value;
        target.innerHTML = 0 + finalValue;
    })
    document.getElementById("fix-part-four").addEventListener('click', function() {
        value4.value = (Math.floor(Math.random()*100));
        (value4.value < 10) ? value4.value = 0 + value4.value : value4.value = value4.value;
        finalValue = value1.value + value2.value + value3.value + value4.value;
        target.innerHTML = 0 + finalValue;
    })
})();
