//Grokking Algorithm book


const arr = [-11,156,141,35,94,198,88,156,61,111];

const selectionSort = (arr) => {
    for(let i = 0; i < arr.length;i++){
        let j = i;
        let ind = -1;
        let max = Number.NEGATIVE_INFINITY;
        while(j < arr.length){
            if(arr[j] >= max){
                max = arr[j];
                ind = j;
            }
            j++;
            
        }
        let temp = arr[i];
        arr[i] = arr[ind];
        arr[ind] = temp;

    }

    return arr
}

console.log(selectionSort(arr))

let nums =[2,4,9,8,11,3];

function sum(arr) {
    if(arr.length === 0){
        return 0;
    }

    return arr[0] + sum(arr.slice(1,arr.length))
}

console.log(sum(nums,0))

function max(arr,num) {
    if(arr.length === 0){
        return num;
    }
    return Math.max(max(arr.slice(1,arr.length),num),arr[0]);
}
;
console.log(max(nums,Number.NEGATIVE_INFINITY))

let numbers = [2,4,6,8,10,12];

console.log(binarySearch(numbers,2));

function binarySearch(arr,target) {
    function helper(low,mid,high) {
        if(arr[mid] === target)
            return mid;
        if(low >= high)
            return -1;
            console.log(arr[mid])
        if(arr[mid] < target)
          return helper(mid+1,Math.floor(((mid+1)+high)/2),high);
        else
          return helper(low,Math.floor((low+mid)/2),mid);
    }
    return helper(0,Math.floor((0 + arr.length-1) /2),arr.length-1);
}

function quickSort(arr,pivot){
    console.log(pivot)
    const parted = partition();
    console.log(parted)
    //partion;
    //split it into two
    function partition() {
        let i =0;
        let ind = pivot+1;
        //find elements less than pivot
        let left = []
        let right = []
        while(ind < arr.length){
            if(arr[ind] > arr[pivot])
                right.push(arr[ind]); 
                ind--;
        }

        while(i< ind-1){
            if(arr[i] < arr[pivot])
                left.push(arr[i])
                i++;
        }

        return [...left,pivot,...right];
        //find elements greater than pivot
    }
    // quickSort(arr)
}

console.log(quickSort(arr,Math.floor(Math.random() * arr.length)
))
//Binary Search

//base case l > h
// return;

//mid == target
// return mid

//recursive case, m/2, low,high



const arr = [-11,156,141,35,94,198,88,61,111];
function quickSort(arr,pivot){
    console.log(pivot)
    const parted = partition();
    console.log(parted)
    //partion;
    //split it into two
    function partition() {
        let i =0;
        let ind = pivot+1;
        //find elements less than pivot
        let left = []
        let right = []
        while(ind < arr.length){
            if(arr[ind] > arr[pivot])
                right.push(arr[ind]);
            else
            left.push(arr[ind])
                ind++;
        }

        while(i< pivot){
            if(arr[i] < arr[pivot])
                left.push(arr[i])
            else if (arr[i] > arr[pivot])
            right.push(arr[i])
                i++;
        }
        console.log(right)
         console.log(left)
        return [...left,arr[pivot],...right];
        //find elements greater than pivot
    }
}

console.log(quickSort(arr,Math.floor(Math.random() * arr.length)
))

//insert into an array
let array = [1,3,4,5];

// 0 1 2 3 4 5 6
// 1 3 4 4 5 
//insert two
function insert(arr,value,index) {
    let j = arr.length-1;

    while(j>= index +1){
        let temp = arr[j-1];  
        arr[j+1] = arr[j]; 
        arr[j] = temp
        j--;
    }
    arr[index] = value

    return arr;
}

// console.log(insert(array,6,1))
// console.log(insert(array,9,3))


