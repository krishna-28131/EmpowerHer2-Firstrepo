
function multiplyOld(a, b) {
  return a * b;
}

// Arrow Function 
const multiply = (a = 1, b = 1) => {
  return a * b;
};

// Example Outputs
console.log(multiply(3, 4));  
console.log(multiply());      
