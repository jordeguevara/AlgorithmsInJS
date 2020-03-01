/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
];
let target = 3;

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length === 0) return false
    let rows = matrix.length;
    let cols = matrix[0].length;
  
    let left = 0;
    let right = rows* cols -1;
  
    while (left <= right) {
      let middle = Math.floor(left + (right - left) /2)
      let r = Math.floor(middle/cols)
      let c = Math.floor(middle%cols)
      let middleElement = matrix[r][c]
      if( middleElement === target){
          return true
      }
      else if( target > middleElement){
          left = middle +1;
      }
      else if(target < middleElement){
          right = middle -1 
      }
    }
  
    return false;
  };
  


let res = searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]]
,13)
res
