// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)


(() => {

    // your code here
    document.getElementById("pass-one").addEventListener('input', function() {
        let count = document.getElementById("counter");
        let inputValue = document.getElementById("pass-one").value.toString();
        let length = inputValue.length;
        count.innerHTML = length+"/10";
        document.getElementById("pass-one").setAttribute('maxlength','10');
    })
})();
