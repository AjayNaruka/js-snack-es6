$(function(){

  const container = $('.container ul')

  let cars =[
    {
      marca:'Audi',
      modello:'model1',
      alimentazione: 'diesel'
    },
    {
      marca:'BMW',
      modello:'model2',
      alimentazione: 'benzina'
    },
    {
      marca:'Audi',
      modello:'model3',
      alimentazione: 'gpl'
    },
    {
      marca:'Ferrari',
      modello:'model4',
      alimentazione: 'benzina'
    },
    {
      marca:'Fiat',
      modello:'model5',
      alimentazione: 'diesel'
    },
    {
      marca:'Fiat',
      modello:'model6',
      alimentazione: 'diesel'
    },
    {
      marca:'Audi',
      modello:'model7',
      alimentazione: 'gpl'
    },
    {
      marca:'BMW',
      modello:'model8',
      alimentazione: 'elettrico'
    },
    {
      marca:'Ferrari',
      modello:'model9',
      alimentazione: 'metano'
    },
    {
      marca:'BMW',
      modello:'model10',
      alimentazione: 'elettrico'
    },
  ]


  let benzina=[]
  let diesel=[]
  let remaining=[]

  cars.forEach(car=>{
    /* if(car.alimentazione==='benzina') benzina.push(car)
    else if( car.alimentazione==='diesel') diesel.push(car)
    else remaining.push(car) */
  })


  benzina=cars.filter(car=>{
    return car.alimentazione==='benzina'
  })
  diesel=cars.filter(car=>{
    return car.alimentazione==='diesel'
  })
  remaining = cars.filter(car=>{
    return car.alimentazione!='diesel' && car.alimentazione!='benzina'
  })
  
  console.log('Benzina \n',benzina);
  console.log('Diesel \n',diesel);
  console.log('Remaining \n',remaining);
  //STAMPA HTML

  stampaHtml(benzina,container)
  stampaHtml(diesel,container)
  stampaHtml(remaining,container)




  function stampaHtml(arr,target){
    arr.forEach(element=>{
      const {marca,modello,alimentazione} = element
      let toPrint = `
      <li>
        Marca= ${marca} <br>
        Modello= ${modello} <br>
        Alimentazione= ${alimentazione} <br>
      </li>

      `
      target.append(toPrint)
    })
  }

})