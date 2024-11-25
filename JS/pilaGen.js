const palabrasAleatorias = [
    "sol", "libro", "café", "nube", "guitarra",
    "ventana", "camino", "sombra", "fuego", 
    "montaña", "rio", "luz", "jardín", "arena", "puente"
];

function Aleatorias() {
    var indice = Math.floor(Math.random() * palabrasAleatorias.length);
    document.getElementById("Elemento").value = palabrasAleatorias[indice];
    document.getElementById("iPush").value = `Push(${palabrasAleatorias[indice]})`;
    document.getElementById("iFind").value = `Find(${palabrasAleatorias[indice]})`;
}

function CambioTexto() {
    var texto = document.getElementById("Elemento").value;
    document.getElementById("iPush").value = `Push(${texto})`;
    document.getElementById("iFind").value = `Find(${texto})`;
}

function Push() {
    if (document.getElementById("Elemento").value.trim() != "") {
        document.getElementById("mensaje").innerHTML = "";
        var renglon = document.createElement("tr");
        var celda1 = document.createElement("td");
        var celda2 = document.createElement("td");
        celda2.style.border = "1px solid black";
        celda1.textContent = "tope->";
        celda2.textContent = document.getElementById("Elemento").value;
        renglon.appendChild(celda1);
        renglon.appendChild(celda2);

        var rt = document.getElementById("tabla");
        if (rt.hasChildNodes()) {
            rt.firstChild.firstChild.textContent = "";
        }
        rt.insertBefore(renglon, rt.children[0]);
    } else {
        document.getElementById("mensaje").innerHTML = "No se aceptan cadenas vacías";
    }
}

function Pop() {
    var rt = document.getElementById("tabla");
    if (rt.hasChildNodes()) {
        document.getElementById("mensaje").innerHTML = `Se eliminó del tope ${rt.firstChild.childNodes[1].textContent}`;
        rt.removeChild(rt.firstChild);
        if (rt.hasChildNodes()) {
            document.getElementById("tabla").firstChild.firstChild.textContent = "tope->";
        }
    } else {
        document.getElementById("mensaje").innerHTML = "No hay elementos para hacer el Pop";
    }
}

function Peek() {
    var rt = document.getElementById("tabla");
    if (rt.hasChildNodes()) {
        document.getElementById("mensaje").innerHTML = `En el tope de la pila se encuentra ${rt.firstChild.childNodes[1].textContent}`;
        document.getElementById("tabla").firstChild.firstChild.textContent = "tope->";
    } else {
        document.getElementById("mensaje").innerHTML = "No hay elementos en la pila";
    }
}

function Clear() {
    document.getElementById("tabla").textContent = "";
    document.getElementById("mensaje").innerHTML = "Se hizo clear en la pila";
}

function Find() {
    var rt = document.getElementById("tabla");
    var control = false;
    if (rt.hasChildNodes()) {
        for (let i = 0; i < rt.childNodes.length; i++) {
            let nodo = rt.childNodes[i].childNodes[1].textContent;
            if (nodo == document.getElementById("Elemento").value) {
                document.getElementById("mensaje").innerHTML = "Sí se encuentra";
                control = true;
                break;
            }
        }
        if (!control) {
            document.getElementById("mensaje").innerHTML = "No se encuentra";
        }
    } else {
        document.getElementById("mensaje").innerHTML = "No hay elementos en la pila";
    }
}

function isEmpty() {
    var rt = document.getElementById("tabla");
    if (rt.hasChildNodes()) {
        document.getElementById("mensaje").innerHTML = "false";
    } else {
        document.getElementById("mensaje").innerHTML = "true";
    }
}
