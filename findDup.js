var findDuplicate = function(nums) {
  /*
first attempt quick and dirty
  let max = nums.length -1;
  let counter = new Array(max+1).fill(0)
  for(let i =0; i < nums.length;i++){
      let index = nums[i];
      if(counter[index] == 0)
          counter[index] += 1;
      else if( counter[index] ==1)
          return index;

  }
  let fast = 1;
  let slow = 0
  while(){
      if(nums[fast] === nums[slow]){
          return nums[fast]
      }
      fast++
      slow++
  }
*/
  //Find the intersection point of the two runners.
  tortoise = nums[0];
  hare = nums[0];
  while (true) {
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
    if (tortoise == hare) break;
  }
  tortoise;
  hare;
  //# Find the "entrance" to the cycle.
  ptr1 = nums[0];
  ptr2 = tortoise;
  while (ptr1 != ptr2) {
    ptr1 = nums[ptr1];
    ptr2 = nums[ptr2];
  }

  return ptr1;
};
// 0 1 2 3 4 5 6 7 8 9
// 2 5 9 6 9 3 8 9 7 1
let result = findDuplicate([2, 5, 9, 6, 9, 3, 8, 9, 7, 1]);
result;
