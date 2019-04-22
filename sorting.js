const assert = require('assert');
let unsortedArr = [ 3,1,5,9,0,-1,2,99, -101];

let actual = (unsortedArr) => {
    const sorted = unsortedArr.sort((a,b) => a- b)
    return sorted;
}
const insertionSort = (arr) =>  {
    for(let i = 1; i < arr.length;i++){
        let current = arr[i];
        let j = i -1;
        while(j >= 0 && arr[j] > current){
            arr[j + 1] = arr[j]
            j = j -1;
            arr[j+1] = current;
        }
    }
    return arr;
}


console.log(insertionSort(unsortedArr));
try{
assert.deepEqual(insertionSort(unsortedArr), actual(unsortedArr));
}
catch(err){
    console.log(err);
}
 