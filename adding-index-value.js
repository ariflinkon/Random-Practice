let letters = ['a', 'b', 'c', 'd'];
let indexedLetters = letters.map(function(letter, index) {
    return `${index}: ${letter}`;
});

console.log(indexedLetters); // ["0: a", "1: b", "2: c", "3: d"]
