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


// When the #text-input element only contains the letter A and the #check-btn element is clicked, the #result element should contain the text "A is a palindrome"
// When the #text-input element contains the text eye and the #check-btn element is clicked, the #result element should contain the text "eye is a palindrome"
// (exclude underscores) When the #text-input element contains the text _eye and the #check-btn element is clicked, the #result element should contain the text "_eye is a palindrome"
// When the #text-input element contains the text race car and the #check-btn element is clicked, the #result element should contain the text "race car is a palindrome"
// When the #text-input element contains the text not a palindrome and the #check-btn element is clicked, the #result element should contain the text "not a palindrome is not a palindrome"
// When the #test-input element contains the text A man, a plan, a canal. Panama and the #check-btn element is clicked, the #result element should contain the text "A man, a plan, a canal. Panama is a palindrome"
// When the #text-input element contains the text never odd or even and the #check-btn element is clicked, the #result element should contain the text "never odd or even is a palindrome"
// When the #text-input element contains the text nope and the #check-btn element is clicked, the #result element should contain the text "nope is not a palindrome"
// When the #text-input element contains the text almostomla and the #check-btn element is clicked, the #result element should contain the text "almostomla is not a palindrome"
// When the #text-input element contains the text My age is 0, 0 si ega ym. and the #check-btn element is clicked, the #result element should contain the text "My age is 0, 0 si ega ym. is a palindrome"
// When the #text-input element contains the text 1 eye for of 1 eye. and the #check-btn element is clicked, the #result element should contain the text "1 eye for of 1 eye. is not a palindrome"
// When the #text-input element contains the text 0_0 (: /-\ :) 0-0 and the #check-btn element is clicked, the #result element should contain the text "0_0 (: /-\ :) 0-0 is a palindrome"
// When the #text-input element contains the text five|\_/|four and the #check-btn element is clicked, the #result element should contain the text "five|\_/|four is not a palindrome"

const checkIfPalindrome = (potentialPalindrome) => {
    const cleanedPotentialPalindrome = potentialPalindrome.replace(/[^A-Za-z0-9]/g, '');
    console.log(cleanedPotentialPalindrome)
    if(cleanedPotentialPalindrome.toLowerCase() === cleanedPotentialPalindrome.split('').reverse().join('').toLowerCase()) {
        resultPara.classList.remove('hide');
        resultPara.textContent = `${potentialPalindrome} is a palindrome!`;
    } else {
        resultPara.classList.remove('hide');
        resultPara.textContent = `${potentialPalindrome} is not a palindrome. Womp womp.`;
    }
}


checkButton.addEventListener("click", isEmpty);