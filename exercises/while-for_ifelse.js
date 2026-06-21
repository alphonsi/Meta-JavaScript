// While-For with If-Else Combined - 15 Cases

// Case 1: Find prime numbers in a range using for inside while with if-else
let start = 10;
let end = 30;
let current = start;
console.log("Case 1: Prime numbers between " + start + " and " + end + ":");
while (current <= end) {
  let isPrime = true;
  if (current <= 1) {
    isPrime = false;
  } else {
    for (let i = 2; i <= Math.sqrt(current); i++) {
      if (current % i === 0) {
        isPrime = false;
        break;
      }
    }
  }
  if (isPrime) {
    console.log("Case 1: " + current + " is prime");
  }
  current++;
}

// Case 2: Find common elements between two arrays using while-for with if-else
let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [4, 5, 6, 7, 8, 9];
let p = 0;
console.log("Case 2: Common elements:");
while (p < array1.length) {
  let found = false;
  for (let q = 0; q < array2.length; q++) {
    if (array1[p] === array2[q]) {
      found = true;
      break;
    }
  }
  if (found) {
    console.log("Case 2: " + array1[p]);
  } else {
    console.log("Case 2: " + array1[p] + " is unique to array1");
  }
  p++;
}

// Case 3: Generate a multiplication table for multiple numbers using while-for
let numbers = [3, 5, 7];
let numIdx = 0;
while (numIdx < numbers.length) {
  let base = numbers[numIdx];
  console.log("Case 3: Multiplication table for " + base + ":");
  for (let m = 1; m <= 5; m++) {
    console.log("Case 3: " + base + " x " + m + " = " + base * m);
  }
  numIdx++;
}

// Case 4: Check if each row in a 2D array is sorted using while-for with if-else
let matrix = [
  [1, 2, 3],
  [4, 6, 5],
  [7, 8, 9],
];
let row = 0;
while (row < matrix.length) {
  let rowSorted = true;
  for (let col = 0; col < matrix[row].length - 1; col++) {
    if (matrix[row][col] > matrix[row][col + 1]) {
      rowSorted = false;
      break;
    }
  }
  if (rowSorted) {
    console.log("Case 4: Row " + row + " is sorted");
  } else {
    console.log("Case 4: Row " + row + " is NOT sorted");
  }
  row++;
}

// Case 5: Find all pairs in an array that sum to a target using while-for with if-else
let arr = [2, 4, 3, 5, 7, 1, 6];
let targetSum = 7;
let i = 0;
console.log("Case 5: Pairs that sum to " + targetSum + ":");
while (i < arr.length) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === targetSum) {
      console.log("Case 5: (" + arr[i] + ", " + arr[j] + ")");
    }
  }
  i++;
}

// Case 6: Count occurrences of each element in an array using while-for with if-else
let elements = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
let processed = [];
let eIdx = 0;
while (eIdx < elements.length) {
  let val = elements[eIdx];
  let alreadyCounted = false;
  for (let k = 0; k < processed.length; k++) {
    if (processed[k] === val) {
      alreadyCounted = true;
      break;
    }
  }
  if (!alreadyCounted) {
    let count = 0;
    for (let k = 0; k < elements.length; k++) {
      if (elements[k] === val) {
        count++;
      }
    }
    processed.push(val);
    console.log("Case 6: " + val + " appears " + count + " times");
  }
  eIdx++;
}

// Case 7: Validate a Sudoku row using while-for with if-else
let sudokuRow = [5, 3, 0, 0, 7, 0, 0, 0, 0];
let seen = [];
let valid = true;
let sIdx = 0;
while (sIdx < sudokuRow.length && valid) {
  let digit = sudokuRow[sIdx];
  if (digit !== 0) {
    for (let check = 0; check < seen.length; check++) {
      if (seen[check] === digit) {
        valid = false;
        break;
      }
    }
    if (valid) {
      seen.push(digit);
    }
  }
  sIdx++;
}
if (valid) {
  console.log("Case 7: Sudoku row is valid");
} else {
  console.log("Case 7: Sudoku row is INVALID (duplicate found)");
}

// Case 8: Find the longest consecutive sequence in an array using while-for with if-else
let seqArr = [100, 4, 200, 1, 3, 2];
let longestStreak = 0;
let seqIdx = 0;
while (seqIdx < seqArr.length) {
  let currentNum = seqArr[seqIdx];
  let isStart = true;
  for (let check = 0; check < seqArr.length; check++) {
    if (seqArr[check] === currentNum - 1) {
      isStart = false;
      break;
    }
  }
  if (isStart) {
    let streak = 1;
    let nextNum = currentNum + 1;
    let found = true;
    while (found) {
      found = false;
      for (let search = 0; search < seqArr.length; search++) {
        if (seqArr[search] === nextNum) {
          streak++;
          nextNum++;
          found = true;
          break;
        }
      }
    }
    if (streak > longestStreak) {
      longestStreak = streak;
    }
  }
  seqIdx++;
}
console.log("Case 8: Longest consecutive sequence length is " + longestStreak);

// Case 9: Check if a matrix is a magic square using while-for with if-else
let magic = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];
let magicSum = 0;
let isMagic = true;
for (let col = 0; col < magic[0].length; col++) {
  magicSum += magic[0][col];
}
let r = 1;
while (r < magic.length && isMagic) {
  let rowSum = 0;
  for (let col = 0; col < magic[r].length; col++) {
    rowSum += magic[r][col];
  }
  if (rowSum !== magicSum) {
    isMagic = false;
  }
  r++;
}
if (isMagic) {
  for (let col = 0; col < magic[0].length && isMagic; col++) {
    let colSum = 0;
    for (let row = 0; row < magic.length; row++) {
      colSum += magic[row][col];
    }
    if (colSum !== magicSum) {
      isMagic = false;
    }
  }
}
if (isMagic) {
  console.log("Case 9: The matrix is a magic square (sum = " + magicSum + ")");
} else {
  console.log("Case 9: The matrix is NOT a magic square");
}

// Case 10: Find the most frequent element in an array using while-for with if-else
let freqArr = [1, 3, 2, 3, 4, 3, 2, 1, 3, 5];
let maxFreq = 0;
let mostFreq = null;
let fIdx = 0;
while (fIdx < freqArr.length) {
  let currentVal = freqArr[fIdx];
  let alreadyChecked = false;
  for (let check = 0; check < fIdx; check++) {
    if (freqArr[check] === currentVal) {
      alreadyChecked = true;
      break;
    }
  }
  if (!alreadyChecked) {
    let freqCount = 0;
    for (let countIdx = 0; countIdx < freqArr.length; countIdx++) {
      if (freqArr[countIdx] === currentVal) {
        freqCount++;
      }
    }
    if (freqCount > maxFreq) {
      maxFreq = freqCount;
      mostFreq = currentVal;
    }
  }
  fIdx++;
}
console.log(
  "Case 10: Most frequent element is " + mostFreq + " (" + maxFreq + " times)",
);

// Case 11: Generate Pascal's triangle rows using while-for with if-else
let pascalRows = 5;
let currentRow = 0;
console.log("Case 11: Pascal's Triangle (" + pascalRows + " rows):");
while (currentRow < pascalRows) {
  let rowVals = [];
  for (let col = 0; col <= currentRow; col++) {
    if (col === 0 || col === currentRow) {
      rowVals.push(1);
    } else {
      let prevRow = [];
      for (let prev = 0; prev < currentRow; prev++) {
        if (prev === 0) {
          prevRow = [1];
        } else {
          let newRow = [];
          for (let pc = 0; pc <= prev; pc++) {
            if (pc === 0 || pc === prev) {
              newRow.push(1);
            } else {
              newRow.push(prevRow[pc - 1] + prevRow[pc]);
            }
          }
          prevRow = newRow;
        }
      }
      rowVals.push(prevRow[col - 1] + prevRow[col]);
    }
  }
  console.log("Case 11: Row " + currentRow + ": " + rowVals.join(" "));
  currentRow++;
}

// Case 12: Check if a word can be formed from a character bank using while-for with if-else
let word = "hello";
let charBank = "oleh l";
let canForm = true;
let wIdx = 0;
let bankCopy = charBank.split("");
while (wIdx < word.length && canForm) {
  let charFound = false;
  for (let bIdx = 0; bIdx < bankCopy.length; bIdx++) {
    if (bankCopy[bIdx] === word[wIdx]) {
      charFound = true;
      bankCopy[bIdx] = null;
      break;
    }
  }
  if (charFound) {
    console.log("Case 12: Character '" + word[wIdx] + "' found in bank");
  } else {
    console.log("Case 12: Character '" + word[wIdx] + "' NOT found in bank");
    canForm = false;
  }
  wIdx++;
}
if (canForm) {
  console.log("Case 12: '" + word + "' can be formed from the character bank");
} else {
  console.log(
    "Case 12: '" + word + "' CANNOT be formed from the character bank",
  );
}

// Case 13: Find the kth smallest element using while-for with if-else
let kthArr = [7, 10, 4, 3, 20, 15];
let k = 3;
let sortedVals = [];
let remaining = kthArr.slice();
while (sortedVals.length < k) {
  let minVal = remaining[0];
  let minIdx = 0;
  for (let s = 1; s < remaining.length; s++) {
    if (remaining[s] < minVal) {
      minVal = remaining[s];
      minIdx = s;
    }
  }
  sortedVals.push(minVal);
  remaining.splice(minIdx, 1);
}
let kthSmallest = sortedVals[sortedVals.length - 1];
console.log("Case 13: The " + k + "rd smallest element is " + kthSmallest);

// Case 14: Merge two sorted arrays using while-for with if-else
let sortedA = [1, 3, 5, 7];
let sortedB = [2, 4, 6, 8];
let merged = [];
let aIdx = 0;
let bIdx = 0;
while (aIdx < sortedA.length && bIdx < sortedB.length) {
  if (sortedA[aIdx] < sortedB[bIdx]) {
    merged.push(sortedA[aIdx]);
    aIdx++;
  } else if (sortedA[aIdx] > sortedB[bIdx]) {
    merged.push(sortedB[bIdx]);
    bIdx++;
  } else {
    merged.push(sortedA[aIdx]);
    merged.push(sortedB[bIdx]);
    aIdx++;
    bIdx++;
  }
}
while (aIdx < sortedA.length) {
  merged.push(sortedA[aIdx]);
  aIdx++;
}
while (bIdx < sortedB.length) {
  merged.push(sortedB[bIdx]);
  bIdx++;
}
console.log("Case 14: Merged sorted array: [" + merged.join(", ") + "]");

// Case 15: Find all subsets of an array using while-for with if-else
let subsetArr = [1, 2, 3];
let totalSubsets = Math.pow(2, subsetArr.length);
let subsetIdx = 0;
console.log("Case 15: All subsets of [" + subsetArr.join(", ") + "]:");
while (subsetIdx < totalSubsets) {
  let subset = [];
  for (let bit = 0; bit < subsetArr.length; bit++) {
    if (subsetIdx & (1 << bit)) {
      subset.push(subsetArr[bit]);
    }
  }
  if (subset.length === 0) {
    console.log("Case 15: [] (empty set)");
  } else {
    console.log("Case 15: [" + subset.join(", ") + "]");
  }
  subsetIdx++;
}
