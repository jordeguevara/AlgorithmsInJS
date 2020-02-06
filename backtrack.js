
const set = [1,2,3]
//ex [{},1,2,3,(1,2),(1,3),(2,3),(1,2,3)]
function powerSet(set){


    const N = set.length;
    let B = new Array(N).fill(0);
    let bitstrings = []
    generateBitStrings(0,B,bitstrings)

    function generateBitStrings(i,B,bitstrings){
        if(i === N)
            bitstrings.push(B.slice(0))
        else{
            B[i] = 1
            generateBitStrings(i+1,B,bitstrings)

            B[i] = 0
            generateBitStrings(i+1,B,bitstrings)
        }
    }

    subsets = [];
    for(let bitstring of bitstrings){
        subset = [];
        for(let i =0 ; i < N;i++){
        let bit = bitstring[i]
        if(bit === 1)   
            subset.push(set[i])
        }
        let sum
        if(subset.length >= 1)
            sum = subset.reduce((a,b) => a +b)
            console.log(sum)
        if(sum === 1)
            subsets.push(subset);
    }

    return subsets;
}


console.log(powerSet(set))
