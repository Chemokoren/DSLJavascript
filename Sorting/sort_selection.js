function selectionSort(arr){
    // var noSwaps;
    for(var i=0; i<arr.length;i++){
        // noSwaps =true;
        for(var j=0; j< arr.length;j++){
            console.log(arr, arr[j+1],arr[j])
            if(arr[j+1] < arr[j]){
                var temp =arr[j]
                arr[j] =arr[j+1];
                arr[j+1] =temp;
                // noSwaps =false;
            }
        }
        // if(noSwaps) break;
        console.log("ONE PASS COMPLETE")

    }
    return arr;
}

function selectionSortTWO(arr){
    for(var i=0;i<arr.length; i++){
        var lowest =i;
        for(var j=i+1; j<arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest =j;
            }
        }
        if(i !==lowest){
            console.log(arr,i,lowest)
            var temp =arr[i];
            arr[i] =arr[lowest];
            arr[lowest] =temp;
        }
    }
    return arr;
}

function selectionSortUpdated(arr){
    const swap =(arr,idx1,idx2) =>([arr[idx1],arr[idx2] =[arr[idx2],arr[idx1]]]);

    for(let i=0; i<arr.length;i++){
        let lowest =i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[lowest] > arr[j]){
                lowest =j;
            }
        }
        if(i !== lowest) swap(arr, i, lowest)
    }
    return arr;
}

let arrVal =[8,4,5,1,6,7,2,3]
// console.log(selectionSort(arrVal))
// console.log(selectionSortTWO(arrVal))
console.log(selectionSortUpdated(arrVal))
