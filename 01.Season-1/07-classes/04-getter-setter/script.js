// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    // your code here
    class Person {
        constructor(firstname,lastname){
            this.firstname = firstname;
            this.lastname = lastname;
        }
        get name() {
            return this.firstname + " " + this.lastname;
        }
        set name(newname) {
            const inputName = newname.split(' ');
            this.firstname = inputName[0];
            this.lastname = inputName[1];
        }
    }
    document.getElementById("run").addEventListener('click',function() {
        let pers1 = new Person("John", "Snow");
        console.log(pers1.name);
        pers1.name = "Harry Potter";
        console.log(pers1.name);
    })
})();
