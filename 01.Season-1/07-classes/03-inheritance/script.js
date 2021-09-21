// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        constructor(name){
            this.name = name;
        }
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
    class Cat extends Animal{

        static greeting = "Meow";
        
    }
    class Dog extends Animal{
    
        static greeting = "Woof";
        
    }

    document.getElementById("run").addEventListener('click', function() {
        let cat = new Cat("Bill");
        let dog = new Dog("Scooby");
        console.log(cat.sayHello() + " " + dog.sayHello());
    })
})();
