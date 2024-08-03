function Sumar(a, b) {
    console.log(a + b)
}

Sumar(100, 20)


//ES5

function Login(email, password, facial) {

    let respuesta

    if (email == 'pepe@gmail.com' && password == '123456' && facial == true) {
        respuesta = 'Acceso al sistema concedido'
        console.log('1.Bienvenido al sistema')
        return respuesta

    } else {
        respuesta = 'No tienes acceso al sistema'
        return console.log(respuesta)

    }
}

Login('pepe@gmail.com', '123456', true)

console.log('======================================================')

Login('pepe@gmail.com', '1234567', true)


//Funciones Callback
function validacion(token, callback) {

    console.log('El token es: ' + token + ' y es valido para el acceso a la red')

    callback()
}

validacion('123678hjh8712763a98172', Login)


//ES6 --> Arrow function

// La diferencia entre una funcion con let o const y var o function es que al correr el script en el navegador, las funciones creadas 
// con let y const no toman la misma importancia que las variables creadas con function y con var, las variables o funciones con function
// o con var se inicializan primero que todo en el js

// Las variables function y var son las primeras en estar en memoria cuando se corre el programa

const calculoSaldo = () => {}

let calculoSaldo3 = function (saldo, compra) {
    return saldo - compra
}

const calculoSaldoAnonima = function () {}

console.log(calculoSaldo3(100000, 7500))

//DOM -> Administracion o manejo de documentos de js
let saludo = document.getElementById('saludo')
console.log(saludo)

saludo.style.background = 'red'

let titulo = document.getElementById('titulo')
console.log(titulo)


function Saludar(nombre) {

    titulo.style.fontFamily = 'Arial'
    titulo.innerText = 'Bienvenido ' + nombre
    titulo.style.color = 'Blue'

    alert('Bienvenido ' + nombre)
}