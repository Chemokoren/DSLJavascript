let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function getArrayOfUsers(obj) {
    // Only change code below this line
    let first_arr =[]
    for(let us in obj){
        first_arr.push(us)
    }
    return first_arr

    // Only change code above this line
}
function getArrayOfUsers1(obj) {
    // Only change code below this line
    return Object.keys(obj);

    // Only change code above this line
}

console.log(getArrayOfUsers(users));
