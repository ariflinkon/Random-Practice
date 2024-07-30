const d = new Date("03/25/2015");
console.log(d);
const d2 = new Date("January 25 2015");
console.log(d2);

const d3 = new Date("JANUARY, 25, 2015");
console.log(d3.toLocaleDateString());