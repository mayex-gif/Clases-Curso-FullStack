var nombre = "Alejo";
var segundonombre = "Emanuel";
var apellido = "Alcalde";
let edad = 21;
const DNI = 32456789;

console.log(nombre, segundonombre, apellido, edad, DNI);

/*
console.log('Mi nombre es ' + nombre + ' ' + segundonombre + ' ' + apellido + ' y tengo ' + edad + ' años.');
console.log('Mi nombre es ' + nombre + ' ' + segundonombre + ' ' + apellido + ' y tengo ' + edad + ' años.');
console.log('Mi nombre es ' + nombre + ' ' + segundonombre + ' ' + apellido + ' y tengo ' + edad + ' años.');
console.log('Mi nombre es ' + nombre + ' ' + segundonombre + ' ' + apellido + ' y tengo ' + edad + ' años.');
*/

console.log('======================================================')

// Operadores matemáticos
// + - * / % ** ++ --

// Operadores relacionales
// < > <= >= == != === !===

// Operadores lógicos
// && || !

let uno = 500
let dos = 800

let resultado = uno + dos
console.log(resultado)

resultado = uno - dos
console.log(resultado)

resultado = uno * dos
console.log(resultado)

resultado = dos / uno
console.log(resultado)

resultado = uno % dos
console.log(resultado)

resultado = 5 ** 3
console.log(resultado)

//Sumar uno a uno
uno++
console.log(uno)
uno--
console.log(uno)

//Acumulador
let acumulador = 10
console.log(acumulador)
acumulador += 10
console.log(acumulador)
acumulador -= 10
console.log(acumulador)

console.log('======================================================')

// nombre = prompt('Ingrese su nombre')
// console.log('Hola ' + nombre + '! Bienvenido a mi pagina web')
// alert('Hola ' + nombre + '! Bienvenido a mi pagina web')

console.log('======================================================')

// Operadores relacionales

resultado = dos == uno
console.log(resultado)

resultado = uno != dos
console.log(resultado)

resultado = uno === '500'
console.log(resultado)

resultado = uno !== '500'
console.log(resultado)

resultado = uno < dos
console.log(resultado)

resultado = uno > dos
console.log(resultado)

console.log('======================================================')

// Operadores condicionales

if (edad >= 18){
    console.log('Eres mayor de edad y puedes comprar bebidas alcoholicas')
} else {
    console.log('No eres mayor de edad y no puedes comprar bebidas alcoholicas')
}

console.log('======================================================')

let user = 'pepe'
let password = '123456'

if (user == 'pepe' && password == '123456'){
    console.log('Bienvenido al sistema')
} else if (user == pepe){
    console.log('Contraseña incorrecta')
} 

console.log('======================================================')

