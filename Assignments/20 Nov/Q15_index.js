const readline = require("readline");

// Setup input interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter countdown time in seconds: ", function (input) {
  let time = parseInt(input);

  if (isNaN(time) || time <= 0) {
    console.log("Please enter a valid positive number!");
    rl.close();
    return;
  }

  console.log(`Countdown started from ${time} seconds...`);
  console.log("Press 's' to stop the countdown manually.");

  // Start countdown using setInterval
  let timerId = setInterval(() => {
    console.log(`Time left: ${time}s`);
    time--;

    if (time < 0) {
      clearInterval(timerId);
      console.log("Countdown Complete!");
      rl.close();
    }
  }, 1000);

  // Function to detect "s" key using delayed checking (setTimeout)
  function checkStopKey() {
    setTimeout(() => {
      process.stdin.once("data", (key) => {
        if (key.toString().trim().toLowerCase() === "s") {
          clearInterval(timerId);
          console.log("Countdown stopped by user!");
          rl.close();
        } else {
          checkStopKey(); // keep checking again
        }
      });
    }, 200); // delayed checking every 200ms
  }

  checkStopKey();
});
