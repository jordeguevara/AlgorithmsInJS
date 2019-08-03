/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
for(let i = 0; i < Number.POSITIVE_INFINITY ; i++){
   let possibleResult = Math.floor(Math.pow(i,2))
   if(possibleResult === x)
       return i;
   if(possibleResult > x)
       return i-1;
};

}
