/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */


let word = prompt('Type a word');
const arrWordCheck = [];
let palindrome;


for (let i = word.length - 1; i >= 0; i--) {
    arrWordCheck.push(word[i])
}

palindrome = arrWordCheck.toString().replaceAll(',', '');

if (palindrome != word) {
    console.log('Not a palindrome.')
} else {
    console.log('This is a palindrome.')
}
