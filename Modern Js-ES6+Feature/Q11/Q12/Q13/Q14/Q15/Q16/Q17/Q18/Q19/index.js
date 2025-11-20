
// 1. Template Literals + Expressions

// a)
console.log(`5 + 7 = ${5 + 7}`);

// b)
const multiLine = `
This is line 1
This is line 2
This is line 3
`;
console.log(multiLine);

// c)
const firstName = "John";
const lastName = "Doe";
console.log(`Full Name: ${firstName} ${lastName}`);

// 2. Arrow Functions & this

// a) Convert to arrow function
const square = n => n * n;

// b) Explanation:
// Arrow functions do NOT have their own "this".
// So "this" inside arrow refers to global object, not obj.
const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test();

// c) Fix using normal function
const obj2 = {
  value: 50,
  test() {
    console.log(this.value); 
  }
};
obj2.test();

// 3. Rest, Spread & Copying Objects

// a) Shallow copy
const product = { name: "Pen", price: 10 };
const copyProduct = { ...product };
console.log(copyProduct);

// b) Merge using spread
const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };
console.log(merged);

// c) Rest operator max function
const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(5, 10, 3)); 

// 4. Destructuring & Optional Chaining

// a)
const arr = [10, 20, 30];
const [a1, b1] = arr;
console.log(a1, b1);

// b)
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);

// c)
const info = {};
console.log(info?.user?.email);

// 5. Scoping

// a)
for (var i = 0; i < 3; i++) {}
console.log(i); 

// b)
for (let j = 0; j < 3; j++) {}

// c)
console.log("const is for values that should not be reassigned.");

// 6. Ternary Operator

// a)
let kmph = 70;
let speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed);

// b)
let age = 16;
console.log(age >= 18 ? "Adult" : "Minor");

// c) Nested ternary
let num = -5;
let msg = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";
console.log(msg);

// 7. Spread, Rest & Arrays

// a)
const nums = [1, 2, 3];
const updatedNums = [...nums, 4, 5];
console.log(updatedNums);

// b)
const aa = ["x", "y"];
const bb = ["z"];
const combined = [...aa, ...bb];
console.log(combined);

// c)
const printNames = (...names) => names;
console.log(printNames("A", "B", "C"));

// 8. Object Destructuring & Shorthand

// a)
const user = { id: 101, status: "active" };
const { id, status } = user;
console.log(id, status);

// b) Shorthand
const role = "admin";
const user2 = { id, role };
console.log(user2);

// c) Object with shorthand + method shorthand
const person = {
  name: "Alice",
  age: 25,
  greet() {
    console.log("Hello!");
  }
};
person.greet();

// 9. Template Literals (More Practice)

// a)
console.log(`Today's date: ${new Date().toDateString()}`);

// b)
let NAME = "Chris";
let SCORE = 88;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);

// 10. Arrow Function Shorthands

// a)
const add = (x, y) => x + y;

// b)
const isAdult = age => age >= 18;

// c)
const double = n => n * n;

// 11. Spread Operator (Arrays & Objects)

// a) Clone array
const arrClone = [...nums];
console.log(arrClone);

// b) Add element at beginning
const newArr = [100, ...nums];
console.log(newArr);

// c) Merge objects + override
const objA = { x: 1, y: 2 };
const objB = { y: 50, z: 3 };
const mergedObj = { ...objA, ...objB };
console.log(mergedObj);

// 12. Optional Chaining (More Practice)

const user3 = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};

// a)
console.log(user3?.address?.city);

// b)
console.log(user3?.job?.title); 

const settings = {};
console.log(settings?.profile?.theme); 
