
const isEven = n => n % 2 === 0;

console.log(isEven(4)); 
console.log(isEven(7)); 

let marks = 40;
let result = marks >= 35 ? "Pass" : "Fail";

console.log(result); 

const greet = name => console.log(`Hello, ${name ? name : "Guest"}`);

greet("John"); 
greet();       
