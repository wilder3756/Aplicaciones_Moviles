var userL_txt, passwL_txt,
    nameR_txt, emailR_txt, userR_txt, passwR_txt;
var usuarios = [], current={};

function initPersistencia(){
    //Analizar el local storage
    usuarios = JSON.parse(localStorage.getItem("usuarios"))==null ? usuarios=[]: JSON.parse(localStorage.getItem("usuarios"));
    //Inicializar variables creando referencias con los text box y botones
    initRegistro();
    initLogin();
}
/* Parte para registrar */
function initRegistro(){
    nameR_txt = document.getElementById("nombreR");
    emailR_txt = document.getElementById("emailR");
    userR_txt = document.getElementById("userR");
    passwR_txt = document.getElementById("passwR");

    botonRegistrarse.addEventListener("click",registrar);
}

function registrar(){
    //Validar que se digiten datos
    if(nameR_txt.value=="" || emailR_txt.value=="" || userR_txt.value=="" || passwR_txt.value==""){
        alert("Debe llenar todos los campos");
        return false;
    }
    //Crear usuario
    var usuario = {};
    usuario.name = nameR_txt.value;
    usuario.email = emailR_txt.value;
    usuario.user = userR_txt.value;
    usuario.passw = passwR_txt.value;
    usuario.alerts = null;
    usuario.products = null;
    //Validar que el usuario no exista
    for(var i in usuarios){
        if(usuarios[i].user == userR_txt.value){
            alert("Ya existe ese nombre de usuario");
            return false;
        }
    }
    //Agregar el usuario a la cola y al local storage
    usuarios.push(usuario);
    current=usuario;
    localStorage.setItem("usuarios",JSON.stringify(usuarios));
    //Adecuar los campos de texto y las notificaciones (alerts)
    adecuarCampos(usuario);
    irInicio();
}

function adecuarCampos(usuario){
    //Vaciar campos para el registro
    nameR_txt.value="";
    emailR_txt.value="";
    userR_txt.value="";
    passwR_txt.value="";
    //Dejar el de usuario login como forma de "recordar el usuario"
    userL_txt.value=usuario.user;
    passwL_txt.value="";
}

/* Parte para login */
function initLogin(){
    userL_txt = document.getElementById("user");
    passwL_txt = document.getElementById("passw");

    botonIngresar.addEventListener("click",iniciarSesion);
}

function iniciarSesion(){
    //Validar campos
    if(userL_txt.value=="" || passwL_txt.value==""){
        alert("Ingrese usuario y contraseña");
        return false;
    }
    //Buscar el usuario y validar contraseña
    for(var i in usuarios){
        if(usuarios[i].user == userL_txt.value && usuarios[i].passw == passwL_txt.value){
            current=usuarios[i];
            adecuarCampos(usuarios[i]);
            irInicio();
            return true;
        }
    }
    alert("Usuario y/o contraseña incorrectos");
}

