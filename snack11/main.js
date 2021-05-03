$(function(){
  
  const people =[
    {
      nome: 'Mario',
      cognome: 'Rossi',
      age:60    
    },
    {
      nome: 'Luigi',
      cognome: 'Verdi',
      age:17   
    },
    {
      nome: 'Silvia',
      cognome: 'Neri',
      age:25   
    }
  ]

  let eligible = people.map(person =>{
    let text='';
    const {nome,cognome}=person
    if(person.age>17) {
      text= 
      `${nome} ${cognome} può guidare`
    } else{
      text= 
      `${nome} ${cognome} non può guidare`
    }
    return text
  })
  console.log(eligible);

})