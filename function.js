const txtId = document.getElementById("txtId");
const txtNombre = document.getElementById("txtNombre");
const nbCantidad = document.getElementById("nbCantidad");
const nbPrecio = document.getElementById("nbPrecio");
const txtDescripcion = document.getElementById("txtDescripcion");
const tabla = document.getElementById("contendidoTabla");
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

    let tabla = document.getElementById("contenidoTabla");
    tabla.innerHTML += "<tr><td>" + id + "</td><td>" + nombre + "</td><td>" + cantidad + "</td  ><td>" + precio + "</td><td>" + descripcion + "</td></tr>";

    document.getElementById("txtId").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("nbCantidad").value = "";
    document.getElementById("nbPrecio").value = "";
    document.getElementById("txtDescripcion").value = "";

    function limpiarDatos(){
        tabla.innerHTML = "";
    }


    let eliminar = document.getElementById("limpiar");
    eliminar.addEventListener('click',limpiarDatos);


}



