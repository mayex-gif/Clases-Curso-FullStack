console.log('altaProductos.js')

//1. Obtenemos el tag al que daremos un evento
let enviarDatos = document.getElementById('enviarDatos')

let misProductos = []

//let formAltaProductos = document.getElementById('formAltaProductos')

//Funcion para limpiar los formularios
const borrarDatosFormulario = () => {
    let formulario = document.getElementById('formulario');

    formulario.reset();
}

//2. Le asigno una escucha del evento que quiero que realice
enviarDatos.addEventListener('click', (e) => {

    e.preventDefault();

    //Obtener los datos del html
    let nombreProducto = document.getElementById('nombreProducto').value
    let precioProducto = document.getElementById('precioProducto').value
    let stockProducto = document.getElementById('stockProducto').value
    let descripcionProducto = document.getElementById('descripcionProducto').value

    if (nombreProducto == '' || precioProducto == '' || stockProducto == '') {
        alert('Todos los campos son obligatorios')
        return;
    } else {
        cargarDatos(nombreProducto, precioProducto, stockProducto, descripcionProducto, e)
    }

    borrarDatosFormulario();

}) //Cuando haga click que se ejecute una funcion, la funcion sera una funcion callback... la funcion callback puede ser redactada dentro del addEventListener o en otra funcion

const cargarDatos = (nombreProducto, precioProducto, stockProducto, descripcionProducto, imagenProducto, e) => {
    console.log('El producto guardado en la base de datos es: ' + nombreProducto + ', ' + precioProducto + ', ' + stockProducto + ', ' + descripcionProducto);

    console.log(e);

    //Crear un objeto del tipo producto
    let producto = {
        nombre: nombreProducto,
        precio: precioProducto,
        stock: stockProducto,
        descripcion: descripcionProducto
    }

    console.log(producto);

    //Guardamos el objetio de tipo producto al array misProductos
    misProductos.push(producto);

    //Asignar los datos en el localstorage
    localStorage.setItem('productos', JSON.stringify(misProductos));

    console.log(misProductos);

    console.log('La suma de todos los productos es: ' + misProductos.length);

}