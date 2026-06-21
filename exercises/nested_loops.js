// Nested Loops - 10 Cases (5 for-for, 5 while-while)

// --- For Loop Nested Cases ---

// Case 1: Multiplication table (3x3)
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log("Case 1: " + i + " x " + j + " = " + i * j);
  }
}

// Case 2: Print a right-angle triangle pattern
let rows = 5;
for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "*";
  }
  console.log("Case 2: " + line);
}

// Case 3: Find duplicate elements in an array
let arr1 = [2, 4, 6, 8, 4, 10, 2];
console.log("Case 3: Duplicate elements:");
for (let i = 0; i < arr1.length; i++) {
  for (let j = i + 1; j < arr1.length; j++) {
    if (arr1[i] === arr1[j]) {
      console.log("Case 3: " + arr1[i] + " at positions " + i + " and " + j);
    }
  }
}

// Case 4: Sum of all elements in a 2D array (matrix)
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let totalSum = 0;
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    totalSum += matrix[i][j];
  }
}
console.log("Case 4: Sum of all matrix elements is " + totalSum);

// Case 5: Generate a multiplication table grid (1 to 5)
console.log("Case 5: Multiplication Table (1-5):");
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    row += (i * j).toString().padStart(4, " ");
  }
  console.log("Case 5:" + row);
}

// --- While Loop Nested Cases ---

// Case 6: Countdown pairs (i from 3 to 1, j from 1 to i)
let a = 3;
while (a >= 1) {
  let b = 1;
  while (b <= a) {
    console.log("Case 6: (" + a + ", " + b + ")");
    b++;
  }
  a--;
}

// Case 7: Print a square pattern of numbers
let size = 4;
let c = 1;
while (c <= size) {
  let line = "";
  let d = 1;
  while (d <= size) {
    line += d + " ";
    d++;
  }
  console.log("Case 7: " + line.trim());
  c++;
}

// Case 8: Find common elements between two arrays
let arrayA = [1, 2, 3, 4, 5];
let arrayB = [3, 5, 7, 9, 2];
let e = 0;
console.log("Case 8: Common elements:");
while (e < arrayA.length) {
  let f = 0;
  while (f < arrayB.length) {
    if (arrayA[e] === arrayB[f]) {
      console.log("Case 8: " + arrayA[e]);
    }
    f++;
  }
  e++;
}

// Case 9: Generate a number pyramid
let levels = 4;
let g = 1;
while (g <= levels) {
  let line = "";
  let h = 1;
  while (h <= g) {
    line += h + " ";
    h++;
  }
  console.log("Case 9: " + line.trim());
  g++;
}

// Case 10: Check if a matrix is symmetric
let symMatrix = [
  [1, 2, 3],
  [2, 4, 5],
  [3, 5, 6],
];
let isSymmetric = true;
let p = 0;
while (p < symMatrix.length && isSymmetric) {
  let q = 0;
  while (q < symMatrix[p].length && isSymmetric) {
    if (symMatrix[p][q] !== symMatrix[q][p]) {
      isSymmetric = false;
    }
    q++;
  }
  p++;
}
console.log("Case 10: Matrix is symmetric: " + isSymmetric);
