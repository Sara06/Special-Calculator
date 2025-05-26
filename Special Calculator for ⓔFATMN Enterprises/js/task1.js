// Version 2.0
// Portfolio Assignment Task 1
/*Create a special calculator that reads a number from the user, checks that it is an integer and performs a series of mathematical calculations as listed:
Calculate the square and cube of the number. A number squared is a number that is multiplied by itself; e.g., 2^2 is equal to 4 (2 * 2). A number cubed is a number that is multiplied by itself twice e.g., 2^3 is equal to 8 (2 * 2 * 2). 
Calculates the number's factorial. A factorial is the product of an integer and all the integers below it; e.g., the factorial of 4 is equal to 24 (4 * 3 * 2 * 1).
*/

function calculate(event) {
  "use strict";
  event.preventDefault();

  var numberInput = document.getElementById("number").value;
  var num = parseInt(numberInput);
  var factorial, squared, cubed;

  if (isNaN(num) || num < 0 || num % 1 !== 0) {
    document.getElementById("error").textContent =
      "Please enter a valid positive integer.";
    return;
  } else {
    // Factorial calculation
    factorial = 1;
    if (num > 1) {
      for (var i = 1; i <= num; i++) {
        factorial *= i;
      }
    }

    // Square and cube calculations
    squared = num * num;
    cubed = num * num * num;

    // Update the DOM with results
    document.getElementById("factorial").textContent = factorial;
    document.getElementById("squared").textContent = squared;
    document.getElementById("cubed").textContent = cubed;
    document.getElementById("error").textContent = "";
  }
}

function init() {
  "use strict";
  document.getElementById("calculate").onsubmit = calculate;
}

window.onload = init;
