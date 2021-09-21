
// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)


(() => {

    // your code here
    const changeColor =  color => {
        switch(color){
            case "red" : document.body.style.backgroundColor = 'red';
                break;
            case "green" : document.body.style.backgroundColor = 'green';
                break;
            case "yellow": document.body.style.backgroundColor = 'yellow';
                break;
            case "blue": document.body.style.backgroundColor = 'blue';
                break;
        }

    }
    // document.addEventListener('click', )
    Array.from(document.querySelectorAll("button")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (changeColor($btn.id), false),
        ),
    );
    

})();
