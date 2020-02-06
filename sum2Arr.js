
//# WIP
const arr1 = [[1, 2], [2, 4], [3, 5]];
const arr2=  [[1, 1], [2, 7], [3, 2]];
const maxVal = 10;

const sum = (arr1,arr2,ma) => { 
    //possibly longest
    let map = new Map();
    let j =0;
    for(let i = 0; i< arr1.length-1;i++){
       let bottom = arr1[i][1] + arr2[i][1];
       let across = arr2[i][i] + arr1[i+1][1]
       let val = Math.max(bottom,across);
       map.set(i,val);

    }
console.log(map)
}

console.log(sum(arr1,arr2,maxVal));