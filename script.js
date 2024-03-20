const nombreUsuario = document.getElementById('nombre'); /*<input class="sendname" type="text" id="nombre"
          placeholder="Ingresa tu nombre aquí"/>*/

function mostrarNombre(){
    const nombre = nombreUsuario.value; /*'diego'*/
    
    document.getElementById('playerName').innerHTML = "Hola " + nombre;
    document.getElementById('login').style.display = "none";
    document.getElementById('subject').style.display = "block";
}

function preguntasCientificasPeruanas(){
  document.getElementById('subject').style.display = "none";
  document.getElementById('cientificasPreguntaUno').style.display = "block";
}

function preguntasDivulgadorasPeruanas(){
  document.getElementById('subject').style.display = "none";
  document.getElementById('divulgadorasPreguntaUno').style.display = "block";
}

function nextone(){
  document.getElementById('cientificasPreguntaUno').style.display = "none";
  document.getElementById('cientificasPreguntaDos').style.display = "block";
}

function nexttwo(){
  document.getElementById('divulgadorasPreguntaUno').style.display = "none";
  document.getElementById('divulgadorasPreguntaDos').style.display = "block";
}



/* EVALUAR RESPUESTA */
let aciertos = 0;

/*CIENTIFICAS PERUANAS -> MAPEO DE BOTONES DE PREGUNTA 1*/
const respuestaCorrecta = document.getElementById("answer-3");
const respuestaIncorrecta = document.getElementById("answer-1");
const respuestaIncorrecta2 = document.getElementById("answer-2");



function evaluarRespuestaP1(respuesta = 1){
  if(1==3){
      aciertos++;
      respuestaCorrecta.classList.add("correct");
      respuestaIncorrecta.classList.add("incorrect");
      respuestaIncorrecta2.classList.add("incorrect");
      console.log(aciertos);
  } else {
      respuestaCorrecta.classList.add("correct");
      respuestaIncorrecta.classList.add("incorrect");
      respuestaIncorrecta2.classList.add("incorrect");
  }
  
  // Ocultar la pregunta actual y mostrar la siguiente después de 30 segundos
    setTimeout(function() {
        document.getElementById('librosPregunta1').style.display = "none";
        document.getElementById('librosPregunta2').style.display = "block";
    }, 1000); 
  
}