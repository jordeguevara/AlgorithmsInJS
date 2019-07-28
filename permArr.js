const generatePerm = (nums, arr, answer) => {
  if (nums.length === 0) { answer.push([...arr]); }
  for (let i = 0; i < nums.length; i++) {
    const newNums =  nums.filter((n,index)=> index !== i)
    arr.push(nums[i])
    generatePerm(newNums, arr, answer);
    arr.pop();
  }
  return answer;
};


const permute = function (nums) {
  return generatePerm(nums, [], []);
};


// const generatePerm = (nums, arr, answer) => {
//   if (nums.length === 0) { answer.push(arr); }
//   for (let i = 0; i < nums.length; i++) {
//     const newNums = JSON.stringify(JSON.parse(nums))
//     const front = newNums.shift();
//     arr.push(front);
//     generatePerm(newNums, arr, answer);
//     arr.pop();
//   }
//   return answer;
// };


// const permute = function (nums) {
//   return generatePerm(nums, [], []);
// };


console.log(permute([1, 2, 3]));





console.log(permute([1, 2, 3]));