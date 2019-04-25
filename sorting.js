const assert = require('assert');
let unsortedArr = [ 3,1,5,9,0,-1,2,99, -101];

let actual = (unsortedArr) => {
    const sorted = unsortedArr.sort((a,b) => a- b)
    return sorted;
}
const insertionSort = (arr) =>  {
    const result = JSON.parse(JSON.stringify(arr));
    for(let i = 1; i < result.length;i++){
        let current = result[i];
        let j = i -1;
        while(j >= 0 && result[j] > current){
            result[j + 1] = result[j]
            j = j -1;
            result[j+1] = current;
        }
    }
    return result;
}

const mergeSort = (arr,low,mid,high) => {

    function merge(){
        let n1 = mid - low +1;
        let n2 = high - mid; 
        let left = [];
        let right = []

        for(let i = 1 ; i < n1; i++){
            left.push( arr[low + i -1]);
        }
        for(let i = 0 ; i < n2;i++){
        
            right.push(arr[mid+i])
        }
        return [...left,...right];
    }
    return merge;

}


// TO DO: BubbleSort, selctionSort



const sortedArr = insertionSort(unsortedArr)
console.log(sortedArr)
let mid = Math.floor(unsortedArr.length/2);
console.log(mergeSort(unsortedArr,0,mid,unsortedArr.length)());
try{
assert.deepEqual(insertionSort(unsortedArr), actual(unsortedArr));
}
catch(err){
    console.log(err);
}
 
