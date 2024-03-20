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