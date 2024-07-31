let strings = ["1", "2", "3", "4"];
let integers = strings.map(function(str) {
    return parseInt(str, 10);
});

console.log(integers); // [1, 2, 3, 4]
