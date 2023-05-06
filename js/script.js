function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
}


let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let argComputerMove = getMoveName(randomNumber);
printMessage('Mój ruch to: ' + argComputerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);
let argPlayerMove = getMoveName(playerInput);
printMessage('Twój ruch to: ' + argPlayerMove);


console.log('moves:', argComputerMove, argPlayerMove);

function displayResult(argComputerMove, argPlayerMove){
if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
  printMessage('Ty wygrywasz!');
} else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
  printMessage('Przegrywasz!');
} else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
  printMessage('Remis!');
} else if (argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
  printMessage('Wykonałeś błędny ruch!');
} else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
  printMessage('Przegrywasz!');
} else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
  printMessage('Remis!');
} else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
} else if (argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
  printMessage('Wykonałeś błędny ruch!');
} else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
} else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
  printMessage('Przegrywasz!');
} else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
  printMessage('Remis!');
} else if (argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
  printMessage('Wykonałeś błędny ruch!');
}
}

let result = displayResult(argComputerMove, argPlayerMove);
