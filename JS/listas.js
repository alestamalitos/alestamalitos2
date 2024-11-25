function CambioTexto() {
    var texto = document.getElementById("Elemento").value;
    // Definir funciones o eliminar estas líneas si no se van a implementar
    document.getElementById("pushh").value = `Push(${texto})`;
    document.getElementById("unshiftt").value = `Unshift(${texto})`;
    document.getElementById("indexx").value = `indexOf(${texto})`;
    document.getElementById("includess").value = `includes(${texto})`;

    var numero = document.getElementById("Posicion").value;
    document.getElementById("insertt").value = `insert_at(${texto}, ${numero})`;
}

function pushhh() {
    var lista = document.getElementById("tabla");
    var renglon = document.createElement("tr"); // Crear siempre una nueva fila

    // Crear la celda
    var celda = document.createElement("td");
    celda.style.border = "1px solid black";

    // Agregar contenido a la celda
    celda.textContent = document.getElementById("Elemento").value;
    renglon.appendChild(celda);
    lista.appendChild(renglon); // Agregar la fila completa a la tabla
}