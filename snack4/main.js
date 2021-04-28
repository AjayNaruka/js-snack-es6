$(function(){

  arr1 =["a","b","d"]
  arr2 =[1,2,3,4,5,6]

  var arrMerge = merge(arr1,arr2)
  console.log(arrMerge);

  function merge(arr1,arr2){
    var result = []
    //ricerca lunghezza merge ( 2x di max)
    var max;
    if(arr1.length>arr2.length) max = arr2.length
    else max = arr1.length

    for(var i=0;i<max;i++){
      result.push(arr1[i])
      result.push(arr2[i])
    }
    return result
  }
})