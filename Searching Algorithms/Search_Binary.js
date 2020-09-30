// function binarySearch(arr, val){
//     var start =0;
//     var end =arr.length -1;
//     var middle =Math.floor((start+end)/2);
//
//     while(arr[middle] !== val && start <= end ){
//         if(val < arr[middle]){
//         end = middle - 1;
//         }else{
//         start =middle + 1;
//         }
//         middle =Math.floor((start+end)/2);
//     }
//     if(arr[middle] === val){
//         return middle;
//     }
//     return -1;
//
// }

function binarySearch(arr, val){
    var start =0;
    var end =arr.length -1;
    var middle =Math.floor((start+end)/2);

    while(arr[middle] !== val && start <= end ){
        if(val < arr[middle]) end = middle - 1;
        else start =middle + 1;
        middle =Math.floor((start+end)/2);
    }
    return arr[middle] === val ? middle : -1;

}

// var my_arr =["me","mine","do","doing"];
var my_arr =[2,5,6,9,13,15,28,30];
console.log(binarySearch(my_arr,9))

