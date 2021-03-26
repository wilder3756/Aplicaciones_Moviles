/* Parte de productos */
let products = [];
let listProducts, listCarrito, añadido=false;

function initProducts(){
    var prod1={id:1, img:"img/productos_prod1.jpeg", titulo:"Mini Cultivo", desc:"¡Este producto es perfecto para iniciar! Él área de monitoreo es de menos de un metro cuadrado. Pero claro, con todos los beneficios de nuestro sistema.", carro:{desc:"¡Este producto es perfecto para iniciar!", fecha:"", pago:false}};
    var prod2={id:2, img:"img/productos_prod2.jpeg", titulo:"Cultivo mediano", desc:"¡Para continuar creciendo en esta experiencia! Si tienes un cultivo entre 1 y 5 metros cuadrados este sistema es perfecto para ti.", carro:{desc:"¡Para continuar creciendo en esta experiencia!", fecha:"", pago:false}};
    var prod3={id:3, img:"img/productos_prod3.jpeg", titulo:"Cultivo familiar", desc:"¡Para los más experimentados! Tu que ya tienes experiencia cultivado, es el momento de llevar esto a otro nivel. Cultivos entre 5 y 10 metros cuadrados", carro:{desc:"¡Para los más experimentados!", fecha:"", pago:false}};
    var prod4={id:4, img:"img/productos_prod4.jpeg", titulo:"Experiencia personalizada", desc:"Diseñemos juntos una experiencia fuera de nivel y bajo tus necesidades específicas. ¡Explora las grandes cosas que podemos hacer por tu cultivo!", carro:{desc:"¡Explora las grandes cosas que podemos hacer por tu cultivo!", fecha:"", pago:false}};

    products = [prod1, prod2, prod3, prod4];

    listProducts = document.getElementById("listProducts");
    cargarProducts();

    listCarrito = document.getElementById("listCarrito");
}

function añadirProduct(){
    var i;
   	for (i=0;i<listProducts.length;i++){ 
      	if (listProducts[i].checked) break; 
   	}
    var prod = products[listProducts[i].value-1];
    prod.carro.fecha = new Date().toDateString();
    if(current.products != null){
        for(var j in current.products){
            if(prod.id == current.products[j].id){
                alert("El producto "+prod.titulo+" ya se encuentra en tu carro de compras");
                return false;
            }
        }
        current.products.push(prod);
    }
    else{
        current.products = [prod];
    }
    alert("Se ha añadido el producto " +prod.titulo+" al carro de compras");
    añadido=true;
    localStorage.setItem("usuarios",JSON.stringify(usuarios));
    return true;
}

function irPagos(){
    cargarCarrito();
    ocultarSecciones();
    pago.classList.remove("ocultar");
}

function pagar(){
    if(!añadido){
        alert("No tiene productos para pagar");
        return false;
    }
    for(var i in current.products){
        current.products[i].carro.pago = true;
    }
    alert("Pago exitoso.");
    añadido=false;
    localStorage.setItem("usuarios",JSON.stringify(usuarios));
    cargarCarrito();
}

function cargarProducts(){
    var template='', inputs='', content='';
    for(var i in products){
        inputs +='<input type="radio" name="slider" value="'+products[i].id+'" class="slider_nav"';
        inputs += i==0 ? 'checked="checked">':'>';

        content +='<div class="slider_contents"><img class="slider_image" src="'+products[i].img+'">'
        content +='<h2 class="slider_caption">'+products[i].titulo+'</h2>';
        content +='<p class="slider_txt">'+products[i].desc+'</p></div>';
    }
    template +=inputs+'<div class="slider_inner">'+content+'</div>';
    listProducts.innerHTML=template;

    botonAñadir.addEventListener("click",añadirProduct);
    botonCarro.addEventListener("click",irPagos);

    botonPagar.addEventListener("click",pagar);
}

function cargarCarrito(){
    var template='';
    for(var i in current.products){
        template +='<figure class="fir-image-figure"><a class="fir-imageover">';
        template +='<img class="fir-author-image fir-image" src="'+current.products[i].img+'">';
        template +='<figcaption><div class="fig-title">'+current.products[i].titulo+'</div>';
        template +='<div class="fig-subtitle">'+current.products[i].carro.desc+'</div>';
        template +='<div class="fig-details">'+current.products[i].carro.fecha+'&#8212; ';
        template += current.products[i].carro.pago ? "Pagado" : "Pendiente";
        template +='</div></figcaption></a></figure>';
    }
    listCarrito.innerHTML= template!='' ? template :'<h1> Aun no ha añadido productos a su carro de compras';
}