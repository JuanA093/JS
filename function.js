const txtId = document.getElementById("txtId");
const txtNombre = document.getElementById("txtNombre");
const nbCantidad = document.getElementById("nbCantidad");
const nbPrecio = document.getElementById("nbPrecio");
const txtDescripcion = document.getElementById("txtDescripcion");
const tabla = document.getElementById("contenidoTabla");
const eliminardatos = document.getElementById("limpiar");

const datos = [];

function agregarElemento(){
    const id = txtId.value;
    const nombre = txtNombre.value;
    const cantidad = nbCantidad.value;
    const precio = nbPrecio.value;
    const descripcion = txtDescripcion.value;

    datos.push(id, nombre, cantidad, precio, descripcion);

    console.log(datos);

    let idFila = "fila" + datos.length;

    let tabla = document.getElementById("contenidoTabla");
    tabla.innerHTML += "<tr id = '" + idFila + "'><td>" + id + "</td><td>" + nombre + "</td><td>" + cantidad + "</td><td>" + precio + "</td><td>" + descripcion + "</td><td><button class ='eliminar' onclick='eliminarFila(\""+ idFila + "\")'>Eliminar</button></td></tr>";

    //borrar datos del form al agregar a la tabla
    document.getElementById("txtId").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("nbCantidad").value = "";
    document.getElementById("nbPrecio").value = "";
    document.getElementById("txtDescripcion").value = "";

}    

function eliminarFila(idFila){
        
        let fila = document.getElementById(idFila);
        fila.remove();

}
 






