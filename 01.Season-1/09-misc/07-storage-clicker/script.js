// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    // your code here
    let target = document.getElementById("target");
    let mystorage = localStorage;
    let value = 0;
    console.log(mystorage);
    document.getElementById("increment").addEventListener('click', function() {
        value++;
        target.innerHTML = value;
        mystorage.setItem('last value',value);
        console.log(value);
    })

})();
