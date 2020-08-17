// Basic Algorithm Scripting: Finders Keepers
// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
//     This means that given an element x, the 'truth test' is passed if func(x) is true.
//     If no element passes the test, return undefined.



function findElement(arr, func) {
    let num = 0;
    for (var i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
            return num;
        }
    }

    return undefined;
}
function findElement1(arr, func) {
    return arr.find(func);
}

//1.  Look through the array given in the 1st paramater “arr” using the .map() method
//2.  Use the function in the 2nd parameter as the callback function in arr.map()
//3.  Acquire the index of the first number that meets the condition in the function.
//4.  Use that index to display the first available number that meets the condition.
function findElement2(arr, func) {
    return arr[arr.map(func).indexOf(true)];
}

console.log(findElement1([1, 2, 3, 4], num => num % 2 === 0));
