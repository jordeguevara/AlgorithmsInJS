/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 !== 0)
        return false
    let map = new Map();
    map.set("{", "}")
    map.set("[", "]")
    map.set("(",")")    
    let stack = [];
    for(let i = 0; i < s.length;i++){
        let currentVal = s.charAt(i)
        if(currentVal === "{" ||
          currentVal === "[" || 
          currentVal === "("){
             stack.push(currentVal); 
        }
        let val = stack[stack.length-1];
       if ( currentVal === map.get(val)){
            stack.pop();
        }
    }
    return stack.length === 0;
};