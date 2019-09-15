let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

console.log('Ruch komputera: ' + argComputerMove);

let argMoveId = randomNumber;

function getMoveName(argMoveId) {
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

printMessage('Mój ruch to: ' + argComputerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

console.log('Ruch gracza: ' + argPlayerMove);

printMessage('Twój ruch to: ' + argPlayerMove);

function displayResult(argComputerMove, argPlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  if(argComputerMove == 'kamień' && argPlayerMove == 'papier' ){printMessage('Ty wygrywasz!');
  }else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){printMessage('Tym razem przegrywasz:(');
  }else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień'){printMessage('Remis');
  }else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {printMessage('Ty wygrywasz');
  }else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {printMessage('Remis');
  }else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {printMessage('Tym razem przegrywasz:(');
  }else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {printMessage('Tym razem przegrywasz:(');
  }else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {printMessage('Ty wygrywasz');
  }else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {printMessage('Remis');}
}

let endResult = displayResult(argComputerMove, argPlayerMove);

console.log('Ruch komputer to ' + argComputerMove + ' ,a ruch gracza to ' + argPlayerMove);
