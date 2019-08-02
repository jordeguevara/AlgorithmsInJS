/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
    let count =0;
    let bits;
    for(let i = L; i <= R ; i++){
        let binary = i.toString(2);
           bits =0;
        for(let j = 0; j <binary.length;j++){

            if(parseInt(binary.charAt(j)) === 1)
                bits++;
        }
        if(isPrime(bits)){
            count++;
        }
    }
    
    return count;
};


function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}