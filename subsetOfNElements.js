function subset(arr){
    for(let i=0;i < arr.length - 2;i++){
        for(let j=1;j<arr.length -1;j++){
            for(let k=2;k<arr.length ; k++){
                console.log("Luthfi your subset values are : [",arr[i], " ", arr[j]," ",arr[k]," ]")
            }
        }
    }

}
subset([1,2,3,4,5,6])