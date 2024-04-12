"use strict";

const checkButton = document.getElementById("check-btn");
const closeButton = document.getElementById("btn-close");
const textInput = document.getElementById("text-input");
const palindromeForm = document.getElementById("palindrome-form");
const resultPara = document.getElementById("result");

let potentialPalindrome;

const setPalindromeValue = () => {
    potentialPalindrome = textInput.value;
}

const isEmpty = (e) => {
    e.preventDefault();
    resultPara.classList.remove('visible');
    if(!textInput.value) {
        alert("Please provide a string to check.")
        return;
    } else {
        setPalindromeValue();
        checkIfPalindrome(potentialPalindrome);
        palindromeForm.reset();
    }
}

const checkIfPalindrome = (potentialPalindrome) => {
    const cleanedPotentialPalindrome = potentialPalindrome.replace(/[^A-Za-z0-9]/g, '');
    if(cleanedPotentialPalindrome.toLowerCase() === cleanedPotentialPalindrome.split('').reverse().join('').toLowerCase()) {
        resultPara.classList.remove('hide');
        resultPara.classList.add('visible');
        resultPara.textContent = `${potentialPalindrome} is a palindrome!`;
    } else {
        resultPara.classList.remove('hide');
        resultPara.classList.add('visible');
        resultPara.textContent = `${potentialPalindrome} is not a palindrome. Womp womp.`;
        
    }
    setTimeout(() => {
        resultPara.classList.remove('visible');
        resultPara.classList.add('hide');
      }, 5000);
}

function removeDefinition() {
    this.parentNode.remove();
}


checkButton.addEventListener("click", isEmpty);
closeButton.addEventListener("click", removeDefinition);