function linearSearch(arr,val){

    for(let i=0; i < arr.length;i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;
}

var my_arr =["me","mine","do","doing"];
console.log(linearSearch(my_arr,"do"))
