/* Palidroma
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma */

const btnCheck = document.querySelector('#sn1-btn');
const input1 = document.querySelector('#sn1-input');
const msgHTML1 = document.querySelector("#sn1-msg");



btnCheck.addEventListener('click', checkFinal);

function checkFinal() { // check campi vuoti e output
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


function checkPalindrome(word) { // funzione di controllo dei palindromi, arg = string
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

const btnPlay = document.querySelector('#sn2-btn');
const input2chooseNum = document.querySelector('#sn2-input');
const input2oddEven = document.querySelector('#sn2-select');
const msgHTML2 = document.querySelector("#sn2-msg");

const msgHTMLscore = document.querySelector("#score");



btnPlay.addEventListener('click', checkPlay);

function checkPlay() { //check campi vuoti o errati e output

    msgHTML2.classList.remove('true', 'false');
    msgHTMLscore.innerHTML = '';

    if (input2chooseNum.value == '') { // controllo se i campi sono vuoti
        msgHTML2.innerHTML = "Digita un numero!";
        msgHTML2.classList.add("false");
    } else if (parseInt(input2chooseNum.value) > 5 || parseInt(input2chooseNum.value) <= 0) {
        msgHTML2.innerHTML = "Il numero deve essere compreso tra 1 e 5!";
        msgHTML2.classList.add("false");
    } else {

        if (checkOddEven(parseInt(input2chooseNum.value)) == input2oddEven.value) {
            msgHTML2.classList.add('true');
            msgHTML2.innerHTML = 'Hai vinto!';

            msgHTMLscore.innerHTML = 'La somma dei due numeri è: ' + sum;
            
        } else {
            msgHTML2.classList.add('false');
            msgHTML2.innerHTML = 'Hai perso!';

            msgHTMLscore.innerHTML = 'La somma dei due numeri è: ' + sum;
        }
    }
}

function rndmDigit() {  // generatore numeri casuali da 1 a 5
    return Math.floor(Math.random() * 5) + 1;
}


function checkOddEven(num) { // controllo la somma dell'input e del numero casuale se è pari o dispari, arg = int

    sum = num + rndmDigit(); // dichiaro la variabile "nuda" per recuperare il valore anche al di fuori della funzione
    
    if (sum % 2 != 0) {
        return 'odd';
    } else {
        return 'even';
    }
}















// reset inputs e ricarica della pagina
const btnReload = document.querySelector("#reload");
const arrInputs = document.querySelectorAll('input');

btnReload.addEventListener('click', function() {
    for (x = 0; x < arrInputs.length ; x++) { // reset dei campi
        arrInputs[x].value ='';
    }
    location.reload(); // ricarico la pagina
})