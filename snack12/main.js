$(function(){
 
  let browser ={

    tabs:['GitHub','Facebook','Gmail','Instagram','Twitter','Repubblica','Corriere'],
    activeTab: 3
      } 

  let  socials =['Facebook','Instagram','Twitter']
  
  //CLOSE ALL SOCIALS
  //FIND ALL SOCIALS WITH RELATIVE INDEXES -> OBJECT

  let openSocials =[]
  findSocials(browser.tabs) // SO QUALI SOCIAL SONO APERTI E A QUALE INDEX
  console.log(openSocials);

  let isNextActivable = false;  //SE NO UNA ATTIVABILE DOPO L'INDICE DI ACTIVETAB

  //cerco se in ordine crescente di indice ne ho una attivabile post cancellazione
  let trovato = false;
  let nameActivableTab =''
  for(let index=browser.activeTab;index<browser.tabs.length && trovato===false;index++){
    if(!socials.includes(browser.tabs[index])){
      trovato=true;
      isNextActivable=true
      nameActivableTab=browser.tabs[index]
    }
  }
  
  //rimuovo da tabs
  let filteredTabs = browser.tabs.filter(tab=>{
    if(!socials.includes(tab)){
      return true
    }
  })

  browser.tabs = filteredTabs
  //CAMBIO INDICE
  console.log(isNextActivable);
  if(!isNextActivable){
    browser.activeTab=0;
  }else{
    let newIndex=0;
    for(let i=0;i<browser.tabs.length;i++){
      if(browser.tabs[i]===nameActivableTab) newIndex=i
    }
    browser.activeTab=newIndex;

  }

  console.log(browser);

  //FUNZIONI

  function findSocials(arr){
    for(let i=0;i<arr.length;i++){
      toAddOpenSocial ={
        title:'',
        index:0
      }
      if(socials.includes(arr[i])){
        toAddOpenSocial.title=arr[i]
        toAddOpenSocial.index=i
        openSocials.push(toAddOpenSocial)
      }
    }
  }
})