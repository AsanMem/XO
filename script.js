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
const contener = document.getElementById('contener');
const ceils = document.getElementsByClassName('ceil');
let countClick = 0;
contener.addEventListener('click', (event) => {
  event.preventDefault();
  for (let i = 0; i < ceils.length; i++) {
    if (event.target === ceils[i]) {
      ++countClick;
      if (countClick % 2 === 1) {
        ceils[i].textContent = cross;
        playerX.push(+ceils[i].dataset.ceil);
      } if (countClick % 2 === 0) {
        ceils[i].textContent = zero;
        playerO.push(+ceils[i].dataset.ceil);
      }
    }
    for (let i = 0; i < winCombinations.length; i++) {
      if(String(playerX.sort()) === String(winCombinations[i].sort())){
        console.log('win x');
      } if (String(playerO.sort()) === String(winCombinations[i].sort())){
        console.log('win 0');
      }
    }
  }
});
console.log(ceils[2]);
console.log(playerX);

