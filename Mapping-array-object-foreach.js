const students = [
    {name: "John", grade: 85 },
    {name: "Emily", grade: 92 },
    {name: "Michael", grade: 78 }

];

const newStudents = students.map(student => student.name);
console.log(newStudents);


const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];
users.forEach(user => {
  console.log(`${user.name} is ${user.age} years old`);
});
