// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de 
// programación. Aquí deberás desarrollar la lógica para resolver el problema.

let arrayAmigos=[];
let miMensaje="";
let textoAlura="Por favor, inserte un nombre.";
let listaHTML=[];
let listaComun="";

function agregarAmigo(){
    let InputIngreso= document.getElementById("amigo");
    let nombre=InputIngreso.value;  
    if(!validarNombre(nombre)){
        alert("Error: "+ miMensaje + "\n" + textoAlura);
    }else{ 
        agregarAlListadoArray(nombre);
        
        agregarAlListadoHTML();
    }
    borrar();
   
}

function validarNombre(nombre){
    let texto="";
    let estado=true;
    if(nombre.length===0){
        texto="El nombre esta vacio, se debe completar.";
        estado=false;
    }else if (nombre.trim().length==0){
        texto="Solo se cargo espacios en el nombre, se debe completar con caracteres.";
        estado=false;
    }else if (!isNaN(nombre)){/*IsNaN lo intenta convertir a numero, si lo convierte  */
        texto="El nombre ingresado es un numero, se debe ingresar de nuevo.";
        estado=false;
    }else if (buscarRepetidos(nombre)) {
        texto=`El nombre "${nombre}" ya fue ingresado, debe agregar un dato adicional o agregar mas informacion`;
        estado=false;
    }else{
        console.log("Nombre ingresado correctamente.");
        estado=true;
       
    }
    miMensaje=texto;
    return estado;
}

function agregarAlListadoArray(nombre){
    arrayAmigos.push(nombre);
}

function borrar(){
    document.querySelector("#amigo").value="";
}

function sortearAmigo(){
    if(arrayAmigos.length==0){ 
        alert("El Array se encuentra vacio, no se puede realizar el sorteo");
    }
    else{
        let longitud = arrayAmigos.length;
        let numero = Math.floor(Math.random()*longitud)
        amigoSecreto(numero);
    }
}


function buscarRepetidos(nombre){
    for (let valor of arrayAmigos) {
        if(nombre==valor){
            return true;
        }
    }
    return false;
}

//Funciones nuevas

function agregarAlListadoHTML(){
    limpiarListaHTML();
    listaHTML=document.getElementById("listaAmigos");
    for (let element of arrayAmigos) {
        listaHTML.innerHTML += `<li>${element}</li>`;
    }
}

function limpiarListaHTML(){
    listaHTML=document.getElementById("listaAmigos").innerHTML = "";
}

function amigoSecreto(numero){
    document.getElementById("resultado").innerHTML = arrayAmigos[numero];
}

