let users = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35}
];
let names = users.map(function(user) {
    return user.name;
});

console.log(names); // ["Alice", "Bob", "Charlie"]
