// *****
// *****
// *****
// *****
// *****
const SquareStarPattern = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "*";
    }
    console.log(row);
  }
};

const SquareStarPattern2 = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
};

// *****
// *   *
// *   *
// *   *
// *****

const HollowSquare = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (i == 0 || j == 0 || i == n - 1 || j == n - 1) row += "*";
      else row += "#";
    }
    console.log(row);
  }
};

const HollowSquare2 = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 || j == 0 || i == n - 1 || j == n - 1)
        process.stdout.write("*");
      else process.stdout.write("#");
    }
    process.stdout.write("\n");
  }
};

// *
// **
// ***
// ****
// *****

// WRONG WAY TO DO
// const LeftTrianglePattern = (n) => {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < i; j++) {
//       row += "*";
//     }
//     console.log(row);
//   }
// };

const LeftTrianglePattern = (n) => {
  console.log("Left Triangle Pattern");
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (i >= j) row += "*";
      else row += "#";
    }
    console.log(row);
  }
};

const LeftTrianglePattern2 = (n) => {
  console.log("Left Triangle Pattern 2");
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i >= j) process.stdout.write("*");
      else process.stdout.write("#");
    }
    process.stdout.write("\n");
  }
};

const RightTrianglePattern = (n) => {
  console.log("Right Triangle Pattern");
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (i + j >= n - 1 || i === n - 1 || j === n - 1) row += "*";
      else row += "#";
    }
    console.log(row);
  }
};

const RightTrianglePattern2 = (n) => {
  console.log("Right Triangle Pattern 2");
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i + j >= n - 1 || i === n - 1 || j === n - 1)
        process.stdout.write("*");
      else process.stdout.write("#");
    }
    process.stdout.write("\n");
  }
};

const HollowRightTrianglePattern = (n) => {
  console.log("Hollow Right Triangle Pattern");
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (i + j === n - 1 || i === n - 1 || j === n - 1) row += "*";
      else row += "#";
    }
    console.log(row);
  }
};

const HollowRightTrianglePattern2 = (n) => {
  console.log("Hollow Right Triangle Pattern 2");
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i + j === n - 1 || i === n - 1 || j === n - 1)
        process.stdout.write("*");
      else process.stdout.write("#");
    }
    process.stdout.write("\n");
  }
};

const HollowLeftTrianglePattern = (n) => {
  console.log("Hollow Left Triangle Pattern");
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (i === n - 1 || j === 0 || i === j) row += "*";
      else row += "#";
    }
    console.log(row);
  }
};

const HollowLeftTrianglePattern2 = (n) => {
  console.log("Hollow Right Triangle Pattern 2");
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === n - 1 || j === 0 || i === j) process.stdout.write("*");
      else process.stdout.write("#");
    }
    process.stdout.write("\n");
  }
};

const PyramidPattern = (n) => {
  console.log("Pyramid Pattern");
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < 2 * n - 1; j++) {
      if (j >= n - 1 - i && j <= n - 1 + i) row += "*";
      else row += " ";
    }
    console.log(row);
  }
};

const PyramidPattern2 = (n) => {
  console.log("Pyramid Pattern 2");
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      if (j >= n - 1 - i && j <= n - 1 + i) process.stdout.write("*");
      else process.stdout.write("#");
    }
    process.stdout.write("\n");
  }
};

const InvertedPyramidPattern = (n) => {
  console.log("Inverted Pyramid Pattern");
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < 2 * n - 1; j++) {
      if (j >= n - 1 - (n - 1 - i) && j <= n - 1 + (n - 1 - i)) row += "*";
      else row += " ";
    }
    console.log(row);
  }
};

const InvertedPyramidPattern2 = (n) => {
  console.log("Inverted Pyramid Pattern 2");
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      if (j >= n - 1 - (n - 1 - i) && j <= n - 1 + (n - 1 - i))
        process.stdout.write("*");
      else process.stdout.write("#");
    }
    process.stdout.write("\n");
  }
};

const DiamondPattern = (n) => {
  PyramidPattern(n);
  InvertedPyramidPattern(n);
};

const HollowPyramidPattern = (n) => {
  console.log("Hollow Pyramid Pattern");
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < 2 * n - 1; j++) {
      if (j == n - 1 - i || j == n - 1 + i || i == n - 1) row += "*";
      else row += " ";
    }
    console.log(row);
  }
};

const HollowPyramidPattern2 = (n) => {
  console.log("Hollow Pyramid Pattern 2");
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      if (j == n - 1 - i || j == n - 1 + i || i == n - 1)
        process.stdout.write("*");
      else process.stdout.write("#");
    }
    process.stdout.write("\n");
  }
};

const HollowDiamondPattern = (n) => {
  console.log("Hollow Diamond Pattern");
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      if (j == n - 1 - i || j == n - 1 + i) process.stdout.write("*");
      else process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      if (j == n - 1 - (n - 1 - i) || j == n - 1 + (n - 1 - i))
        process.stdout.write("*");
      else process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
};

SquareStarPattern(6);
console.log("\n\n\n");
SquareStarPattern2(6);
console.log("\n\n\n");

HollowSquare(6);
console.log("\n\n\n");
HollowSquare2(6);
console.log("\n\n\n");

LeftTrianglePattern(6);
console.log("\n\n\n");
LeftTrianglePattern2(6);
console.log("\n\n\n");

RightTrianglePattern(6);
console.log("\n\n\n");
RightTrianglePattern2(6);
console.log("\n\n\n");

HollowRightTrianglePattern(6);
console.log("\n\n\n");
HollowRightTrianglePattern2(6);
console.log("\n\n\n");

HollowLeftTrianglePattern(6);
console.log("\n\n\n");
HollowLeftTrianglePattern2(6);
console.log("\n\n\n");

PyramidPattern(6);
console.log("\n\n\n");
PyramidPattern2(6);
console.log("\n\n\n");

InvertedPyramidPattern(6);
console.log("\n\n\n");
InvertedPyramidPattern2(6);
console.log("\n\n\n");

DiamondPattern(6);
console.log("\n\n\n");

HollowPyramidPattern(6);
console.log("\n\n\n");
HollowPyramidPattern2(6);
console.log("\n\n\n");

HollowDiamondPattern(6);
console.log("\n\n\n");
