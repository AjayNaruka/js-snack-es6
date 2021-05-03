var array = [5,6,1,51,22,26,21,99,115,20,11]
console.log(array);
sortArr(array);
console.log(array);

function sortArr(arr){
  for(var i=0;i<arr.length;i++){
    for(var j= i; j<arr.length; j++){
      if(arr[j]>arr[i]){
        var temp = arr[j];
        arr[j]=arr[i]
        arr[i]=temp
      }
    }
}
}