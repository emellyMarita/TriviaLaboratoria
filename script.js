const nombreUsuario = document.getElementById('nombre'); /*<input class="sendname" type="text" id="nombre"
          placeholder="Ingresa tu nombre aquí"/>*/

function mostrarNombre(){
    const nombre = nombreUsuario.value; /*'diego'*/
    
    document.getElementById('playerName').innerHTML = "Hola " + nombre;
    document.getElementById('login').style.display = "none";
    document.getElementById('subject').style.display = "block";
}

function mostrarPrimeraPantalla(){
  document.getElementById('subject').style.display = "none";
  document.getElementById('questionOne').style.display = "block";
}

function mostrarSegundaPantalla(){
  document.getElementById('subject').style.display = "none";
  document.getElementById('questionThree').style.display = "block";
}

function nextone(){
  document.getElementById('questionOne').style.display = "none";
  document.getElementById('questionTwo').style.display = "block";
}

function nexttwo(){
  document.getElementById('questionThree').style.display = "none";
  document.getElementById('questionFour').style.display = "block";
}