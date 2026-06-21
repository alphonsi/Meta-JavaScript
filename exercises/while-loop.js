// While Loop Statements - 10 Cases

// Case 1: Basic while loop (incrementing)
let i = 1;
while (i <= 5) {
  console.log("Case 1: Count " + i);
  i++;
}

// Case 2: Basic while loop (decrementing)
let j = 5;
while (j >= 1) {
  console.log("Case 2: Countdown " + j);
  j--;
}

// Case 3: Looping through an array
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
let index = 0;
while (index < fruits.length) {
  console.log("Case 3: Fruit " + (index + 1) + " is " + fruits[index]);
  index++;
}

// Case 4: Summing numbers in an array
let numbers = [10, 20, 30, 40, 50];
let sum = 0;
let k = 0;
while (k < numbers.length) {
  sum += numbers[k];
  k++;
}
console.log("Case 4: Sum of numbers is " + sum);

// Case 5: While loop with a condition that changes inside
let count = 0;
let limit = 5;
while (count < limit) {
  console.log("Case 5: Count is " + count);
  count++;
  if (count === 3) {
    limit = 3;
  }
}

// Case 6: Using break to exit a while loop early
let m = 1;
while (m <= 10) {
  if (m === 6) {
    console.log("Case 6: Breaking at " + m);
    break;
  }
  console.log("Case 6: Number " + m);
  m++;
}

// Case 7: Using continue to skip an iteration
let n = 0;
while (n < 5) {
  n++;
  if (n === 3) {
    console.log("Case 7: Skipping " + n);
    continue;
  }
  console.log("Case 7: Number " + n);
}

// Case 8: While loop that processes user input simulation
let input = "";
let inputs = ["hello", "world", "exit", "ignored"];
let idx = 0;
while (input !== "exit" && idx < inputs.length) {
  input = inputs[idx];
  if (input !== "exit") {
    console.log("Case 8: Processing '" + input + "'");
  }
  idx++;
}
console.log("Case 8: Exited loop");

// Case 9: Finding the first even number in an array
let values = [7, 13, 9, 22, 15, 8];
let p = 0;
let foundEven = false;
while (p < values.length && !foundEven) {
  if (values[p] % 2 === 0) {
    console.log("Case 9: First even number is " + values[p] + " at index " + p);
    foundEven = true;
  }
  p++;
}
if (!foundEven) {
  console.log("Case 9: No even number found");
}

// Case 10: While loop with a counter and factorial calculation
let num = 6;
let factorial = 1;
let q = 1;
while (q <= num) {
  factorial *= q;
  q++;
}
console.log("Case 10: " + num + "! = " + factorial);
