console.log("Hello World!");

// prompt("What`s your name?");
// alert("careful");
const myButton = document.querySelector("button");

myButton.addEventListener("click", function () {
  console.log("clicked");
});

const counterButton = document.getElementById("counter-button");
let count = 0;
counterButton.addEventListener("click", function () {
  console.log((count += 1));

  counterButton.textContent = `Clicks: ${count}`;
});
