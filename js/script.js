/* { let result = {
   computerScore: 0,
   playerScore: 0
 }; */

/*  function results(){
    document.getElementById('score').innerHTML = computerScore + " - " + playerScore;
  }*/
{
function playGame(playerInput){

  clearMessages();

  const randomNumber = Math.floor(Math.random() * 3 + 1); // zmienna  liczby losowej
  const argMoveId = randomNumber;

  const getMoveName = function() { //funkcja nazwy ruchu
    if(argMoveId == 1){
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'nożyce';
    } else if (argMoveId == 3) {
      return 'papier';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }
  console.log('Wylosowana liczba to: ' + randomNumber);

  const argComputerMove = getMoveName(argMoveId);  //ruch komputera-zmienna
    console.log('Ruch komputera: ' + argComputerMove);
    printMessage('Ruch komputera: ' + argComputerMove);

  const playerChoose = function() {
    if (playerInput == 1) {
      return 'kamień';
    } else if (playerInput == 2) {
      return 'nożyce';
    } else if (playerInput == 3) {
      return 'papier';
    }
  }

  const argPlayerMove = playerChoose(playerInput); //ruch gracza-zmienna
    console.log('Gracz wpisał: ' + playerInput);
    console.log('Ruch gracza: ' + argPlayerMove);
    printMessage('Twój ruch to: ' + argPlayerMove);

  const displayResult = function() {  //funkcja wyświetlania wyniku
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier' )
    {return('Ty wygrywasz!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce')
    {return('Tym razem przegrywasz:(');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień')
    {return('Remis');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
    {return('Ty wygrywasz');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce')
    {return('Remis');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier')
    {return('Tym razem przegrywasz:(');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień')
    {return('Tym razem przegrywasz:(');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce')
    {return('Ty wygrywasz');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'papier')
    {return('Remis');}
  }
  console.log('Ruch komputer to ' + argComputerMove + ' ,a ruch gracza to ' + argPlayerMove);
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  printMessage(displayResult(argComputerMove, argPlayerMove));
}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(2);
});

document.getElementById('play-paper').addEventListener('click', function(){
  playGame(3);
});
}
/* let win, lose =  document.getElementById('score').innerHTML = '';

if (result === 'win'){
  playerScore += 1;
} else if (result === 'lose')
  computerScore +=1;
*/
