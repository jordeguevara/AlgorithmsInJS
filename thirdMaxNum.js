//414. Third Maximum Number leetcoode
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    if(nums.length <3)
        return Math.max(...nums)
    
    const sortedDescending = nums.sort((a,b) => b -a)
    let i = 0
    let j= 0;
    let max = Number.NEGATIVE_INFINITY;
    while(i <3){
        if(nums[j]=== max){
            j++;
            if(j > nums.length)
                break;
            continue;
        }
          
        max = sortedDescending[j];
        i++;
        j++;
    }

    let answer = max === undefined ?  Math.max(...nums) : max
    return answer
};

