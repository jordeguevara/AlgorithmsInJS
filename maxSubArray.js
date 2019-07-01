let arr = [-1, 2, 3, 2, -4];

function findMaxCrossSubArray(arr, low, high) {
  let leftSum = Number.NEGATIVE_INFINITY;
  let sum = 0;
  let maxLeft, maxRight;
  let mid = Math.floor((low + high) / 2);
  for (let i = mid; i > low; i--) {
    sum = sum + arr[i];
    if (sum > leftSum) {
      leftSum = sum;
      maxLeft = i;
    }
  }

  let rightSum = Number.NEGATIVE_INFINITY;
  sum = 0;

  for (let j = mid + 1; j < high; j++) {
    sum = sum + arr[j];
    if (sum > rightSum) {
      rightSum = sum;
      maxRight = j;
    }
  }

  return leftSum + rightSum;
  // [maxLeft, maxRight, leftSum + rightSum];
}

function findMaxSubArray(arr, low, high) {
  if (high === low) {
    return arr[low];
  }

  let mid = Math.floor((low + high) / 2);
  let leftSum = findMaxSubArray(arr, low, mid);

  let rightSum = findMaxSubArray(arr, mid + 1, high);

  let crossSum = findMaxCrossSubArray(arr, low, high);

  return Math.max(crossSum, leftSum, rightSum);
  if (leftSum >= rightSum && leftSum >= crossSum) return leftSum;
  //[leftLow, leftHigh, leftSum];
  else if (rightSum >= leftSum && rightSum >= crossSum) return rightSum;
  //return [rightLow, rightHigh, rightSum];
  else return crossSum;
  //[crossLow, crossHigh, crossSum];
}

console.log(findMaxSubArray(arr, 0, arr.length - 1));
