var contador = 0;

function Capturar() {
    // Imprimimos el arreglo de forma horizontal.
    var renglonIndice = document.getElementById("renglonIndice");
    var indice = renglonIndice.insertCell(-1).innerHTML = `[${contador}]`;
    var renglonDato = document.getElementById("renglonDato");
    var dato = renglonDato.insertCell(-1).innerHTML = document.getElementById("elementoInput").value;
    
    // Imprimimos el arreglo de forma vertical
    var tabla = document.getElementById("tablaVertical");
    var renglonVertical = tabla.insertRow(-1);
    renglonVertical.insertCell(0).innerHTML = `[${contador}]`;
    renglonVertical.insertCell(1).innerHTML = document.getElementById("elementoInput").value;
    
    // Incrementamos el contador y habilitamos/deshabilitamos botones
    contador++;
    if (contador >= 10) {
        document.getElementById("capturarBoton").disabled = true;
        document.getElementById("elementoInput").disabled = true;
        document.getElementById("generarBoton").disabled = false;
    } else {
        document.getElementById("contador").innerHTML = `Elemento [${contador}]:`;
        Aleatorio();
    }
}

function Aleatorio() {
    document.getElementById("elementoInput").value = Math.floor(Math.random() * 1000);
}

function Reiniciar() {
    contador = 0;
    document.getElementById("capturarBoton").disabled = false;
    document.getElementById("elementoInput").disabled = false;
    document.getElementById("generarBoton").disabled = true;
    
    document.getElementById("renglonIndice").innerHTML = "";
    document.getElementById("renglonDato").innerHTML = "";
    document.getElementById("renglonIndice2").innerHTML = "";
    document.getElementById("renglonDato2").innerHTML = "";
    document.getElementById("renglonIndice3").innerHTML = "";
    document.getElementById("renglonDato3").innerHTML = "";
    document.getElementById("tablaVertical").innerHTML = "";
    document.getElementById("tablaVertical2").innerHTML = "";
    document.getElementById("tablaVertical3").innerHTML = "";
    document.getElementById("resultados").innerHTML = "";
    document.getElementById("contador").innerHTML = "Elemento [0]:";
}

function Calcular() {
    document.getElementById("tablaVertical2").innerHTML = "";
    document.getElementById("tablaVertical3").innerHTML = "";
    var celdas = document.getElementById("renglonDato").children;
    var menor = parseInt(celdas[0].innerHTML);
    var mayor = parseInt(celdas[0].innerHTML);
    var suma = 0;
    var promedio = 0;

    for (var i = 0; i < celdas.length; i++) {
        var valorActual = parseInt(celdas[i].innerHTML);
        if (menor > valorActual) menor = valorActual;
        if (mayor < valorActual) mayor = valorActual;
        suma += valorActual;
    }
    promedio = suma / celdas.length;

    // Imprimir el arreglo en forma ascendente (Bubble Sort)
    document.getElementById("tablaHorizontal2").innerHTML = document.getElementById("tablaHorizontal").innerHTML;
    document.getElementById("tablaHorizontal2").rows[0].id = "renglonIndice2";
    document.getElementById("tablaHorizontal2").rows[1].id = "renglonDato2";
    var celdasAsc = document.getElementById("renglonDato2").children;

    for (var i = 0; i < celdasAsc.length; i++) {
        for (var j = i + 1; j < celdasAsc.length; j++) {
            if (parseInt(celdasAsc[i].innerHTML) > parseInt(celdasAsc[j].innerHTML)) {
                var temp = celdasAsc[i].innerHTML;
                celdasAsc[i].innerHTML = celdasAsc[j].innerHTML;
                celdasAsc[j].innerHTML = temp;
            }
        }
    }

    // Imprimir el arreglo en forma descendente
    document.getElementById("tablaHorizontal3").innerHTML = document.getElementById("tablaHorizontal").innerHTML;
    document.getElementById("tablaHorizontal3").rows[0].id = "renglonIndice3";
    document.getElementById("tablaHorizontal3").rows[1].id = "renglonDato3";
    var celdasDesc = document.getElementById("renglonDato3").children;

    for (var i = 0; i < celdasDesc.length; i++) {
        for (var j = i + 1; j < celdasDesc.length; j++) {
            if (parseInt(celdasDesc[i].innerHTML) < parseInt(celdasDesc[j].innerHTML)) {
                var temp = celdasDesc[i].innerHTML;
                celdasDesc[i].innerHTML = celdasDesc[j].innerHTML;
                celdasDesc[j].innerHTML = temp;
            }
        }
    }

    // Calcular la mediana
    var mediana = (parseInt(celdasAsc[4].innerHTML) + parseInt(celdasAsc[5].innerHTML)) / 2;

    // Calcular la moda
    var valores = document.getElementById("tablaHorizontal");
    var frecuencias = {};
    var moda = [];
    var maximaFrecuencia = 0;

    for (let i = 0; i < valores.rows[1].cells.length; i++) {
        var elemento = valores.rows[1].cells[i].innerHTML;
        frecuencias[elemento] = (frecuencias[elemento] || 0) + 1;
        if (frecuencias[elemento] > maximaFrecuencia) {
            maximaFrecuencia = frecuencias[elemento];
            moda = [elemento];
        } else if (frecuencias[elemento] === maximaFrecuencia) {
            moda.push(elemento);
        }
    }

    var modaFinal = (maximaFrecuencia === 1) ? "No hay moda" : `Las modas son: ${moda.join(", ")}`;

    // Imprimir resultados
    document.getElementById("resultados").innerHTML = `
        El menor es: ${menor} <br>
        El mayor es: ${mayor} <br>
        La suma es: ${suma} <br>
        El promedio es: ${promedio} <br>
        La mediana es: ${mediana} <br>
        ${modaFinal}
    `;
}
