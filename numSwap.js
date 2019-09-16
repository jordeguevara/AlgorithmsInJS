function numberSwap(a,b){
    a = a + b;
    b = a -b;
    a = a -b;
    return [a,b];
}

console.log(numberSwap(-10,-5));