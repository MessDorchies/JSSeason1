// 05-arrays/12-manipulate-set/script.js - 5.12: manipulation of a Set


(() => {
    const fruits = new Set([
        "apple",
        "pear",
        "strawberry",
        "tomato",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grape",
        "cherry",
    ]);

    // your code here
    document.getElementById("run").addEventListener('click', function() {
        let newFruits = new Set(fruits);
        newFruits.delete("apple");
        newFruits.delete("cherry");
        newFruits.add("banana");
        newFruits.add("kiwi");
        console.log(newFruits);
    });
})();
