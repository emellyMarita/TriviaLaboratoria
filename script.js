const nombreUsuario = document.getElementById('nombre'); /*<input class="sendname" type="text" id="nombre"
          placeholder="Ingresa tu nombre aquí"/>*/

/*Función que muestra el nombre del usuario en la pantalla y redirige al usuario a la segunda pantalla*/
function mostrarNombre(){
    const nombre = nombreUsuario.value; /*'diego'*/
    
    document.getElementById('playerName').innerHTML = "Hola " + nombre;
    document.getElementById('login').style.display = "none";
    document.getElementById('subject').style.display = "block";
    document.getElementById('resultados').style.display = "none";
}


/*ELEGIR TEMÁTICA*/

/*Si el usuario elige el tema 'Científicas Peruanas', esta función lo lleva a la pregunta uno de esa temática*/
function preguntasCientificasPeruanas(){
  document.getElementById('subject').style.display = "none";
  document.getElementById('cientificasPreguntaUno').style.display = "block";
}

/*Si el usuario elige el tema 'Divulgadoras Peruanas', esta función lo lleva a la pregunta uno de esa temática*/
function preguntasDivulgadorasPeruanas(){
  document.getElementById('subject').style.display = "none";
  document.getElementById('divulgadorasPreguntaUno').style.display = "block";
}

/*FLUJO DE PANTALLAS DE DIVULGADORAS PERUANAS*/

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
  mostrarResultados();
}


/* EVALUACIÓN DE RESPUESTAS */

let aciertos = 0;

/*CIENTIFICAS PERUANAS*/

/*PREGUNTA 1*/
/*Mapeamos los botones de la pregunta 1*/
const respuestaIncorrecta1 = document.getElementById("answer-1");
const respuestaIncorrecta2 = document.getElementById("answer-2");
const respuestaCorrecta3 = document.getElementById("answer-3");

/*Evalúa las respuestar insertadas por el usuario*/
function evaluarRespuestaP1(respuesta){
  if(respuesta==3){
      aciertos++;
      respuestaIncorrecta1.classList.add("incorrect");
      respuestaIncorrecta2.classList.add("incorrect");
      respuestaCorrecta3.classList.add("correct");
      bloquearBotonesP1();
      console.log(aciertos);
  } else {
      respuestaIncorrecta1.classList.add("incorrect");
      respuestaIncorrecta2.classList.add("incorrect");
      respuestaCorrecta3.classList.add("correct");
      bloquearBotonesP1();
  }
  /*Ocultar la pregunta actual y mostrar la siguiente después de 30 segundos
    setTimeout(function() {
        document.getElementById('cientificasPreguntaUno').style.display = "none";
        document.getElementById('cientificasPreguntaDos').style.display = "block";
    }, 1000);*/
}

/*Función que bloquea botones de la pregunta 1*/
function bloquearBotonesP1(){
  respuestaIncorrecta1.disabled = true;
  respuestaIncorrecta2.disabled = true;
  respuestaCorrecta3.disabled = true;
}

function preguntaDosCientificas(){
  document.getElementById('cientificasPreguntaUno').style.display = "none"; 
  document.getElementById('cientificasPreguntaDos').style.display = "block";
}; 

/*PREGUNTA 2*/
/*Mapeamos los botones de la pregunta 2*/
const respuestaIncorrecta4 = document.getElementById("answer-4");
const respuestaCorrecta5 = document.getElementById("answer-5");
const respuestaIncorrecta6 = document.getElementById("answer-6");


/*Evalúa las respuestar insertadas por el usuario*/
function evaluarRespuestaP2(respuesta){
  if(respuesta==5){
      aciertos++;
      respuestaIncorrecta4.classList.add("incorrect");
      respuestaCorrecta5.classList.add("correct");
      respuestaIncorrecta6.classList.add("incorrect");
      console.log(aciertos);
      bloquearBotonesP2();
    
  } else {
      respuestaIncorrecta4.classList.add("incorrect");
      respuestaCorrecta5.classList.add("correct");
      respuestaIncorrecta6.classList.add("incorrect");
      bloquearBotonesP2();
         
    }
      function bloquearBotonesP2(){
      respuestaIncorrecta4.disabled = true;
      respuestaCorrecta5.disabled = true;
      respuestaIncorrecta6.disabled = true;
  }
  
}

function preguntaTresCientificas(){
  document.getElementById('cientificasPreguntaDos').style.display = "none";
  document.getElementById('cientificasPreguntaTres').style.display = "block";
}


/*PREGUNTA 3*/
/*Mapeamos los botones de la pregunta 3*/
const respuestaIncorrecta7 = document.getElementById("answer-7");
const respuestaCorrecta8 = document.getElementById("answer-8");
const respuestaIncorrecta9 = document.getElementById("answer-9");


/*Evalúa las respuestar insertadas por el usuario*/
function evaluarRespuestaP3(respuesta){
  if(respuesta==8){
      respuestaIncorrecta7.classList.add("incorrect");
      respuestaCorrecta8.classList.add("correct");
      respuestaIncorrecta9.classList.add("incorrect");
      aciertos++;
      bloquearBotonesP2();
      console.log(aciertos);
  } else {
      respuestaIncorrecta7.classList.add("incorrect");
      respuestaCorrecta8.classList.add("correct");
      respuestaIncorrecta9.classList.add("incorrect");
      bloquearBotonesP2();
  }
  
  
  
}

/*Redirige al usuario a la última pantalla*/
function irFinal(){
  document.getElementById('cientificasPreguntaTres').style.display = "none";
  document.getElementById('resultados').style.display = "block";
  mostrarResultados();
}


/*DIVULGADORAS PERUANAS*/
/*PREGUNTA 1*/
/*Mapeamos los botones de la pregunta 1*/
const respuestaCorrecta10 = document.getElementById("answer-10");
const respuestaIncorrecta11 = document.getElementById("answer-11");
const respuestaIncorrecta12 = document.getElementById("answer-12");


/*Evalúa las respuestar insertadas por el usuario*/
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

/*PREGUNTA 2*/
/*Mapeamos los botones de la pregunta 2*/
const respuestaCorrecta13 = document.getElementById("answer-13");
const respuestaIncorrecta14 = document.getElementById("answer-14");
const respuestaIncorrecta15 = document.getElementById("answer-15");


/*Evalúa las respuestar insertadas por el usuario*/
function evaluarRespuestaP5(respuesta){
  if(respuesta==14){
      respuestaCorrecta13.classList.add("incorrect");
      respuestaIncorrecta14.classList.add("correct");
      respuestaIncorrecta15.classList.add("incorrect");
      aciertos++;
      console.log(aciertos);
  } else {
      respuestaCorrecta13.classList.add("incorrect");
      respuestaIncorrecta14.classList.add("correct");
      respuestaIncorrecta15.classList.add("incorrect");
  }
  
}

/*PREGUNTA 3*/
/*Mapeamos los botones de la pregunta 3*/
const respuestaIncorrecta16 = document.getElementById("answer-16");
const respuestaIncorrecta17 = document.getElementById("answer-17");
const respuestaCorrecta18 = document.getElementById("answer-18");


/*Evalúa las respuestar insertadas por el usuario*/
function evaluarRespuestaP6(respuesta){
  if(respuesta==18){
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
  



function mostrarResultados(){
  const nombre = nombreUsuario.value; 
  document.getElementById('puntuacion').innerHTML = 'Hola ' + nombre + ' tu puntuación es: ' + aciertos;
  habilitarBotones();
  
  }


function volverAInicio(){
  nombreUsuario.value = "";
  aciertos = 0;
  document.getElementById('resultados').style.display='none'
  document.getElementById('login').style.display = 'block';
}

function habilitarBotones(){
  respuestaIncorrecta1.disabled = true;
  respuestaIncorrecta2.disabled = true;
  respuestaCorrecta3.disabled = true;
}










































