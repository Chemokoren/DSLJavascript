function countOnline(usersObj) {
    // Only change code below this line
    count =0;
    for (let user in usersObj) {
        if(usersObj[user].online === true){
            count =count+1;
        }
    }
    return count;
    // Only change code above this line
}
my_users={
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}
console.log(countOnline(my_users))
// countOnline(my_users)
