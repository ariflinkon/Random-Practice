let lowercaseStrings = ["hello", "world", "javascript"];
let uppercaseStrings = lowercaseStrings.map(function(str) {
    return str.toUpperCase();
});

console.log(uppercaseStrings); // ["HELLO", "WORLD", "JAVASCRIPT"]


