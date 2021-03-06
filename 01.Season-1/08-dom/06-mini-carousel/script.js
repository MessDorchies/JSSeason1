// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel


(() => {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
    let image = document.querySelector('img');
    let iterator = 1;
    function changeImg(){
        image.src = gallery[iterator];
        iterator++;
        if(iterator > 4){
            iterator = 0;
        }
    }
    
    document.getElementById("next").addEventListener('click', function(){
        changeImg();
    })
    
})();
