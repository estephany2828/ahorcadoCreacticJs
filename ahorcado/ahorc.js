console.log("aqui estoy")
// Array de palabras
var palabras = [["Mariposa", "animal"], ["ordenador", "Una máquina"]]
// Palabra a averiguar
var palabra = "";
// Nº aleatorio
var rand;
// Palabra oculta
var oculta = [];
// Elemento html de la palabra
var hueco = document.getElementById("palabra");
// Contador de intentos
var cont = 6;
// Botones de letras
var buttons = document.getElementsByClassName('letra');
// Boton de reset
var btnInicio = document.getElementById("reset");

//funcion que escoje aleatorio la palabra que esta en el array
function generaPalabra() {
    rand= (Math.random()).toFixed(0);
    palabra= palabras[rand][0].toUpperCase();
    console.log(palabra);
  }
 
//   var generaPalabra = () =>{
//     rand= (Math.random()).toFixed(0);
//     palabra= palabras[rand][0].toUpperCase();
//     console.log(palabra);
//   }
//  console.log(generaPalabra())

// Funcion para pintar los guiones de la palabra
function pintarGuiones(num) {
    for (var i = 0; i < num; i++) {
      oculta[i] = "_";
    }
    hueco.innerHTML = oculta.join("");

  }  
  
 var teclas=""

function teclado(){
  var abc= []
 
  abc=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "z"]  
  tamaño=abc.length
  abc.forEach(element => {
    var letra = "";
    letra=element.toUpperCase();
    //teclas += `<button  type="button" class="btn btn-danger">${element}</button>`
    teclas += "<button type='button' class='btn btn-danger' value='" + letra + "' onclick='intento(\"" + letra + "\")' class='letra' id='"+letra+"'>" + letra + "</button>";
    //var letra = "";
    
  });     
}
letra=teclado()
//teclado()
document.getElementById("teclado").innerHTML= teclas;

var pruebita=["a", "b", "d"]
var prueb=pruebita.indexOf("d")
console.log(prueb)

// Chequear intento
function intento(letra) {
  document.getElementById(letra).disabled = true;
  console.log(teclas)
  if(palabra.indexOf(letra) != -1) {
    for(var i=0; i<palabra.length; i++) {
      if(palabra[i]==letra) oculta[i] = letra;
    }
    hueco.innerHTML = oculta.join("");
    document.getElementById("acierto").innerHTML = "Bien!";
    document.getElementById("acierto").className += "acierto verde";
  }else{
    cont--;
    document.getElementById("intentos").innerHTML = cont;
    document.getElementById("acierto").innerHTML = "Fallo!";
    document.getElementById("acierto").className += "acierto rojo";
    document.getElementById("image"+cont).className += "fade-in";
  }
  compruebaFin();
  setTimeout(function () { 
    document.getElementById("acierto").className = ""; 
  }, 800);
}



// Compruba si ha finalizado
function compruebaFin() {
  if( oculta.indexOf("_") == -1 ) {
    document.getElementById("msg-final").innerHTML = "Felicidades !!";
    document.getElementById("msg-final").className += "zoom-in";
    document.getElementById("palabra").className += " encuadre";
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    document.getElementById("reset").innerHTML = "Empezar";
    btnInicio.onclick = function() { location.reload() };
  }else if( cont == 0 ) {
    document.getElementById("msg-final").innerHTML = "Game Over";
    document.getElementById("msg-final").className += "zoom-in";
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    document.getElementById("reset").innerHTML = "Empezar";
    btnInicio.onclick = function () { location.reload() };
  }
}

function inicio() {
  generaPalabra();
  pintarGuiones(palabra.length);
  cont = 6;
  document.getElementById("intentos").innerHTML=cont;
  console.log(palabra.length)
}
function pista() {
  document.getElementById("hueco-pista").innerHTML = palabras[rand][1];
}

// Iniciar
window.onload = inicio();