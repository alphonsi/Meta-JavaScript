// For Loop Statements - 10 Cases

// Case 1: Basic for loop (incrementing)
for (let i = 1; i <= 5; i++) {
  console.log("Case 1: Count " + i);
}

// Case 2: Basic for loop (decrementing)
for (let i = 5; i >= 1; i--) {
  console.log("Case 2: Countdown " + i);
}

// Case 3: Looping through an array
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
for (let i = 0; i < fruits.length; i++) {
  console.log("Case 3: Fruit " + (i + 1) + " is " + fruits[i]);
}

// Case 4: Summing numbers in an array
let numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Case 4: Sum of numbers is " + sum);

// Case 5: Looping with step (every other number)
for (let i = 0; i <= 10; i += 2) {
  console.log("Case 5: Even number " + i);
}

// Case 6: Nested for loop (multiplication table)
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log("Case 6: " + i + " * " + j + " = " + i * j);
  }
}

// Case 7: Using break to exit a loop early
for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    console.log("Case 7: Breaking at " + i);
    break;
  }
  console.log("Case 7: Number " + i);
}

// Case 8: Using continue to skip an iteration
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Case 8: Skipping " + i);
    continue;
  }
  console.log("Case 8: Number " + i);
}

// Case 9: Looping backwards through a string
let word = "hello";
let reversed = "";
for (let i = word.length - 1; i >= 0; i--) {
  reversed += word[i];
}
console.log("Case 9: '" + word + "' reversed is '" + reversed + "'");

// Case 10: Finding the maximum value in an array
let values = [45, 12, 78, 34, 90, 23];
let max = values[0];
for (let i = 1; i < values.length; i++) {
  if (values[i] > max) {
    max = values[i];
  }
}
console.log("Case 10: The maximum value is " + max);
