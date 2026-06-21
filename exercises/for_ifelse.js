// For Loop with Nested If-Else - 10 Cases

// Case 1: FizzBuzz from 1 to 15
for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Case 1: FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Case 1: Fizz");
  } else if (i % 5 === 0) {
    console.log("Case 1: Buzz");
  } else {
    console.log("Case 1: " + i);
  }
}

// Case 2: Classify numbers in a range (positive, negative, zero)
for (let i = -3; i <= 3; i++) {
  if (i > 0) {
    console.log("Case 2: " + i + " is positive");
  } else if (i < 0) {
    console.log("Case 2: " + i + " is negative");
  } else {
    console.log("Case 2: " + i + " is zero");
  }
}

// Case 3: Check leap years in a range
for (let year = 2000; year <= 2010; year++) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Case 3: " + year + " is a leap year");
  } else {
    console.log("Case 3: " + year + " is not a leap year");
  }
}

// Case 4: Categorize ages
let ages = [2, 15, 25, 65, 80];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] < 13) {
    console.log("Case 4: Age " + ages[i] + " is a child");
  } else if (ages[i] < 20) {
    console.log("Case 4: Age " + ages[i] + " is a teenager");
  } else if (ages[i] < 65) {
    console.log("Case 4: Age " + ages[i] + " is an adult");
  } else {
    console.log("Case 4: Age " + ages[i] + " is a senior");
  }
}

// Case 5: Find numbers divisible by 3 or 5 but not both
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    continue;
  } else if (i % 3 === 0) {
    console.log("Case 5: " + i + " is divisible by 3 only");
  } else if (i % 5 === 0) {
    console.log("Case 5: " + i + " is divisible by 5 only");
  }
}

// Case 6: Determine season based on month number
for (let month = 1; month <= 12; month++) {
  let season;
  if (month >= 3 && month <= 5) {
    season = "Spring";
  } else if (month >= 6 && month <= 8) {
    season = "Summer";
  } else if (month >= 9 && month <= 11) {
    season = "Fall";
  } else {
    season = "Winter";
  }
  console.log("Case 6: Month " + month + " is " + season);
}

// Case 7: Check if each word in an array starts with a vowel
let wordList = ["apple", "banana", "orange", "grape", "umbrella"];
for (let i = 0; i < wordList.length; i++) {
  let firstChar = wordList[i][0].toLowerCase();
  if (
    firstChar === "a" ||
    firstChar === "e" ||
    firstChar === "i" ||
    firstChar === "o" ||
    firstChar === "u"
  ) {
    console.log("Case 7: '" + wordList[i] + "' starts with a vowel");
  } else {
    console.log("Case 7: '" + wordList[i] + "' starts with a consonant");
  }
}

// Case 8: Categorize temperatures
let temperatures = [15, 22, 30, 8, 35, -2];
for (let i = 0; i < temperatures.length; i++) {
  if (temperatures[i] < 0) {
    console.log("Case 8: " + temperatures[i] + "°C is freezing");
  } else if (temperatures[i] < 10) {
    console.log("Case 8: " + temperatures[i] + "°C is cold");
  } else if (temperatures[i] < 25) {
    console.log("Case 8: " + temperatures[i] + "°C is moderate");
  } else {
    console.log("Case 8: " + temperatures[i] + "°C is hot");
  }
}

// Case 9: Determine if a number is a palindrome
for (let num = 101; num <= 110; num++) {
  let str = num.toString();
  let reversed = str.split("").reverse().join("");
  if (str === reversed) {
    console.log("Case 9: " + num + " is a palindrome");
  } else {
    console.log("Case 9: " + num + " is not a palindrome");
  }
}

// Case 10: Classify characters in a string
let str = "Hello123!";
for (let i = 0; i < str.length; i++) {
  let ch = str[i];
  if (ch >= "A" && ch <= "Z") {
    console.log("Case 10: '" + ch + "' is an uppercase letter");
  } else if (ch >= "a" && ch <= "z") {
    console.log("Case 10: '" + ch + "' is a lowercase letter");
  } else if (ch >= "0" && ch <= "9") {
    console.log("Case 10: '" + ch + "' is a digit");
  } else {
    console.log("Case 10: '" + ch + "' is a special character");
  }
}
