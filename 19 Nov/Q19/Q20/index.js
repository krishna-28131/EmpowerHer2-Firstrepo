
function createCounter() {
    let count = 0; 

    return {
        increment: function() {
            count++;
            console.log(`Current count: ${count}`);
        },
        decrement: function() {
            count--;
            console.log(`Current count: ${count}`);
        },
        getCount: function() {
            return count;
        }
    };
}
const counter = createCounter();
console.log("--- Counter 1 Operations ---");
counter.increment(); 
counter.increment(); 
counter.decrement(); 
console.log(`Final count (via getter): ${counter.getCount()}`);
const counterTwo = createCounter();
console.log("\n--- Counter 2 Operations (Independent) ---");
counterTwo.increment(); 
counterTwo.increment(); 
counterTwo.increment(); 
console.log(`\nChecking Counter 1 state again: ${counter.getCount()}`); 
console.log(`Checking Counter 2 state again: ${counterTwo.getCount()}`); 

console.log(`\nAttempting direct access to counter.count: ${counter.count}`); 
function createBankAccount() {
    let balance = 0; 
    let transactionHistory = []; 

    const recordTransaction = (type, amount, status) => {
        transactionHistory.push({
            type: type,
            amount: amount,
            status: status,
            timestamp: new Date().toLocaleTimeString()
        });
    };

    return {
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount;
                recordTransaction("deposit", amount, "SUCCESS");
                console.log(`Deposited: ${amount}. Current Balance: ${balance}`);
            } else {
                recordTransaction("deposit", amount, "FAILED (Invalid amount)");
                console.log("Deposit failed: Amount must be positive.");
            }
        },

        withdraw: function(amount) {
            if (amount > 0 && balance >= amount) {
                balance -= amount;
                recordTransaction("withdrawal", amount, "SUCCESS");
                console.log(`Withdrawn: ${amount}. Current Balance: ${balance}`);
            } else if (amount <= 0) {
                recordTransaction("withdrawal", amount, "FAILED (Invalid amount)");
                console.log("Withdrawal failed: Amount must be positive.");
            } else {
                recordTransaction("withdrawal", amount, `FAILED (Insufficient balance: ${balance})`);
                console.log("Insufficient balance");
            }
        },

        getBalance: function() {
            return balance;
        },

        getHistory: function() {
            return [...transactionHistory];
        }
    };
}
const account = createBankAccount();
console.log("\n--- Bank Account Operations ---");
account.deposit(500);
account.withdraw(200);
account.withdraw(400); 

console.log(`\nAttempting account.balance: ${account.balance}`); 

console.log("\nFull Transaction History (via getter):");
console.log(account.getHistory());
