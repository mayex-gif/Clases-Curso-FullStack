console.log('admin.js');

let nombreUsuario = localStorage.getItem('Nombre');

console.log('Bienvenido ' + nombreUsuario);

let nombre = document.getElementById('nombreUsuario');

// nombre.style.textAlign = 'center';
nombre.style = 'color: red;';
nombre.innerText = nombreUsuario
nombre.innerHTML = '<strong>' + nombreUsuario + '</strong>';

console.log(nombre);