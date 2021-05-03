$(function(){
  //CAPITALIZE STRING

  const words =['pippo','PLUTO','Paperino']

  let capitalizedWords =[];

  capitalizedWords = words.map(word=>{
    return capitalize(word)
  })
  console.log(capitalizedWords);

  function capitalize(str){
    return str.charAt(0).toUpperCase()+ str.slice(1).toLowerCase()
  }

})