/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.set = new Set(nums);
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return Array.from(this.set);
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  let copy = Array.from(this.set).slice(0);
  for (let i = 0; i < copy.length - 1; i++) {
    let temp = copy[i];
    copy[i] = copy[i + 1];
    copy[i + 1] = temp;
  }
  return copy;
};

let nums = [1, 2, 3];
var obj = new Solution(nums);
var param_1 = obj.reset();
param_1;
var param_2 = obj.shuffle();
param_2;

/** 
  * Your Solution object will be instantiated and called as such:

  */
