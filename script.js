const cross = 'X';
const zero = 'O';
const playerX = [];
const playerO = [];
const winCombinations = [
  [1, 2, 3],
  [1, 4, 7],
  [1, 5, 9],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7],
  [4, 5, 6],
  [7, 8, 9],
];
const info = document.getElementById('info');
info.textContent = `Turn after player ${cross}`;
const contener = document.getElementById('contener');
const ceils = document.getElementsByClassName('ceil');
let countClick = 0;
contener.addEventListener('click', (event) => {
  event.preventDefault();
  for (let i = 0; i < ceils.length; i++) {
    if (event.target === ceils[i] && ceils[i].firstChild === null) {
      ++countClick;
      if (countClick % 2 === 1) {
        ceils[i].textContent = cross;
        info.textContent = `Turn after player ${zero}`;
        playerX.push(+ceils[i].dataset.ceil);
      } if (countClick % 2 === 0) {
        ceils[i].textContent = zero;
        info.textContent = `Turn after player ${cross}`;
        playerO.push(+ceils[i].dataset.ceil);
      }
    }
    // for(let k = 0; k < winCombinations.length; k++){
    //   if(countClick > 3){
    //    winCombinations[k].push(0);
    //   }
    // }
    // console.log(winCombinations[1],winCombinations[8]);
    for (let i = 0; i < winCombinations.length; i++) {
        if (playerX.includes(winCombinations[i][0]) && playerX.includes(winCombinations[i][1]) && playerX.includes(winCombinations[i][2])){
           info.textContent = `WINNER PLAYER ${cross}!`;
            for (let j = 0;j < 9; j++) {
            ceils[j].textContent = cross;
           } 
        } else if (playerO.includes(winCombinations[i][0]) && playerO.includes(winCombinations[i][1]) && playerO.includes(winCombinations[i][2])){
        info.textContent = `WINNER PLAYER ${zero}!`;
        for(let j = 0;j < 9; j++){
          ceils[j].textContent = zero;
         }
        } else if (!(playerX.includes(winCombinations[i][0]) && playerX.includes(winCombinations[i][1]) && playerX.includes(winCombinations[i][2])) && (!(playerO.includes(winCombinations[i][0]) && playerO.includes(winCombinations[i][1]) && playerO.includes(winCombinations[i][2]))) && countClick === 9){
        info.textContent = `DRAWN GAME!`;
      }
    }
  }
});
