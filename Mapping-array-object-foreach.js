const y = [
    {name: "John", grade: 85 },
    {name: "Emily", grade: 92 },
    {name: "Michael", grade: 78 }

];

const y2 = y.map(x => x.name);
console.log(y2);

y.forEach(x2 => {
  console.log(x2.name);
})

/* const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];
users.forEach(user => {
  console.log(`${user.name} is ${user.age} years old`);
});
 */