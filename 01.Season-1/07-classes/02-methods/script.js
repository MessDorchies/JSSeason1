//07-classes/02-methods/script.js - 7.2: methods


(() => {
    // your code here
    class Person{
        constructor(firstname,lastname){
            this.firstname = firstname;
            this.lastname = lastname;
    }
    sayHello(){
        return "Hello, " + this.firstname + " " + this.lastname + ".";
    }
}
    document.getElementById("run").addEventListener('click', function() {
        let pers1 = new Person("John","Snow");
        let pers2 = new Person("Harry", "Potter");
        console.log(pers1.sayHello() + " " + pers2.sayHello() )
    })
})();
