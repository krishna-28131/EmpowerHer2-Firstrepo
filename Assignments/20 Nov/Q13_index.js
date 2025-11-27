let count = 0;

let intervalId = setInterval(() => {
  console.log("Loading...");
  count++;

  if (count === 5) {
    clearInterval(intervalId);
    console.log("Loaded successfully!");
  }
}, 1000);
