let splash, iniciarsesion, recuperar, registro, inicio, ajuste, editperfil, notificacion, detallenoti, analisis, detallestat, productos, 
    pago, secciones;

let botonIngresar, botonRegistrar, botonContraseña, botonRecuperar, botonRegistrarse, botonEditar, botonCerrar, botonGuardar, 
    botonAtrasNoti, botonSiguienteNoti, botonDetalleStat, botonAñadir, botonCarro, botonPagar;

let botonsLogin, botonsAnalisis, botonsNoti, botonsInicio, botonsCompras, botonsAjuste;

window.onload = ()=>{
    crearReferencias();
    setTimeout(irIniciarSesion,1500);
    crearEventos();
    initPersistencia();
}

function crearReferencias(){
    splash = document.getElementById("splash");
    iniciarsesion = document.getElementById("iniciarsesion"); 
    recuperar = document.getElementById("recuperar");
    registro = document.getElementById("registro");
    inicio = document.getElementById("inicio");
    ajuste = document.getElementById("ajuste");
    editperfil = document.getElementById("editperfil");
    notificacion = document.getElementById("notificacion");
    detallenoti = document.getElementById("detalle-noti");
    analisis = document.getElementById("analisis");
    detallestat = document.getElementById("detalle-stat");
    productos  = document.getElementById("productos");
    pago = document.getElementById("pago");
    secciones = [splash, iniciarsesion, recuperar, registro, inicio, ajuste, editperfil, notificacion, detallenoti, analisis, detallestat, productos, pago];

    botonIngresar = document.getElementById("botonIngresar");
    botonRegistrar = document.getElementById("botonRegistrar");
    botonContraseña = document.getElementById("botonContraseña");
    botonRecuperar = document.getElementById("botonRecuperar");
    botonRegistrarse = document.getElementById("botonRegistrarse");
    botonEditar = document.getElementById("botonEditar");
    botonCerrar = document.getElementById("botonCerrar");
    botonGuardar = document.getElementById("botonGuardar");
    botonAtrasNoti = document.getElementById("botonAtrasNoti");
    botonSiguienteNoti = document.getElementById("botonSiguienteNoti");
    botonDetalleStat = document.getElementById("botonDetalleStat");
    botonAñadir = document.getElementById("botonAñadir");
    botonCarro = document.getElementById("botonCarro");
    botonPagar = document.getElementById("botonPagar");
    
    botonsLogin = document.querySelectorAll(".botonsLogin");
    botonsAnalisis = document.querySelectorAll(".botonsAnalisis");
    botonsNoti = document.querySelectorAll(".botonsNoti");
    botonsInicio = document.querySelectorAll(".botonsInicio");
    botonsCompras = document.querySelectorAll(".botonsCompras");
    botonsAjuste = document.querySelectorAll(".botonsAjuste");
}

function crearEventos(){
    //botonIngresar.addEventListener("click",irInicio);
    botonRegistrar.addEventListener("click",irRegistro);
    botonContraseña.addEventListener("click",irRecuperar);
    botonRecuperar.addEventListener("click",irIniciarSesion);
    //botonRegistrarse.addEventListener("click",irInicio);
    botonEditar.addEventListener("click",irEditarPerfil);
    botonCerrar.addEventListener("click",irIniciarSesion);
    //botonGuardar.addEventListener("click",irAjuste);
    /*botonAtrasNoti.addEventListener("click",irInicio);
    botonSiguienteNoti.addEventListener("click",irInicio);*/
    botonDetalleStat.addEventListener("click",irDetalleStat);
    /*botonAñadir.addEventListener("click",irInicio);*/
    botonCarro.addEventListener("click",irPagos);
    botonPagar.addEventListener("click",irProducto);

    for(var i=0; i<=1; i++){
        botonsLogin[i].addEventListener("click",irIniciarSesion);
    }
    for(var i=0; i<=8; i++){
        botonsAnalisis[i].addEventListener("click",irAnalisis);
        botonsNoti[i].addEventListener("click",irNoti);
        botonsCompras[i].addEventListener("click",irCompras);
        botonsAjuste[i].addEventListener("click",irAjuste);
    }
    for(var i=0; i<=11; i++){
        botonsInicio[i].addEventListener("click",irInicio);
    }
}

function ocultarSecciones(){
    for (i in secciones){
        secciones[i].classList.add("ocultar");
    }
}

function irIniciarSesion(){
    ocultarSecciones();
    iniciarsesion.classList.remove("ocultar");
}

function irInicio(event){
    if(event != null) event.preventDefault()
    ocultarSecciones();
    inicio.classList.remove("ocultar");
}

function irRegistro(event){
    event.preventDefault()
    ocultarSecciones();
    registro.classList.remove("ocultar");
}

function irRecuperar(event){
    event.preventDefault()
    ocultarSecciones();
    recuperar.classList.remove("ocultar");
}

function irEditarPerfil(event){
    event.preventDefault()
    ocultarSecciones();
    editperfil.classList.remove("ocultar");
}

function irAjuste(event){
    if(event != null) event.preventDefault()
    ocultarSecciones();
    ajuste.classList.remove("ocultar");
}

function irDetalleAlert(){
    var id = parseInt(this.name)-1;
    cargarDetalleAlert(id);
    ocultarSecciones();
    detallenoti.classList.remove("ocultar");
}

function irDetalleStat(event){
    event.preventDefault()
    ocultarSecciones();
    detallestat.classList.remove("ocultar");
}

function irPagos(event){
    event.preventDefault()
    ocultarSecciones();
    pago.classList.remove("ocultar");
}

function irProducto(event){
    event.preventDefault()
    ocultarSecciones();
    productos.classList.remove("ocultar");
}

function irAnalisis(event){
    event.preventDefault()
    ocultarSecciones();
    analisis.classList.remove("ocultar");
}

function irNoti(event){
    event.preventDefault()
    ocultarSecciones();
    notificacion.classList.remove("ocultar");
}

function irCompras(event){
    event.preventDefault()
    ocultarSecciones();
    productos.classList.remove("ocultar");
}