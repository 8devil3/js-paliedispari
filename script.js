/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */


let userWord = prompt('Type a word').toLowerCase().replaceAll(' ', '');
const arrWordCheck = [];
let palindrome;


if (checkPalindrome(userWord)) {
    console.log('This is a palindrome.');
} else {
    console.log('Not a palindrome.');
}



function checkPalindrome(word) {
    
    for (let i = word.length - 1; i >= 0; i--) {
        arrWordCheck.push(word[i])
    }
    
    palindrome = arrWordCheck.toString().replaceAll(',', '');
    
    if (palindrome != word) {
        return false;
    } else {
        return true;
    }

}



