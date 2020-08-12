// Only change code below this line
function countdown(n){
    if(n<1){
        return [];
    }else{
        const arr = countdown(n - 1);
        arr.unshift(n);
        return arr;
        // return countArray.unshift(n);
    }
}
function countdown1(n) {
    if (n < 1) {
        return [];
    } else {
        const arr = countdown(n - 1);
        arr.splice(0, 0, n);
        return arr;
    }
}
function countdown2(n){
    return n < 1 ? [] : [n].concat(countdown(n - 1));
}

function countdown3(n){
    return n < 1 ? [] : [n, ...countdown(n - 1)];
}
// Only change code above this line
console.log(countdown3(10))
