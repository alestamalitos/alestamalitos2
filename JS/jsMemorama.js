var tarjetas = ["1.jpeg", "1.jpeg", "2.jpeg", "2.jpeg", "3.jpeg", '3.jpeg', "4.jpeg", "4.jpeg", "5.jpeg", "5.jpeg", "6.jpeg", '6.jpeg', "7.jpeg", "7.jpeg", "0.jpeg", "0.jpeg"];
var imagentemporal;
var esperando = false;
var contador = 0x0;
function CambiarImagen(_0x389a6c, _0x31d17e) {
  _0x389a6c.src = "./img/" + tarjetas[_0x31d17e];
  if (!esperando) {
    imagen_temporal = _0x389a6c;
  } else if (imagen_temporal.src == _0x389a6c.src) {
    setTimeout(function () {
      EliminarPar(imagen_temporal, _0x389a6c);
    }, 0x1f4);
  } else {
    setTimeout(function () {
      RegresarImg(imagen_temporal, _0x389a6c);
    }, 0x1f4);
  }
  esperando = !esperando;
}
function RegresarImg(_0x2e6b0c, _0x5a8b22) {
  _0x2e6b0c.src = "./img/9.jpeg";
  _0x5a8b22.src = "./img/9.jpeg";
  _0x2e6b0c.setAttribute("onclick", "CambiarImagen(this," + _0x2e6b0c.id + ')');
  _0x5a8b22.setAttribute('onclick', "CambiarImagen(this," + _0x5a8b22.id + ')');
}
function EliminarPar(_0x34a191, _0x453faf) {
  _0x34a191.style.visibility = "hidden";
  _0x453faf.style.visibility = "hidden";
  _0x34a191.removeAttribute("onclick");
  _0x453faf.removeAttribute('onclick');
  contador++;
  if (contador != 0x8) {
    document.getElementById("contador").innerHTML = "Pares encontrados: " + contador;
  } else {
    document.getElementById('contador').innerHTML = "Ganaste!!";
  }
}
function Revolver() {
  var _0x1d82f2 = 0x0;
  for (let _0x425a54 = 0x0; _0x425a54 < tarjetas.length - 0x1; _0x425a54++) {
    _0x1d82f2 = Math.floor(Math.random() * (_0x425a54 + 0x1));
    [tarjetas[_0x425a54], tarjetas[_0x1d82f2]] = [tarjetas[_0x1d82f2], tarjetas[_0x425a54]];
  }
  document.getElementById("salida").innerHTML = tarjetas.join(" - ");
}
function Fondo() {
  var _0x2d6327 = Math.floor(Math.random() * 0x3) + 0x1;
  document.getElementById("tabla").style = "background-image: url(\"./MemoramaImg/fondo.jpeg" + _0x2d6327 + ".jpeg\");";
}
function Reiniciar() {
  location.reload();
}