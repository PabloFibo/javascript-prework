let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}

else if (randomNumber == 2) {
  computerMove = "nożyce"
}

else if (randomNumber == 3) {
  computerMove = "papier"
}
printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}

else if (playerInput == '2') {
  playerMove = 'papier'
}

else if (playerInput == '3') {
  playerMove = 'nożyce'
}

printMessage('Twój ruch to: ' + playerMove);

if (computerMove == 'kamień' && playerMove == 'papier') {
  printMessage ('Ty wygrywasz')
}

else if (computerMove == 'kamień' && playerMove == 'nożyce') {
  printMessage ('Przegrałeś, wygrywa komputer')
}

else if (computerMove == 'kamień' && playerMove == 'kamień') {
  printMessage ('Remis, nikt nie wygrywa')
}

else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
  printMessage ('Remis, nikt nie wygrywa')
}

else if (computerMove == 'nożyce' && playerMove == 'kamień') {
  printMessage ('Ty wygrywasz')
}

else if (computerMove == 'nożyce' && playerMove == 'papier') {
  printMessage ('Przegrałeś, wygrywa komputer')
}

else if (computerMove == 'papier' && playerMove == 'nożyce') {
  printMessage ('Ty wygrywasz')
}

else if (computerMove == 'papier' && playerMove == 'papier') {
  printMessage ('Remis, nikt nie wygrywa')
}

else if (computerMove == 'papier' && playerMove == 'kamień') {
  printMessage ('Przegrałeś, wygrywa komputer')
}

else if (computerMove == 'papier' && playerMove == 'nieznany ruch') {
  printMessage ('Podano nieprawidłową wartość, spróbuj ponownie')
}

else if (computerMove == 'kamień' && playerMove == 'nieznany ruch') {
  printMessage ('Podano nieprawidłową wartość, spróbuj ponownie')
}

else if (computerMove == 'nożyce' && playerMove == 'nieznany ruch') {
  printMessage ('Podano nieprawidłową wartość, spróbuj ponownie')
}
