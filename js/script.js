{
  let playerScore = 0;
  let computerScore = 0;

const playGame = function (playerInput){
  clearMessages();

  const getMoveName = function (argMoveId){
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
  
  console.log('Gracz wpisał: ' + playerInput);
  const argPlayerMove = getMoveName(playerInput);
  console.log('Gracz wybrał ruch: '+ argPlayerMove);


const getComputerResult = function (argResultId){
  if(argResultId == 1){
    return 'computer win';
  } else {
    return 'computer lose'
  }
}

const getComputerMove = function (argComputerResult, argPlayerMove){
  if (argComputerResult == 'computer win' && argPlayerMove == 'kamień'){
    return 'papier';
  } else if (argComputerResult == 'computer win' && argPlayerMove == 'papier'){
    return 'nożyce';
  } else if (argComputerResult == 'computer win' && argPlayerMove == 'nożyce'){
    return 'kamień';
  } else if (argComputerResult == 'computer lose' && argPlayerMove == 'kamień'){
    return 'nożyce';
  } else if (argComputerResult == 'computer lose' && argPlayerMove == 'papier'){
    return 'kamień';
  } else if (argComputerResult == 'computer lose' && argPlayerMove == 'nożyce'){
    return 'papier';
  }
}

const randomNumber = Math.floor(Math.random() * 4 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
const argComputerResult = getComputerResult(randomNumber);
console.log('Komputer wylosował wynik: '+ argComputerResult);
const argComputerMove = getComputerMove(argComputerResult, argPlayerMove);
console.log('Komputer wybrał ruch: '+ argComputerMove);


printMessage('Mój ruch to: ' + argComputerMove);
printMessage('Twój ruch to: ' + argPlayerMove);
console.log('moves:', argComputerMove, argPlayerMove);



const displayResult = function (argComputerMove, argPlayerMove){
if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
  printMessage('Ty wygrywasz!');
  playerScore = playerScore + 1;
} else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
  printMessage('Przegrywasz!');
  computerScore = computerScore +1;
} else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
  printMessage('Remis!');
} else if (argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
  printMessage('Wykonałeś błędny ruch!');
} else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
  printMessage('Przegrywasz!');
  computerScore = computerScore +1;
} else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
  printMessage('Remis!');
} else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
  playerScore = playerScore + 1;
} else if (argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
  printMessage('Wykonałeś błędny ruch!');
} else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
  playerScore = playerScore + 1;
} else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
  printMessage('Przegrywasz!');
  computerScore = computerScore +1;
} else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
  printMessage('Remis!');
} else if (argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
  printMessage('Wykonałeś błędny ruch!');
}
}

const result = displayResult(argComputerMove, argPlayerMove);

printMessage('Wynik')
printMessage(playerScore + ':' + computerScore)
}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});

}
