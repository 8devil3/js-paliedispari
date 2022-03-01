/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */


// let userWord = prompt('Type a word').toLowerCase().replaceAll(' ', '');
// const arrWordCheck = [];
// let palindrome;


// if (checkPalindrome(userWord)) {
//     console.log('This is a palindrome.');
// } else {
//     console.log('Not a palindrome.');
// }



// function checkPalindrome(word) {
    
//     for (let i = word.length - 1; i >= 0; i--) {
//         arrWordCheck.push(word[i])
//     }
    
//     palindrome = arrWordCheck.toString().replaceAll(',', '');
    
//     if (palindrome != word) {
//         return false;
//     } else {
//         return true;
//     }

// }



/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */


//const oddEvenChoosen = 'pari';
const numberChoosen = '2';


if (!checkOddEven(numberChoosen)) {
    console.log('CPU WIN!');
} else {
    console.log('You WIN!');
}


function rndmDigit() {
    return Math.floor(Math.random() * 5) + 1;;
}

function checkOddEven(num) {
    
    if ((num + rndmDigit()) % 2 != 0) {
        return false;
    } else {
        return true;
    }
}

