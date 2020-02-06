
const arr = [
    'wda dfu too eow',
    'kkj dfu too eow',
    'fvg 231 431 837',
    'fqo fiw pok sip',
    'ios 433 347 009'
   ];
var reorderLogFiles = function(logs) {
    let letters = []
    let nums = [];
    let suf = [];
    for(log of logs){
        logSplit = log.split(' ');
        if(logSplit[1].search(/[0-9]/g) === -1 ){
            tempLetters = logSplit.slice(1,logSplit.length);
            letters.push([tempLetters.toString().replace(/,/g," "),logSplit[0]])
    
        }
        else
            nums.push(log);
    }
    letters.sort();

    for(let i = 0; i < letters.length;i++){
        letters[i] = letters[i][1] +" "+ letters[i][0];
    }
    letters.push(...nums)

    return letters;
};

console.log(reorderLogFiles(arr))
