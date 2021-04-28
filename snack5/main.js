$(function(){

  //SQUADRA COME ARRAY DI GIOCATORI
  var player ={
    code:'',
    averagePoints : 0,
    successRate : 0
  }

  var playerNumber = 5;
  var team =[]

  //POPOLO TEAM
  for(var i=0;i<playerNumber;i++){
    //creo copia base player
    var toAddPlayer = {
      ...player
    }
    team.push(toAddPlayer)
  }

  for(player of team){
    player.code = genCode();
    player.averagePoints = genNum(0,51);
    player.successRate = genNum(0,101);
  }


  //FUNZIONI
  
  function genCode(){
    var result= '';
    var letters = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z'
    ]

    //scelgo tre lettere a caso
    for(var i =0;i<3;i++){
      var letter = letters[genNum(0,letters.length)]
      result+=letter;
    }

    //scelgo tre cifre a caso
    for(var i =0;i<3;i++){
      var number = genNum(0,10)
      result+=number;
    }
    return result
  }

  function genNum(min,max){
    return Math.floor(Math.random()*(max-min))+min //MAX NON COMPRESO => chiamando la funzione metto
  }
})