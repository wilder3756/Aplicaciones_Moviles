/* Parte de notificaciones (alerts) */
let alerts = [], botonsDetalleAlert=[];
let listAlerts, detalleAlert, numAlert;

function initAlerts(){
    var alert1={id:1, img:"img/regar_notificacion.svg", titulo:"Regar área 1", desc:"Recuerde regar su cultivo en los horas de la tarde", fecha:"Mar. 12, 2021 &#8212; hace 5m", detalle:{imgs:["img/regar_imagen1.jfif","img/regar_imagen2.jfif","img/regar_imagen3.jfif"], desc:"Intenta no mojar demasiado las partes aéreas de las plantas ya que el exceso de humedad en las flores y tallos puede propiciar que aparezcan hongos y otras plagas."}};
    var alert2={id:2, img:"img/analisis_notificaccion.svg", titulo:"Analisis área 3", desc:"Ya puede consultar el analisis del área 3", fecha:"Mar. 11, 2021 &#8212; hace 1 dia", detalle:{imgs:["img/regar_imagen1.jfif"], desc:"Descripcion."}};
    var alert3={id:3, img:"img/podar_notificacion.svg", titulo:"Podar área 2", desc:"Recuerde podar su cultivo", fecha:"Mar. 11, 2021 &#8212; hace 1 dia", detalle:{imgs:["img/regar_imagen1.jfif","img/regar_imagen2.jfif"], desc:"Descripcion."}};
    var alert4={id:4, img:"img/cosechar_notificacion.svg", titulo:"Cosecha Proxima", desc:"Su cultivo en el área 2 estara listo el proximo sabado", fecha:"Mar. 11, 2021 &#8212; hace 1 dia", detalle:{imgs:["img/regar_imagen1.jfif","img/regar_imagen2.jfif","img/regar_imagen3.jfif"], desc:"Descripcion."}};
    var alert5={id:5, img:"img/analisis_notificaccion.svg", titulo:"Analisis área 2", desc:"Ya puede consultar el analisis del área 2", fecha:"Mar. 10, 2021 &#8212; hace 2 dias", detalle:{imgs:["img/regar_imagen1.jfif"], desc:"Descripcion."}};
    var alert6={id:6, img:"img/abonar_notificacion.svg", titulo:"Abonar área 3", desc:"Recuerde Abonar el area 3", fecha:"Mar. 10, 2021 &#8212; hace 2 dias", detalle:{imgs:["img/regar_imagen1.jfif","img/regar_imagen2.jfif","img/regar_imagen3.jfif"], desc:"Descripcion."}};
    var alert7={id:7, img:"img/analisis_notificaccion.svg", titulo:"Analisis área 4", desc:"Ya puede consultar el analisis del área 4", fecha:"Mar. 10, 2021 &#8212; hace 2 dias", detalle:{imgs:["img/regar_imagen1.jfif"], desc:"Descripcion."}};

    alerts=[alert1, alert2, alert3, alert4 , alert5, alert6, alert7];

    listAlerts = document.getElementById("listAlerts");
    detalleAlert = document.getElementById("detalleAlert");
}

function irDetalleAlert(){
    var id = parseInt(this.name)-1;
    cargarDetalleAlert(id);
    numAlert=id;
    ocultarSecciones();
    detallenoti.classList.remove("ocultar");
}

function irSiguienteAlert(){
    if((numAlert+1) < alerts.length){
        cargarDetalleAlert(++numAlert);
    }
}

function irAnteriorAlert(){
    if((numAlert-1) > -1){
        cargarDetalleAlert(--numAlert);
    }
}

function cargarAlerts(){
    var template='';
    for(var i in alerts){
        template +='<figure class="fir-image-figure">';
        template +='<a class="fir-imageover" id="botonDetalleAlert_'+alerts[i].id+'" name="'+alerts[i].id+'">';
        template +='<img class="fir-author-image fir-image" src="'+alerts[i].img+'">';
        template +='<figcaption><div class="fig-title">'+alerts[i].titulo+'</div>';
        template +='<div class="fig-subtitle">'+alerts[i].desc+'</div>';
        template +='<div class="fig-details">'+alerts[i].fecha+'</div></figcaption></a></figure>';
    }
    listAlerts.innerHTML=template;

    botonsDetalleAlert=[];
    for(var i in alerts){
        botonsDetalleAlert.push(document.getElementById("botonDetalleAlert_"+alerts[i].id));
        botonsDetalleAlert[i].addEventListener("click", irDetalleAlert);
    }
    botonAtrasNoti.addEventListener("click",irAnteriorAlert);
    botonSiguienteNoti.addEventListener("click",irSiguienteAlert);
}

function cargarDetalleAlert(id){
    var template='<h2>'+alerts[id].titulo+'</h2> <div class="card"> <div class="card_imgs" role="slider">';
    var radios='', items='', controls='', navs='', i;
    for(i in alerts[id].detalle.imgs){
        //Los radios buttoms
        radios +='<input type="radio" id="s-'+(Number(i)+Number(1))+'" name="slider-control" ';
        radios += i==0 ? 'checked>':'>';
        //Imagenes
        items +='<li class="s-item s-item-'+(Number(i)+Number(1))+'" style="background-image: url('+alerts[id].detalle.imgs[i]+');"></li>';
        //Controls
        controls +=alerts[id].detalle.imgs.length != 1? '<label class="s-c-'+(Number(i)+Number(1))+'" for="s-'+(i+1)+'"></label>':'';
        //Flechas
        if( (Number(i)+Number(1)) < alerts[id].detalle.imgs.length){
            navs +='<label class="s-nav-'+(Number(i)+Number(1))+' right" for="s-'+(Number(i)+Number(2))+'"></label>';
            navs +='<label class="s-nav-'+(Number(i)+Number(2))+' left" for="s-'+(Number(i)+Number(1))+'"></label>';
        }
    }
    //Se deben cargar siempre 3 imagenes para que el slider funcione
    for(i; i<3; i++){
        items +='<li class="s-item s-item-'+(Number(i)+Number(1))+'" style="background-image: url('+alerts[id].detalle.imgs[0]+');"></li>';
    }

    template +=radios+'<ul class="s-content">'+items+'</ul><div class="s-control">'+controls+'</div><div class="s-nav">'+navs+'</div></div>';
    template +='<div class="card_details"><p>'+alerts[id].detalle.desc+'</p></div></div>';

    detalleAlert.innerHTML=template;
}