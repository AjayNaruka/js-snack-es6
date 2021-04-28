$(function(){

  let testArray =[1,2,3,4,5,6,7,8,9]

  let newArray = arrayTrim(testArray,5,8)
  console.log(newArray);

  //FUNZIONI
    const  arrayTrim = (arr,min,max) => {
    let newArr =[];
    //EVITO DI LAVORARE IN CASO SPECIFICO
    if(min==0 && max==arr.length) return arr
    if(min < 0 || max>arr.length){
      console.log("Parametri non idonei");
      return 0
    }

    for(let i=min; i <max;i++){
      newArr.push(arr[i])
    }
    return newArr
  }

})