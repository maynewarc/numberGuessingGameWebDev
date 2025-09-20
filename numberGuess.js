const minNum = 1;
const maxNum = 100;
let randomNum = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
let myTries = 0;

const mySubmit = document.getElementById("mySubmit");
const resetBtn = document.getElementById("resetBtn");

mySubmit.onclick = function() {
    let myGuess = document.getElementById("myGuess").value;
    myGuess = Number(myGuess);

    if(isNaN(myGuess)) {
        window.alert("Please enter a valid number!");
    }
    else if(myGuess < minNum || myGuess > maxNum) {
        window.alert(`Please enter a number from ${minNum} to ${maxNum}`);
    }
    else {
        myTries++;
        if(myGuess < randomNum) {
            document.getElementById("myPar").textContent = "Hint:";
            document.getElementById("hint").textContent = "Your guess is too low! Try again!";
        }
        else if(myGuess > randomNum) {
            document.getElementById("myPar").textContent = "Hint:"
            document.getElementById("hint").textContent = "Your guess is too high! Try again!";
        }
        else {
            document.getElementById("myPar").textContent = "✓";
            setTimeout(() => {
               document.getElementById("hint").textContent = 
                 `YOU GUESSED RIGHT! It took you ${myTries} tries to guess the number ${randomNum}!`;
            }, 100);
        }
    }
};

resetBtn.onclick = function() {
    randomNum = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
    myTries = 0;
    document.getElementById("myGuess").value = "";
    document.getElementById("hint").textContent = "";
    document.getElementById("myPar").textContent = "";
};