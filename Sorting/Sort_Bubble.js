function naiveBubbleSort(arr){

    for(var i=0; i<arr.length;i++){
        for(var j=0;j<arr.length;j++)
            console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr[j+1]){
                var temp =arr[j];
                arr[j] =arr[j+1];
                arr[j+1] =temp;
            }
    }
    return arr;

}
//optimize with no swaps
function bubbleSort(arr){
    var noSwaps;
    for(var i=arr.length; i>0;i--){
        noSwaps =true;
        for(var j=0;j<i-1;j++){
            console.log(arr,arr[j],arr[j+1]);
            if(arr[j] > arr[j+1]){
                var temp =arr[j];
                arr[j] =arr[j+1];
                arr[j+1] =temp;
                noSwaps =false;
            }
        }
        if(noSwaps) break;
        console.log("ONE PASS COMPLETE")
    }
    return arr;
}

function bubbleSortUpdated(arr){
    const swap =(arr,idx1,idx2) =>{
        [arr[idx1], arr[idx2]] =[arr[idx2], arr[idx1]];
    };

    for(let i =arr.length; i>0; i--){
        for(let j=0; j<i-1; j++){
            if(arr[j] > arr[j + 1]){
                swap(arr,j, j+1);
            }
        }
    }
    return arr;
}
// let arrVal =[6,15,10,4];
// let arrVal =[37,45,29,8];
let arrVal =[8,1,2,3,4,5,6,7]

// console.log(bubbleSortUpdated(arrVal))
// console.log(naiveBubbleSort(arrVal))
console.log(bubbleSort(arrVal))
