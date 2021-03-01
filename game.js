import { commonWords } from "./constants";
console.log(commonWords);
function makeRandomWord() {
  const filteredWords = commonWords.filter((word) => word.length >= 3);
  // filteredWords [0]
  const randomIndex = Math.floor(Math.random() * filteredWords.length);
  const randomWord = filteredWords[randomIndex];
  return randomWord;
}
const randomWord = makeRandomWord();
// make dashes from a random word

const dashContainer = document.querySelector("#dashes");
const btnContainer = document.querySelector("#btns");
const guesses = [];
console.log(randomWord);

function makeDashes(word, guesses) {
  const wordArry = word.split("").map((letter) => {
    const showLetter = guesses.includes(letter);
    const letterOrNot = showLetter ? letter : "";
    // console.log(letter);
    return `<div class="dash">${letterOrNot}</div>`;
  });
  const dashString = wordArry.join("");
  dashContainer.innerHTML = dashString;
}
makeDashes(randomWord, guesses);

function makeButtons() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const btnString = alphabet
    .split("")
    .map((letter) => `<button>${letter}</button>`)
    .join("");
  btnContainer.innerHTML = btnString;
  // let btnString = "";
  // for (let i = 0; 1 < alphabet.length; i++) {
  //   btnString += `<button>${alphabet.charAt(i)}</button>`;
  // }
}
makeDashes(randomWord, guesses);

makeButtons();

let lives = 8;
document.querySelector("#countDown").innerHTML = lives;

function handleUserGuess(e) {
  const currButton = e.target;
  const letter = currButton.innerHTML;
  const letterIsInWord = randomWord.includes(letter);
  guesses.push(letter);
  if (letterIsInWord) {
    console.log("letter in word");
    makeDashes(randomWord, guesses);
  } else {
    lives--;
    console.log(lives);
    document.querySelector("#countDown").innerHTML = lives;
  }

  if (lives == 0) {
    alert("GAMEOVER LOSER!");
  }
  //console.log(letter)

  //is my letter in the random word?

  //if it is....update the dashes...update
  //otherwise - decrease life
}

btnContainer.addEventListener("click", handleUserGuess);

// //choose a random word of 4 or more letters
// const fourOrMore = commonWords.filter(function (item) {
//   return item.length >= 4;
// });
//allow the user one guess at a time

// create buttons for the letters -

//filter the constants with >=3 words -

// get the random word to guess -
// const btn = document.querySelector("#buttons");
// btn.addEventListener("click", handleBtnClick);
// // const btns = "abcdefghijklmnopqrstuvwxyz";
// const randomword = commonWords[0];
// console.log(randomword);
// const numTimes = randomword.length;
// console.log(numTimes);
// let newString = "";

// for (let i = 0; i < 8; i++) {
//   newString = newString = +"-";
// }

// function dash(str) {
//   let hiddenWord = "";
//   for (let i = 0; i < str.length; i++) {
//     hiddenWord += " _ ";
//   }
//   return hiddenWord;
// }
//get the length of the word and show the letters in dashes

//show how many guesses - 8 guesses -

// Make buttons
// function makeButtons() {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   const alphaArray = alphabet.split("");
//   const htmlList = alphaArray
//     .map(function (letter) {
//       return `<button>${letter}</button>`;
//     })
//     .join("");
//   // btnContainer.innerHTML = htmlList
//   return htmlList;
// }

// const htmlString = makeButtons();
// console.log(makeButtons());
// btnContainer.innerHTML = htmlString;

// btnContainer.addEventListener("click");

// //user to click letter button to guess and get that value
// //if the guess letter includes the guess word, show it
// // if incorrect decrease life and disable button
// let lifeCountdown = loseLife;
// let Countdown = 8;
// const tracker = document.querySelector("#count");
// tracker.innerHTML = countDown;
// function loseLife(num) {
//   if (clickCount) {
//     countDown = countDown;
//   } else {
//     countdown--;
//     console.log(lifeCountdown);
//   }
// }
// // if number guess = 0 then alert LOSER
// // if not 0 can guess again

// //have it click 8 times and disable it

// //how do i get user input

let clickCount = 0;
function handleBtnClick(e) {
  let clickLetter = e.target.textContent;
  console.log(e.target.textContent);
  console.log(btn);
  //   if (clickCount >= 8) {
  btn.setAttribute("disabled", true);
  return;
}

// const btn = document.querySelector('#btn')
// let clickCount = 0
// function handleBtnClick(e){
// if (clickCount < 8) {
//     console.log('click')
//     // return
// }
//     clickCount++
// }

// btn.addEventListener('click', handleBtnClick)ß
