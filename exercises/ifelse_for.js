// If-Else with Nested For Loops - 10 Cases

// Case 1: Check if number is prime using a for loop inside if-else
let num = 17;
let isPrime = true;
if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}
console.log("Case 1: " + num + " is prime: " + isPrime);

// Case 2: Categorize numbers in an array (positive, negative, zero)
let nums = [5, -3, 0, 8, -1, 0, 7];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 0) {
    console.log("Case 2: " + nums[i] + " is positive");
  } else if (nums[i] < 0) {
    console.log("Case 2: " + nums[i] + " is negative");
  } else {
    console.log("Case 2: " + nums[i] + " is zero");
  }
}

// Case 3: Find all even numbers in a range using if-else inside for
console.log("Case 3: Even numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log("Case 3: " + i + " is even");
  } else {
    console.log("Case 3: " + i + " is odd");
  }
}

// Case 4: Grade students based on scores stored in an array
let scores = [92, 78, 85, 63, 45];
for (let i = 0; i < scores.length; i++) {
  let grade;
  if (scores[i] >= 90) {
    grade = "A";
  } else if (scores[i] >= 80) {
    grade = "B";
  } else if (scores[i] >= 70) {
    grade = "C";
  } else if (scores[i] >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }
  console.log("Case 4: Score " + scores[i] + " = Grade " + grade);
}

// Case 5: Check if array is sorted in ascending order
let arr = [1, 3, 5, 7, 9];
let sorted = true;
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] > arr[i + 1]) {
    sorted = false;
    break;
  }
}
if (sorted) {
  console.log("Case 5: Array is sorted in ascending order");
} else {
  console.log("Case 5: Array is NOT sorted");
}

// Case 6: Count vowels and consonants in a string
let text = "JavaScript";
let vowels = 0;
let consonants = 0;
for (let i = 0; i < text.length; i++) {
  let ch = text[i].toLowerCase();
  if (ch >= "a" && ch <= "z") {
    if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
      vowels++;
    } else {
      consonants++;
    }
  }
}
console.log(
  "Case 6: '" +
    text +
    "' has " +
    vowels +
    " vowels and " +
    consonants +
    " consonants",
);

// Case 7: Find the longest word in a sentence
let sentence = "The quick brown fox jumps over the lazy dog";
let words = sentence.split(" ");
let longestWord = "";
for (let i = 0; i < words.length; i++) {
  if (words[i].length > longestWord.length) {
    longestWord = words[i];
  }
}
console.log(
  "Case 7: Longest word is '" +
    longestWord +
    "' with " +
    longestWord.length +
    " characters",
);

// Case 8: Check if a number is a perfect square
let checkNum = 36;
let isPerfectSquare = false;
for (let i = 1; i * i <= checkNum; i++) {
  if (i * i === checkNum) {
    isPerfectSquare = true;
    break;
  }
}
if (isPerfectSquare) {
  console.log("Case 8: " + checkNum + " is a perfect square");
} else {
  console.log("Case 8: " + checkNum + " is NOT a perfect square");
}

// Case 9: Filter numbers based on divisibility
let numbers = [15, 22, 30, 45, 51, 60];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
    console.log("Case 9: " + numbers[i] + " is divisible by both 3 and 5");
  } else if (numbers[i] % 3 === 0) {
    console.log("Case 9: " + numbers[i] + " is divisible by 3 only");
  } else if (numbers[i] % 5 === 0) {
    console.log("Case 9: " + numbers[i] + " is divisible by 5 only");
  } else {
    console.log("Case 9: " + numbers[i] + " is divisible by neither 3 nor 5");
  }
}

// Case 10: Find the second largest number in an array
let values = [12, 45, 7, 89, 34, 89, 23];
let largest = -Infinity;
let secondLargest = -Infinity;
for (let i = 0; i < values.length; i++) {
  if (values[i] > largest) {
    secondLargest = largest;
    largest = values[i];
  } else if (values[i] > secondLargest && values[i] !== largest) {
    secondLargest = values[i];
  }
}
console.log("Case 10: Second largest number is " + secondLargest);
