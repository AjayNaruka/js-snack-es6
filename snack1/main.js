$(function(){

  let tot = 0;

  //creo una zucchina base
  const zucchinaBase = {
    varieta: "",
    peso: 0,
    lunghezza: 30  
  }

  let zucchine = []

  for(var i =0;i<10;i++){

    let zucchinaAdd = {
      ...zucchinaBase
    };
    zucchine.push(zucchinaAdd)
  }

  
  for(zucchina of zucchine){
    zucchina.peso = parseInt(prompt("Inserisci peso: "))
    tot+=zucchina.peso
  }
  console.log(zucchine);
  console.log(tot);
})