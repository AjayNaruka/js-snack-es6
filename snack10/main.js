$(function(){
  
  const animals =[
    {
      nome: 'leone', 
      famiglia: 'felidi', 
      classe: 'mammiferi' 
    },
    {
      nome: 'tigre', 
      famiglia: 'felidi', 
      classe: 'mammiferi' 
    },
    {
      nome: 'gallina', 
      famiglia: 'fasianidi', 
      classe: 'uccello' 
    },
    {
      nome: 'serpente', 
      famiglia: 'vipera', 
      classe: 'rettile' 
    },
    {
      nome: 'tonno', 
      famiglia: 'tonnidi', 
      classe: 'pesce' 
    },
    {
      nome: 'lupo', 
      famiglia: 'canidi', 
      classe: 'mammiferi' 
    }

  ]

  let mammals = animals.filter(animal=>{
    return animal.classe==='mammiferi'
  })
  console.log(mammals);

})