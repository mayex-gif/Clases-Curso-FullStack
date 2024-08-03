console.log('tablaProductos.js');

//Tomamos el boton para agregarle los eventos
let mostrarDatos = document.getElementById('mostrarDatos');

console.log('================================================================');
//Tomar los datos del localstorage
let misProductos = localStorage.getItem('productos');

//Sin convertir a objeto
console.log(misProductos);
console.log(misProductos.length);

console.log('================================================================');

//Si no hay datos en el localstorage, inicializamos un array vacio
if (misProductos) {
    //El metodo parse toma misProductos de string y lo convierte a objeto JavaScript
    misProductos = JSON.parse(misProductos);
} else {
    misProductos = [];
}

//Converito a objeto
console.log(misProductos);
console.log(misProductos.length);

console.log('================================================================');

//Funcion para mostrar los datos en la tabla
mostrarDatos.addEventListener('click', (e) => {

    e.preventDefault();

    //alert('Mostrar Datos');

    let tabla = document.getElementById('tablaProductos');

    //Limpiar la tabla antes de agregar los productos
    while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
    }
    
    for (let i = 0; i < misProductos.length; i++) {
        
        console.log('Producto '+ (i + 1));
        
        //Crear un elemento fila
        let fila = document.createElement('tr'); 

        //Crear celdas y agregarlos a la fila
        let celdaNumero = document.createElement('td');
        let celdaNombre = document.createElement('td');
        let celdaPrecio = document.createElement('td');
        let celdaStock = document.createElement('td');
        let celdaDescripcion = document.createElement('td');
        
        //Asignar los valores de los productos a las celdas
        celdaNumero.textContent = i + 1;
        celdaNombre.textContent = misProductos[i].nombre;
        celdaPrecio.textContent = misProductos[i].precio;
        celdaStock.textContent = misProductos[i].stock;
        celdaDescripcion.textContent = misProductos[i].descripcion;

        //Agregar las celdas a la fila
        fila.appendChild(celdaNumero)
        fila.appendChild(celdaNombre)
        fila.appendChild(celdaPrecio)
        fila.appendChild(celdaStock)
        fila.appendChild(celdaDescripcion)

        //Agregar la fila a la tabla
        tabla.appendChild(fila);
    
        console.log(misProductos[i]);
        console.log('================================================================');

        // localStorage.clear();
        // localStorage.removeItem('misProductos');
    }


});