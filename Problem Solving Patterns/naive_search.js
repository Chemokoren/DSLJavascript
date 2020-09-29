function search(arr, val){
    for(let i=0; i< arr.length; i++){
        if(arr[i] === val){
            return (i);
        }
    }
    return -1;
}

console.log(search([2,6,9,2,1,8,5,6,3],10))
