// If-Else with Nested While Loops - 10 Cases

// Case 1: Check if a number is a palindrome using while inside if-else
let num = 121;
let original = num;
let reversed = 0;
if (num < 0) {
  console.log("Case 1: Negative numbers are not palindromes");
} else {
  let temp = num;
  while (temp > 0) {
    reversed = reversed * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }
  if (original === reversed) {
    console.log("Case 1: " + original + " is a palindrome");
  } else {
    console.log("Case 1: " + original + " is not a palindrome");
  }
}

// Case 2: Find factors of a number using while inside if-else
let n = 28;
if (n <= 0) {
  console.log("Case 2: Number must be positive");
} else {
  let factor = 1;
  let factors = [];
  while (factor <= n) {
    if (n % factor === 0) {
      factors.push(factor);
    }
    factor++;
  }
  console.log("Case 2: Factors of " + n + " are: " + factors.join(", "));
}

// Case 3: Check if an array is sorted in descending order
let arr = [9, 7, 5, 3, 1];
let isDescending = true;
let i = 0;
if (arr.length <= 1) {
  console.log("Case 3: Array has 0 or 1 element, trivially sorted");
} else {
  while (i < arr.length - 1) {
    if (arr[i] < arr[i + 1]) {
      isDescending = false;
      break;
    }
    i++;
  }
  if (isDescending) {
    console.log("Case 3: Array is sorted in descending order");
  } else {
    console.log("Case 3: Array is NOT sorted in descending order");
  }
}

// Case 4: Calculate the sum of proper divisors and check if perfect number
let perfectNum = 28;
let divisorSum = 0;
let d = 1;
if (perfectNum <= 0) {
  console.log("Case 4: Number must be positive");
} else {
  while (d < perfectNum) {
    if (perfectNum % d === 0) {
      divisorSum += d;
    }
    d++;
  }
  if (divisorSum === perfectNum) {
    console.log("Case 4: " + perfectNum + " is a perfect number");
  } else {
    console.log("Case 4: " + perfectNum + " is not a perfect number");
  }
}

// Case 5: Count frequency of a specific digit in a number
let number = 122333;
let digitToFind = 3;
let count = 0;
let tempNum = number;
if (number < 0) {
  console.log("Case 5: Using absolute value");
  tempNum = Math.abs(number);
}
while (tempNum > 0) {
  if (tempNum % 10 === digitToFind) {
    count++;
  }
  tempNum = Math.floor(tempNum / 10);
}
console.log(
  "Case 5: Digit " + digitToFind + " appears " + count + " times in " + number,
);

// Case 6: Find the nth Fibonacci number using while inside if-else
let fibN = 10;
if (fibN <= 0) {
  console.log("Case 6: Invalid input");
} else if (fibN === 1) {
  console.log("Case 6: Fibonacci number 1 is 0");
} else if (fibN === 2) {
  console.log("Case 6: Fibonacci number 2 is 1");
} else {
  let a = 0,
    b = 1,
    fibCount = 2;
  while (fibCount < fibN) {
    let next = a + b;
    a = b;
    b = next;
    fibCount++;
  }
  console.log("Case 6: Fibonacci number " + fibN + " is " + b);
}

// Case 7: Check if a string is a palindrome using while inside if-else
let str = "racecar";
let left = 0;
let right = str.length - 1;
let isPalin = true;
if (str.length === 0) {
  console.log("Case 7: Empty string is a palindrome");
} else {
  while (left < right) {
    if (str[left] !== str[right]) {
      isPalin = false;
      break;
    }
    left++;
    right--;
  }
  if (isPalin) {
    console.log("Case 7: '" + str + "' is a palindrome");
  } else {
    console.log("Case 7: '" + str + "' is not a palindrome");
  }
}

// Case 8: Convert decimal to binary using while inside if-else
let decimal = 25;
if (decimal === 0) {
  console.log("Case 8: Binary of 0 is 0");
} else {
  let binary = "";
  let dec = decimal;
  while (dec > 0) {
    if (dec % 2 === 0) {
      binary = "0" + binary;
    } else {
      binary = "1" + binary;
    }
    dec = Math.floor(dec / 2);
  }
  console.log("Case 8: Binary of " + decimal + " is " + binary);
}

// Case 9: Find the sum of digits until single digit (digital root)
let digNum = 9875;
let sum = digNum;
if (digNum < 0) {
  console.log("Case 9: Using absolute value");
  sum = Math.abs(digNum);
}
while (sum >= 10) {
  let tempSum = 0;
  while (sum > 0) {
    tempSum += sum % 10;
    sum = Math.floor(sum / 10);
  }
  sum = tempSum;
}
console.log("Case 9: Digital root of " + digNum + " is " + sum);

// Case 10: Check if a number is a power of two using while inside if-else
let powerNum = 64;
if (powerNum <= 0) {
  console.log("Case 10: " + powerNum + " is not a power of two");
} else {
  let p = powerNum;
  while (p > 1) {
    if (p % 2 !== 0) {
      break;
    }
    p = Math.floor(p / 2);
  }
  if (p === 1) {
    console.log("Case 10: " + powerNum + " is a power of two");
  } else {
    console.log("Case 10: " + powerNum + " is not a power of two");
  }
}
