function swap1(array, i, j){
    var temp =array[i];
    array[i] = array[j]
    array[j] =temp;
}
const swap =(arr,idx1, idx2)=>{
    [arr[idx1],arr[idx2] =[arr[idx2],arr[idx1]]];
};

function pivot(arr, start=0, end=arr.length+1){

    var pivot =arr[start];
    var swapIdx =start;

    for(var i =start+1;i<arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr,swapIdx,i);
        }
    }
    // console.log(arr)
    swap(arr,start,swapIdx);
    return swapIdx;
}

function quickSort(arr, left =0, right =arr.length-1){
    if(left <right){
        let pivotIndex =pivot(arr,left,right)
//left
        quickSort(arr,left,pivotIndex-1);
//right
        quickSort(arr,pivotIndex+1,right)
    }
    console.log(arr)
    return arr;
}
var arrVal =[4,8,2,1,5,7,6,3];
// console.log(pivot([4,8,2,1,5,7,6,3]))
quickSort(arrVal)

