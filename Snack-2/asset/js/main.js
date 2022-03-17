// Snack2
// Fai inserire un numero, che chiameremo N, all’utente. 
// Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. 
// Ogni volta che ne crei uno, stampalo.

// // let n = prompt('Inserisci un numero: ');

// // let i = 0;

// // while(i < 10) {
// //     let random = Math.floor(Math.random())
// // }

do {
    var numeroRichiesto = prompt('Scrivi un numero');
} while (numeroRichiesto < 50);
console.log(numeroRichiesto)
document.getElementById('numero').innerHTML = `${numeroRichiesto}`;