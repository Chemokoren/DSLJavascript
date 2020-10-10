function getDigit(num, i){
    return Math.floor(Math.abs(num)/Math.pow(10,i))%10;
}

function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num)))+1;
}

function mostDigits(nums){
    let maxDigits =0;
    for(let i=0; i<nums.length;i++){
        maxDigits =Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k =0; k < maxDigitCount; k++){
        let digitBuckets =Array.from({length:10}, () =>[]);
        for(let i =0; i<nums.length; i++){
            let digit =getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        console.log(digitBuckets)
        nums =[].concat(...digitBuckets);
        console.log(nums)
    }
    return nums;

}
console.log([23,345,5467,12,2345,9852])
console.log(radixSort([23,345,5467,12,2345,9852]))

// numVal =786463899;
// arrVal =[34, 7, 9998, 456, 789,786463899,76664, 37,787];
// console.log(getDigit(numVal, 5))
// console.log(digitCount(numVal))
// console.log(mostDigits(arrVal))
