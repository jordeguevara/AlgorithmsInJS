
// 10.5 Sparse Search CTCI
function search(arr,word){
    let low = 0;
    let high = arr.length-1;
    while(low < high){
        let mid = Math.floor((low + high)/2);
        if(arr[mid] === ''){
            let left = mid -1;
            let right = mid +1;

            while(true){ //slight mod
                if(arr[mid] !== ''){
                break;
                }
                else if(arr[right] !== '' && right < high)
                    mid = right;
                else if (arr[left] !== '' && left > low)
                    mid = left;
                left--;
                right++;
            }
        }
        if(arr[mid] > word){
            low = mid + 1;
        }
        else if(arr[mid] < word){
            high = mid;
        }

        else if (arr[mid] === word){
            return mid;
        }
            
    }

    return -1;
}

console.log(search(['at','','','','ball','','','car','','','dad',''],'balkl'));
//0(N worst case)