
let age = 25;

console.log("--- Initial State ---");
console.log(`Global age variable initialized to: ${age}`);
console.log("---------------------");

function displayAge() {
    console.log(`Inside displayAge (before change): Global age accessed: ${age}`);
}

function changeAge(newAge) {
    console.log("Inside changeAge: Changing global 'age' variable...");
    age = newAge; 
}
console.log("\n--- Execution 1: displayAge ---");
displayAge();
consoleAge(30);
console.log("--- Execution 2: After changeAge ---");
console.log(`Global age variable value now: ${age}`);
console.log("\n--- Execution 3: displayAge (After modification) ---");
displayAge();
