// Med. 565. Array Nesting
//Intial solution only return ONE possible option
var arrayNesting_V1 = function(nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) arr.push(false);
  let result = [];
  let j = 0;
  while (arr[j] != true) {
    result.push(nums[j]);
    arr[j] = true;
    j = nums[j];
  }

  return result.length;
};

// returns LONGEST possible soluton after checking other possible sets
var arrayNesting = function(nums) {
  //visted array
  let arr = [];
  for (let i = 0; i < nums.length; i++) arr.push(false);

  let res = 0;
  // checks if it visited if its not it will count until it hits same, but will go to next value. ie 2 and do it again
  for (let i = 0; i < nums.length; i++) {
    if (!arr[i]) {
      let j = nums[i];
      let count = 0;
      do {
        j = nums[j];
        count++;
        arr[j] = true;
      } while (j != nums[i]);
      res = Math.max(res, count);
    }
  }

  return res;
};
console.log(arrayNesting_V1([0, 2, 1]));
console.log(arrayNesting([0, 2, 1]));
