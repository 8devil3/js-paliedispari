/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

const btnCheck = document.querySelector('#sn1-btn');
const input1 = document.querySelector('#sn1-input');
const msgHTML1 = document.querySelector("#sn1-msg");



btnCheck.addEventListener('click', checkFinal);



function checkFinal() {
    msgHTML1.classList.remove('true', 'false');


    if (input1.value == '') { // controllo se i campi sono vuoti
        msgHTML1.innerHTML = "Digita almeno una parola!";
        msgHTML1.classList.add("false");
    } else {

        if (checkPalindrome(input1.value.toLowerCase().replaceAll(' ', ''))) {
            msgHTML1.innerHTML = 'Questo è un palindromo';
            msgHTML1.classList.add('true');
        } else {
            msgHTML1.innerHTML = 'Questo non è un palindromo';
            msgHTML1.classList.add('false');
        
        }
    }

}





function checkPalindrome(word) {
    const arrWordCheck = [];
    
    for (let i = word.length - 1; i >= 0; i--) {
        arrWordCheck.push(word[i])
    }
    
    let palindrome = arrWordCheck.toString().replaceAll(',', '');
    
    if (palindrome != word) {
        return false;
    } else {
        return true;
    }

}



/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */


//const oddEvenChoosen = 'pari';
// const numberChoosen = '2';


// if (!checkOddEven(numberChoosen)) {
//     console.log('CPU WIN!');
// } else {
//     console.log('You WIN!');
// }


// function rndmDigit() {
//     return Math.floor(Math.random() * 5) + 1;;
// }

// function checkOddEven(num) {
    
//     if ((num + rndmDigit()) % 2 != 0) {
//         return false;
//     } else {
//         return true;
//     }
// }

