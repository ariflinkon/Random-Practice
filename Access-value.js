const users = [
  { name: "Alice", 
    age: 25, 
    address:
     { city: 'Dhaka', 
      country: 'Bangladesh' } 
    
  },
  { name: "Bob", age: 30, address: { city: 'New York', country: 'USA' } },
  { name: "Charlie", age: 35, address: { city: 'London', country: 'UK' } }
];

const cities = users.map(user => user.address?.city);
console.log(cities); 
const countries = users.map(user => user.address?.country);
console.log(countries);
