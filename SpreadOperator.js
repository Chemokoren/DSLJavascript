// Basic Data Structures: Copy an Array with the Spread Operator
// While slice() allows us to be selective about what elements of an array to copy, among several other useful tasks, ES6's new spread operator allows us to easily copy all of an array's elements, in order, with a simple and highly readable syntax. The spread syntax simply looks like this: ...
//
// In practice, we can use the spread operator to copy an array like so:
//
//     let thisArray = [true, true, undefined, false, null];
// let thatArray = [...thisArray];
// // thatArray equals [true, true, undefined, false, null]
// // thisArray remains unchanged, and is identical to thatArray
// We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. The function is supposed to return a new array made up of num copies of arr. We have done most of the work for you, but it doesn't work quite right yet. Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).
//

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        // Only change code below this line
// newArr = ([...arr]);
        newArr.push([...arr]);
        // Only change code above this line
        num--;
    }
    return newArr;
}

//
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence= ['learning', ...fragment, 'is', 'fun']; // Change this line
    return sentence;
}

console.log(spreadOut());


console.log(' spread operator ');
console.log(copyMachine([true, false, true], 2));


function quickCheck(arr, elem) {
    // Only change code below this line
    return arr.indexOf(elem)
    // if(arr.indexOf(elem)){
    //     return true
    // }else{
    //     return false
    // }
    // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'shallots'));
