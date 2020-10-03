function insertionSort(arr){
    for(var i =0; i<arr.length; i++){
        for(var j=i+1; j< arr.length;j++){
            if(arr[j] < arr[i]){
                var temp =arr[i];
                arr[i] =arr[j]
                arr[j] =temp;
            }
        }
    }
    return arr;
}

function insertionSortUpdated(arr){
    for(var i=1; i<arr.length;i++){
        var currentVal =arr[i];
        for(var j =i-1; j>=0 && arr[j] > currentVal; j--){
            arr[j+1] =arr[j]
        }
        arr[j+1] =currentVal;
        console.log(arr)
    }
    return arr;
}
var arrVal =[4,8,1,7,3,9,8];
// console.log(insertionSort(arrVal));
console.log(insertionSortUpdated(arrVal));
