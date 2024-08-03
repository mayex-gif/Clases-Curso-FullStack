

//Variables

var nombre = 'Juan'; //Cadena de caracteres => string de caracteres
let edad = 28; //Número => number
let apellido = 'Alcalde'; //Cadena de caracteres => string de caracteres
const DNI = 23456789; //Número => number
let falso = false; //Booleano => boolean
let verdadero = true; //Booleano => boolean


console.log('Mi nombre es ' + nombre + ' y tengo ' + edad + ' años.');
console.log('Mi nombre es ${nombre} y tengo ${edad} años.');

let uno = 500;
uno++;
console.log(uno);
uno--;
console.log(uno);

let acumulador = 0;

console.log(acumulador);

acumulador += 500;
console.log(acumulador);

console.log('===================================================');

nombre = prompt('Ingrese su nombre');
edad = prompt('Ingrese su edad');
console.log('Mi nombre es ' + nombre + ' y tengo ' + edad + ' años.');
alert('Mi nombre es ' + nombre + ' y tengo ' + edad + ' años.');