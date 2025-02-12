let listaAmigos = [];

function agregarAmigo() {
   let amigoNuevo = (document.getElementById('amigo').value);
   if(amigoNuevo == ""){
      alert("Ingesa un nombre");
      return;
   }
   limpiarCampos();  
   listaAmigos.push(amigoNuevo);
   mostrarLista();
}

function sortearAmigo() {
   if(listaAmigos.length == 0){
      alert("No tienes amigos aun");
      return;
   }

   let numeroGenerado = Math.floor(Math.random() * listaAmigos.length);

   mostrarAmigoSecreto(numeroGenerado);
}

function limpiarCampos() {
   let valorInput = document.getElementById('amigo');
   valorInput.value = "";
}

function mostrarLista() {
   let elementoLista = document.getElementById("listaAmigos");
   elementoLista.innerHTML = "";

   for (i = 0; i <= listaAmigos.length - 1; i++) {
      const li = document.createElement("li");
      li.innerHTML = listaAmigos[i];
      elementoLista.appendChild(li);
   }
}

function mostrarAmigoSecreto(indice){
   let elementoLista = document.getElementById("resultado");
   elementoLista.innerHTML = listaAmigos[indice];

}
