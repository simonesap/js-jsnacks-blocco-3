// Snack3
// Il software deve chiedere per 5 volte all’utente di inserire un numero. 
// Il programma stampa la somma di tutti i numeri inseriti.

let x = 0;
let somma = 0;

while (x < 5) {
    let numero = parseInt(prompt('Inserisci un numero'));
    console.log(numero);
    somma += numero;
    x++
}

console.log(somma);