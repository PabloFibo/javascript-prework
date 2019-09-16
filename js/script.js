function playGame(playerInput){

  clearMessages();

  let randomNumber = Math.floor(Math.random() * 3 + 1);  // zmienna  liczby losowej
  console.log('Wylosowana liczba to: ' + randomNumber);

  let argComputerMove = getMoveName(randomNumber);  //ruch komputera-zmienna
  console.log('Ruch komputera: ' + argComputerMove);

  // let argMoveId = randomNumber;

  function getMoveName(argMoveId) { //funkcja nazwy ruchu
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

  printMessage('Ruch komputera: ' + argComputerMove);

/*  let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

  let argPlayerMove = getMoveName(playerInput); //ruch gracza-zmienna
  console.log('Gracz wpisał: ' + playerInput);
  printMessage('Twój ruch to: ' + argPlayerMove);

  function displayResult(argComputerMove, argPlayerMove){  //funkcja wyświetlania wyniku
    console.log('Ruch komputer to ' + argComputerMove + ' ,a ruch gracza to ' + argPlayerMove);
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier' ){printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {printMessage('Tym razem przegrywasz:(');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {printMessage('Remis');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {printMessage('Ty wygrywasz');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {printMessage('Remis');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {printMessage('Tym razem przegrywasz:(');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {printMessage('Tym razem przegrywasz:(');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {printMessage('Ty wygrywasz');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {printMessage('Remis');}
  }

  displayResult(argComputerMove, argPlayerMove);
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
