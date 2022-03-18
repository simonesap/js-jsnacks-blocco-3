// Snack2
// Fai inserire un numero, che chiameremo N, all’utente. 
// Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. 
// Ogni volta che ne crei uno, stampalo.

// // let n = prompt('Inserisci un numero: ');

// // let i = 0;

// // while(i < 10) {
// //     let random = Math.floor(Math.random())
// // }

let i = 0;

do {
    let n = prompt('Scrivi un numero');
    console.log(n)
    let arrayVuoto = [];
    let numRandom = Math.floor(Math.random()*100);
    arrayVuoto.push(numRandom) * 10;
    console.log(arrayVuoto) * 10;
    i++;
} while (i < 10);

document.getElementById('numero').innerHTML = `${arrayVuoto}`;