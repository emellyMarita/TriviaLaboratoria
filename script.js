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
  document.getElementById('cientificasPreguntaDos').style.display = "none";
  document.getElementById('cientificasPreguntaTres').style.display = "block";
}

function nextFinal(){
  document.getElementById('cientificasPreguntaTres').style.display = "none";
  document.getElementById('resultados').style.display = "block";
}

function siguienteuno(){
  document.getElementById('divulgadorasPreguntaUno').style.display = "none";
  document.getElementById('divulgadorasPreguntaDos').style.display = "block";
}

function siguientedos(){
  document.getElementById('divulgadorasPreguntaDos').style.display = "none";
  document.getElementById('divulgadorasPreguntaTres').style.display = "block";
}

function siguientetres(){
  document.getElementById('divulgadorasPreguntaTres').style.display = "none";
  document.getElementById('resultados').style.display = "block";
}


/* EVALUAR RESPUESTA */
let aciertos = 0;

/*CIENTIFICAS PERUANAS -> MAPEO BOTONES DE PREGUNTA 1*/
const respuestaCorrecta = document.getElementById("answer-3");
const respuestaIncorrecta1 = document.getElementById("answer-1");
const respuestaIncorrecta2 = document.getElementById("answer-2");



function evaluarRespuestaP1(respuesta){
  if(respuesta==3){
      respuestaCorrecta.classList.add("correct");
      respuestaIncorrecta1.classList.add("incorrect");
      respuestaIncorrecta2.classList.add("incorrect");
      aciertos++;
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
      respuestaCorrecta5.classList.add("correct");
      respuestaIncorrecta4.classList.add("incorrect");
      respuestaIncorrecta6.classList.add("incorrect");
      aciertos++;
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
const respuestaIncorrecta7 = document.getElementById("answer-7");
const respuestaCorrecta8 = document.getElementById("answer-8");
const respuestaIncorrecta9 = document.getElementById("answer-9");



function evaluarRespuestaP3(respuesta){
  if(respuesta==8){
      respuestaCorrecta8.classList.add("correct");
      respuestaIncorrecta7.classList.add("incorrect");
      respuestaIncorrecta9.classList.add("incorrect");
      aciertos++;
      console.log(aciertos);
  } else {
      respuestaCorrecta8.classList.add("correct");
      respuestaIncorrecta7.classList.add("incorrect");
      respuestaIncorrecta9.classList.add("incorrect");
  }
  
}

/*DIVULGADORAS PERUANAS -> MAPEO BOTONES DE PREGUNTA 1*/
const respuestaCorrecta10 = document.getElementById("answer-10");
const respuestaIncorrecta11 = document.getElementById("answer-11");
const respuestaIncorrecta12 = document.getElementById("answer-12");



function evaluarRespuestaP4(respuesta){
  if(respuesta==10){
      respuestaCorrecta10.classList.add("correct");
      respuestaIncorrecta11.classList.add("incorrect");
      respuestaIncorrecta12.classList.add("incorrect");
      aciertos++;
      console.log(aciertos);
  } else {
      respuestaCorrecta10.classList.add("correct");
      respuestaIncorrecta11.classList.add("incorrect");
      respuestaIncorrecta12.classList.add("incorrect");
  }
  
}

/*DIVULGADORAS PERUANAS -> MAPEO BOTONES DE PREGUNTA 2*/
const respuestaCorrecta13 = document.getElementById("answer-13");
const respuestaIncorrecta14 = document.getElementById("answer-14");
const respuestaIncorrecta15 = document.getElementById("answer-15");



function evaluarRespuestaP5(respuesta){
  if(respuesta==14){
      respuestaCorrecta13.classList.add("incorrect");
      respuestaIncorrecta14.classList.add("correct");
      respuestaIncorrecta15.classList.add("incorrect");
      aciertos++;
      console.log(aciertos);
  } else {
      respuestaCorrecta10.classList.add("incorrect");
      respuestaIncorrecta11.classList.add("correct");
      respuestaIncorrecta12.classList.add("incorrect");
  }
  
}

/*DIVULGADORAS PERUANAS -> MAPEO BOTONES DE PREGUNTA 3*/
const respuestaIncorrecta16 = document.getElementById("answer-16");
const respuestaIncorrecta17 = document.getElementById("answer-17");
const respuestaCorrecta18 = document.getElementById("answer-18");



function evaluarRespuestaP6(respuesta){
  if(respuesta==14){
      respuestaIncorrecta16.classList.add("incorrect");
      respuestaIncorrecta17.classList.add("incorrect");
      respuestaCorrecta18.classList.add("correct");
      aciertos++;
      console.log(aciertos);
  } else {
      respuestaIncorrecta16.classList.add("incorrect");
      respuestaIncorrecta17.classList.add("incorrect");
      respuestaCorrecta18.classList.add("correct");
  }
  
}

function irFinal(){
  document.getElementById('cientificasPreguntaTres').style.display = "none";
  document.getElementById('resultados').style.display = "block";
  mostrarResultados();
}

function mostrarResultados(){
  const nombre = nombreUsuario.value; 
  document.getElementById('puntuacion').innerHTML = 'Hola ' + nombre + 'tu puntuación es: ' + aciertos;

}

  function volverAInicio(){
  nombreUsuario.value = "";
  document.getElementById('resultados').style.display='none'
  document.getElementById('login').style.display = 'block';
  
}