// While Loop with Nested If-Else - 10 Cases

// Case 1: Find and print even numbers from 1 to 10 using while
let i = 1;
while (i <= 10) {
  if (i % 2 === 0) {
    console.log("Case 1: " + i + " is even");
  } else {
    console.log("Case 1: " + i + " is odd");
  }
  i++;
}

// Case 2: Categorize numbers in an array using while
let nums = [12, -5, 0, 8, -3, 7];
let idx = 0;
while (idx < nums.length) {
  if (nums[idx] > 0) {
    console.log("Case 2: " + nums[idx] + " is positive");
  } else if (nums[idx] < 0) {
    console.log("Case 2: " + nums[idx] + " is negative");
  } else {
    console.log("Case 2: " + nums[idx] + " is zero");
  }
  idx++;
}

// Case 3: Count digits in a number using while with if-else
let num = 12345;
let digitCount = 0;
let temp = num;
while (temp > 0) {
  let digit = temp % 10;
  if (digit % 2 === 0) {
    console.log("Case 3: Digit " + digit + " is even");
  } else {
    console.log("Case 3: Digit " + digit + " is odd");
  }
  temp = Math.floor(temp / 10);
  digitCount++;
}
console.log("Case 3: Total digits: " + digitCount);

// Case 4: Find the GCD of two numbers using while with if-else
let a = 48;
let b = 18;
let x = a;
let y = b;
while (y !== 0) {
  if (x > y) {
    x = x - y;
  } else {
    y = y - x;
  }
}
console.log("Case 4: GCD of " + a + " and " + b + " is " + x);

// Case 5: Check if each character in a string is a letter or digit
let str = "a1b2c3!";
let pos = 0;
while (pos < str.length) {
  let ch = str[pos];
  if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
    console.log("Case 5: '" + ch + "' is a letter");
  } else if (ch >= "0" && ch <= "9") {
    console.log("Case 5: '" + ch + "' is a digit");
  } else {
    console.log("Case 5: '" + ch + "' is a special character");
  }
  pos++;
}

// Case 6: Find the first occurrence of a target in an array
let arr = [10, 20, 30, 40, 50, 30];
let target = 30;
let foundIndex = -1;
let p = 0;
while (p < arr.length) {
  if (arr[p] === target) {
    foundIndex = p;
    break;
  }
  p++;
}
if (foundIndex !== -1) {
  console.log(
    "Case 6: First occurrence of " + target + " is at index " + foundIndex,
  );
} else {
  console.log("Case 6: " + target + " not found");
}

// Case 7: Collatz conjecture sequence
let n = 12;
console.log("Case 7: Collatz sequence starting from " + n + ":");
while (n !== 1) {
  if (n % 2 === 0) {
    n = n / 2;
  } else {
    n = 3 * n + 1;
  }
  console.log("Case 7: " + n);
}

// Case 8: Count vowels in a string using while
let text = "Beautiful Day";
let vowelCount = 0;
let q = 0;
while (q < text.length) {
  let ch = text[q].toLowerCase();
  if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
    vowelCount++;
  }
  q++;
}
console.log("Case 8: '" + text + "' has " + vowelCount + " vowels");

// Case 9: Find the smallest number in an array using while
let values = [34, 12, 56, 7, 89, 23];
let min = values[0];
let r = 1;
while (r < values.length) {
  if (values[r] < min) {
    min = values[r];
  }
  r++;
}
console.log("Case 9: The smallest number is " + min);

// Case 10: Check if a number is an Armstrong number
let armNum = 153;
let sum = 0;
let tempNum = armNum;
let digits = armNum.toString().length;
while (tempNum > 0) {
  let digit = tempNum % 10;
  sum += Math.pow(digit, digits);
  tempNum = Math.floor(tempNum / 10);
}
if (sum === armNum) {
  console.log("Case 10: " + armNum + " is an Armstrong number");
} else {
  console.log("Case 10: " + armNum + " is NOT an Armstrong number");
}
