function Generar() {
    document.getElementById("cuadrado").innerHTML = "";

    var tabla = document.getElementById("cuadrado");
    var lado = parseInt(document.getElementById("lados").value);
    var celda = "", nuevaFila = "", r = 0, c = 0;

    for (r = 0; r < lado; r++) {
        nuevaFila = tabla.insertRow(-1);
        for (c = 0; c < lado; c++) {
            celda = nuevaFila.insertCell(-1);
            var entrada = document.createElement("input");
            entrada.setAttribute("type", "number");
            entrada.setAttribute("value", Aleatorio());
            entrada.setAttribute("required", "required");
            // Asignamos los estilos al input.
            entrada.setAttribute("style", "width:50px; color:blue; font-weight: bold;");
            celda.appendChild(entrada);
        }
        celda = nuevaFila.insertCell(-1);
        celda.innerHTML = "suma"; 
    }

    nuevaFila = tabla.insertRow(-1);
    for (c = 0; c < lado; c++) {
        celda = nuevaFila.insertCell(-1);
        celda.innerHTML = "suma"; 
    }

    celda = nuevaFila.insertCell(-1); 
    tabla.rows[lado].cells[lado - 1].innerHTML = "diagonal1";
    tabla.rows[lado].cells[0].innerHTML = "diagonal2";
}

function Aleatorio() {
    return Math.floor(Math.random() * 100);
}

function EjemploMagico() {
    var tabla = document.getElementById("cuadrado");
    var lado = parseInt(document.getElementById("lados").value);
    for (let r = 0; r < lado; r++) {
        for (let c = 0; c < lado; c++) {
            tabla.rows[r].cells[c].querySelector('input').value = lado; 
        }
    }
    Calcular(); 
    document.getElementById("verificar").innerHTML = "Si es cuadrado mágico";
    document.getElementById("verificar").style.color = "blue";
}

function EjemploCuadrado() {
    var tabla = document.getElementById("cuadrado");
    var lado = parseInt(document.getElementById("lados").value);
    for (let r = 0; r < lado; r++) {
        for (let c = 0; c < lado; c++) {
            tabla.rows[r].cells[c].querySelector('input').value = Aleatorio();
        }
    }
    Calcular(); 
    document.getElementById("verificar").innerHTML = "No es cuadrado mágico";
    document.getElementById("verificar").style.color = "crimson";
}

function Calcular() {
    var tabla = document.getElementById("cuadrado");
    var lado = tabla.rows.length - 1;
    var r = 0, c = 0, sumaFila = 0, sumaColumna = 0;
    var diagonal1 = 0, diagonal2 = 0;

    for (r = 0; r < lado; r++) {
        sumaFila = 0;
        for (c = 0; c < lado; c++) {
            var valor = parseInt(tabla.rows[r].cells[c].querySelector('input').value);
            sumaFila += valor;
            if (r === c) diagonal1 += valor;
            if (r + c === lado - 1) diagonal2 += valor;
        }
        tabla.rows[r].cells[lado].innerHTML = sumaFila;
    }

    for (c = 0; c < lado; c++) {
        sumaColumna = 0;
        for (r = 0; r < lado; r++) {
            sumaColumna += parseInt(tabla.rows[r].cells[c].querySelector('input').value);
        }
        tabla.rows[lado].cells[c].innerHTML = sumaColumna; 
    }

    // Mostrar sumas de diagonales
    tabla.rows[lado].cells[lado - 1].innerHTML = diagonal1; 
    tabla.rows[lado].cells[0].innerHTML = diagonal2; 
}