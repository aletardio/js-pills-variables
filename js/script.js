// // ESERCIZIO 1
// let number = 100;
// console.log(number);


// // ESERCIZIO 2
// const PI = 3.14;
// console.log(PI);

// // ESERCIZIO 2/B 
// // PI = 3.1416;
// // console.log(PI); 

// // ESERCIZIO 2/C
// let radius = 8;
// let circle = radius * 2 * PI;
// console.log(circle)

// // ESERCIZIO 3
// let name = "Carlo";
// name = "Marco";
// console.log(name);

// // ESERCIZIO 4 
// let greet = "Ciao, Mondo!";
// console.log(greet);

// // ESERCIZIO 4/B
// // let greet = "Come stai, Mondo?";
// // console.log(greet);

// // ESERCIZIO 4/C
// // greet = greet + " Come stai?"
// greet = `${greet} Come stai`

// console.log(greet);


// // ESERCIZIO 1
// let num1 = 10;
// let num2 = 20;

// // let comparison;

// if (num1 > num2) {
//     comparison = num1
// }
// else{
//     comparison = num2
// }

// console.log(comparison);

// // ESERCIZIO 2

// let name1 = 'Ciro';
// let name2 = 'Ciro';

// // let comparison;

// if (name1 == name2) {
//     comparison = "le stringhe sono uguali";
// }
// else {
//     comparison = "le stringhe sono diverse";
// }

// console.log(comparison);

// // ESERCIZIO 3

// let num = 10;
// let comparison;

// if (num == '10') {
//     comparison = true
// }
// else {
//     comparison = false
// }

// console.log(comparison);


// // ESERCIZIO 1/A 
// for(let i=1; i<=42; i++){
//     console.log(i);
// }

// // ESERCIZIO 1/B
// for(let i=42; i>=1; i--){
//     console.log(i)
// }

// // ESERCIZIO 1/A

// const numbers = [1,2,3,4,5,6,7,8];

// console.log(numbers);


// // ESERCIZIO 1/B 

// const fruits = ['mela', 'banana', 'pesca', 'pera', 'albicocca', 'mango',
// 'kiwi', 'papaya'];

// // ESERCIZIO 1/C

// console.log(fruits.length);

// // ESERCIZIO 2/A 

// const numOfElements = parseInt(prompt('Inserisci un numero intero'));

// let numbers = [];

// for(let i = 1; i <= numOfElements; i++1){
//     numbers.push(i);
// }

// console.log(numbers);
// console.log(numbers.length);

// // ESERCIZIO 2/B
// const numOfElements = parseInt(prompt('Inserisci un numero intero'));
// let numbers = [];
// let sum = 0;

// for(let i = 1; i <= numOfElements; i++){
//     numbers.push(i);
// }

// for(let i = 1; i < numOfElements; i++){
//     sum += numbers[i];
// }

// console.log(sum);


// // ESERCIZIO 2/C
// const numOfElements = prompt('Inserisci un numero intero');
// let numbers = [];

// for(let i = 1; i <= numOfElements; i++) {
//     numbers.push(parseInt(Math.random() * 10) + 1);

// }

// console.log(numbers);

// let maggiore = 1;

// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] > maggiore) {
//         maggiore = numbers[i];
//     }
// }

// console.log(maggiore);

// SNACK 1 

// let number_1 = parseInt(prompt('Inserisci il primo numero'));
// let number_2 = parseInt(prompt('Inserisci il secondo numero'));

// if(number_1 > number_2) {
//     console.log('Il numero maggiore è: ' +number_1);
// }
// else if (number_1 == number_2) {
//     console.log('I numeri sono uguali: ' +(number_1, number_2));
// }
// else {
//     console.log('Il numero maggiore è: ' +number_2);
// }


// SNACK 2

// let sum = 0;

// for(let i = 1; i <= 10; i++) {
//     let num = parseInt(prompt('Inserisci il numero'));

//     sum += num;
// }

// console.log(sum);

// SNACK 3

// let names = ['Arnaldo', 'Giovanni', 'Andrea', 
// 'Giorgia', 'Arianna', 'Martina', 'Francesca', 
// 'Letizia', 'Giulio', 'Alessandro'];

// let user = prompt('Inserisci il tuo nome');

// let isValid = false; 

// for(let i = 0; i < names.length; i++) {
//     // .toLowerCase permette di inserire nomi anche con lettere minuscole
//     if (names[i].toLowerCase() == user.toLowerCase()) {
//         isValid = true;
//     }
// }

// if(isValid == true) {
//     console.log('Ciao ' + user + ', puoi partecipare alla festa.');
// }
// else {
//     console.log('Ciao ' + user + ', purtroppo non puoi partecipare alla festa.');
// }

// SNACK 4

let numbers = [];

for(let i = 0; i <= 6; i++) {
    let num = parseInt(prompt('Inserisci il numero'));

    if(num % 2 != 0){
        numbers.push(num);
        console.log(numbers);
    }
    else {
        console.log('Il numero inserito è pari, quindi non può essere inserito');
    }
}
