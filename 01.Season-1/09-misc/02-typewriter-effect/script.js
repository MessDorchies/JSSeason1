// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    // your code here
    let text = "Je suis un texte qui va apparaître dans un effet 'machine à écrire', un peu comme dans les films noirs. Sauf que... je ne sais pas qui est l'assassin ! Y en a-t-il vraiment un ? Habite-t-il au 21 ? Que de mystères !";
    let speed = Math.floor(Math.random()*50);
    let i = 0;
    document.getElementById("target").innerHTML = "";
    function typeWriter() {
        if (i < text.length) {
          document.getElementById("target").innerHTML += text.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
})();
