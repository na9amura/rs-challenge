export function quarterTurnAnticlockwise(inputArray: number[][]): number[][] {
  let isSquareArray = checkIfSquare(inputArray);
  if (!isSquareArray) {
    throw new Error("Bad argument, input array must be a square");
  }

  let n = inputArray.length;
  let outArray = initOutArray(n);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // first row reversed becomes first column, and so on
      outArray[n - j - 1][i] = inputArray[i][j];
    }
  }

  return outArray;
}

function checkIfSquare(inputArray: number[][]) {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length !== inputArray.length) {
      return false;
    }

    return true;
  }
}

function initOutArray(n: number) {
  let outArray = new Array(n);
  for (let c = 0; c < n; c++) {
    outArray[c] = new Array(n);
  }
  return outArray;
}
