function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
        return [startNum];
    } else {
        const arr = rangeOfNumbers(startNum,endNum - 1);
        arr.push(endNum);
        // arr.splice(startNum, 0, endNum);
        // arr.unshift(endNum)
        return arr;
        // arr.splice(startNum, 0, endNum);
        // return arr;
    }

}
function rangeOfNumbers1(startNum, endNum) {
    return startNum === endNum
        ? [startNum]
        : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}
function rangeOfNumbers2(startNum, endNum) {
    return startNum === endNum
        ? [startNum]
        : [...rangeOfNumbers(startNum, endNum - 1), endNum ];
}

console.log(rangeOfNumbers2(2,7))
