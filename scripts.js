"use strict";

const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const palindromeForm = document.getElementById("palindrome-form");
const resultPara = document.getElementById("result");

let potentialPalindrome;

const setPalindromeValue = () => {
    potentialPalindrome = textInput.value;
}

const isEmpty = (e) => {
    e.preventDefault();
    resultPara.classList.add('hide');
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
    if(potentialPalindrome === potentialPalindrome.split('').reverse().join('')) {
        resultPara.classList.remove('hide');
        resultPara.textContent = `${potentialPalindrome} is a palindrome!`;
    } else {
        resultPara.classList.remove('hide');
        resultPara.textContent = `${potentialPalindrome} is not a palindrome. Womp womp.`;
    }
}


checkButton.addEventListener("click", isEmpty);