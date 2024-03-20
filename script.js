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

/*CIENTIFICAS PERUANAS -> MAPEO BOTONES DE PREGUNTA 1*/
const respuestaCorrecta = document.getElementById("answer-3");
const respuestaIncorrecta1 = document.getElementById("answer-1");
const respuestaIncorrecta2 = document.getElementById("answer-2");



function evaluarRespuestaP1(respuesta){
  if(respuesta==3){
      aciertos++;
      respuestaCorrecta.classList.add("correct");
      respuestaIncorrecta1.classList.add("incorrect");
      respuestaIncorrecta2.classList.add("incorrect");
      console.log(aciertos);
  } else {
      respuestaCorrecta.classList.add("correct");
      respuestaIncorrecta1.classList.add("incorrect");
      respuestaIncorrecta2.classList.add("incorrect");
  }
  
  /*Ocultar la pregunta actual y mostrar la siguiente después de 30 segundos
    setTimeout(function() {
        document.getElementById('cientificasPreguntaUno').style.display = "none";
        document.getElementById('cientificasPreguntaDos').style.display = "block";
    }, 1000);*/
  
}

function preguntaDosCientificas(){
  document.getElementById('cientificasPreguntaUno').style.display = "none";
  document.getElementById('cientificasPreguntaDos').style.display = "block";
}


/*CIENTIFICAS PERUANAS -> MAPEO BOTONES DE PREGUNTA 2*/
const respuestaIncorrecta4 = document.getElementById("answer-4");
const respuestaCorrecta5 = document.getElementById("answer-5");
const respuestaIncorrecta6 = document.getElementById("answer-6");



function evaluarRespuestaP2(respuesta){
  if(respuesta==5){
      aciertos++;
      respuestaCorrecta5.classList.add("correct");
      respuestaIncorrecta4.classList.add("incorrect");
      respuestaIncorrecta6.classList.add("incorrect");
      console.log(aciertos);
  } else {
      respuestaCorrecta5.classList.add("correct");
      respuestaIncorrecta4.classList.add("incorrect");
      respuestaIncorrecta6.classList.add("incorrect");
  }
  
}

function preguntaTresCientificas(){
  document.getElementById('cientificasPreguntaDos').style.display = "none";
  document.getElementById('cientificasPreguntaTres').style.display = "block";
}

/*CIENTIFICAS PERUANAS -> MAPEO BOTONES DE PREGUNTA 3*/
const respuestaIncorrecta4 = document.getElementById("answer-4");
const respuestaCorrecta5 = document.getElementById("answer-5");
const respuestaIncorrecta6 = document.getElementById("answer-6");



function evaluarRespuestaP2(respuesta){
  if(respuesta==5){
      aciertos++;
      respuestaCorrecta5.classList.add("correct");
      respuestaIncorrecta4.classList.add("incorrect");
      respuestaIncorrecta6.classList.add("incorrect");
      console.log(aciertos);
  } else {
      respuestaCorrecta5.classList.add("correct");
      respuestaIncorrecta4.classList.add("incorrect");
      respuestaIncorrecta6.classList.add("incorrect");
  }
  
}

function preguntaTresCientificas(){
  document.getElementById('cientificasPreguntaDos').style.display = "none";
  document.getElementById('cientificasPreguntaTres').style.display = "block";
}


