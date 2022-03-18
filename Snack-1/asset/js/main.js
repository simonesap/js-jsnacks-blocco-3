// Eseguite questi programmi con il ciclo while
// Snack1
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
// Continua a chiedere i numeri all’utente e a inserirli nell’array 
// Fino a quando la somma degli elementi è minore di 50.

// let arrayVuoto = [];

// let numero = prompt('Inserisci un numero: ');
// console.log(numero);
// arrayVuoto.push(numero);

// let somma = 50;

// let i = 0;

// while (i < somma); {
//     let numeroNew = parseInt(prompt('Inserisci un numero: '));
//     arrayVuoto.push(numeroNew);
//         i++;
// }





// let i = 0;

// do {
//     let numeroUtente = prompt('Scrivi un numero');
//     console.log(numeroUtente);
//     i++;
// } while (numeroUtente < 50) {
//     document.getElementById('num').innerHTML = `${numeroUtente}`;
// }

// BANCOMAT

let arrayVuoto = [];

let somma = 50;

let i = 0;

let numeroRichiesto = parseInt(prompt('Quanto desidera prelevare?'));

let sommaTotale =  parseInt(somma - numeroRichiesto)
console.log(sommaTotale);
    
    arrayVuoto.push(numeroRichiesto);
    i++;
while (numeroRichiesto < 50 && somma < 50) {
    let nuovoNum = parseInt(prompt('Quanto ancora desidera prelevare?'));
    nuovoNumTotale = sommaTotale - nuovoNum;
    arrayVuoto.push(nuovoNumTotale);
    console.log(arrayVuoto);
}

document.getElementById('numero').innerHTML = `"STOP!! Hai superato il limite di prelievo giornaliero (50)." ${arrayVuoto}`;

