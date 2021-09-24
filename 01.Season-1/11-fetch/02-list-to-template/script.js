

(() => {
    // your code here
    document.getElementById("run").addEventListener('click', () => {
        for(let i = 0; i< 5; i++){
            fetch("http://localhost:3000/heroes/" + (i+1))
                .then(retour => retour.json())
                .then(heroes => {
                    let target = document.getElementById("target");

                    let hero = document.createElement("li");
                    hero.classList.add("hero");

                    let title = document.createElement("h4");
                    title.classList.add("title");

                    let powers = document.createElement("p");
                    powers.classList.add("powers");
                    powers.innerHTML = "";
                    for (let abilities of heroes.abilities) {
                    powers.innerHTML += abilities + "<br>";
                }

                    let name = document.createElement("strong");
                    name.classList.add("name");
                    name.innerHTML = heroes.name;

                    let alterEgo = document.createElement("em");
                    alterEgo.classList.add("alter-ego");
                    alterEgo.innerHTML = heroes.alterEgo;
                
                    target.appendChild(hero);
                    hero.appendChild(title);
                    hero.appendChild(powers);
                    title.appendChild(name);
                    title.appendChild(alterEgo);


                });
        }
         
    })
    // document.getElementById("run").addEventListener("click", () => {

    //     fetch("http://localhost:3000/heroes")
    //         .then(response => response.json())
    //         .then(data => {
    //             let target = document.getElementById("target");

    //             let _hero = document.createElement("li");
    //             _hero.classList.add("hero");

    //             let _title = document.createElement("h4");
    //             _title.classList.add("title");

    //             let _powers = document.createElement("p");
    //             _powers.classList.add("powers");
    //             _powers.innerHTML = "";
    //             for (let power of data.abilities) {
    //                 _powers.innerHTML += power + "<br>";
    //             }

    //             let _name = document.createElement("strong");
    //             _name.classList.add("name");
    //             _name.innerHTML = data.name;

    //             let _alter_ego = document.createElement("em");
    //             _alter_ego.classList.add("alter-ego");
    //             _alter_ego.innerHTML = data.alterEgo;

    //             target.innerHTML = "";
                
    //             target.appendChild(_hero);
    //             _hero.appendChild(_title);
    //             _hero.appendChild(_powers);
    //             _title.appendChild(_name);
    //             _title.appendChild(_alter_ego);
    //         })
    // })

})();
