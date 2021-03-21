/* Parte de productos */
let products = [];
let listProducts;

function initProducts(){
    var prod1={id:1, img:"img/productos_prod1.jpeg", titulo:"Mini Cultivo", desc:"¡Este producto es perfecto para iniciar! Él área de monitoreo es de menos de un metro cuadrado. Pero claro, con todos los beneficios de nuestro sistema.", carro:{desc:"¡Este producto es perfecto para iniciar!", pago:false}};
    var prod2={id:2, img:"img/productos_prod2.jpeg", titulo:"Cultivo mediano", desc:"¡Para continuar creciendo en esta experiencia! Si tienes un cultivo entre 1 y 5 metros cuadrados este sistema es perfecto para ti.", carro:{desc:"¡Para continuar creciendo en esta experiencia!", pago:false}};
    var prod3={id:3, img:"img/productos_prod3.jpeg", titulo:"Cultivo familiar", desc:"¡Para los más experimentados! Tu que ya tienes experiencia cultivado, es el momento de llevar esto a otro nivel. Cultivos entre 5 y 10 metros cuadrados", carro:{desc:"¡Para los más experimentados!", pago:false}};
    var prod4={id:4, img:"img/productos_prod4.jpeg", titulo:"Experiencia personalizada", desc:"Diseñemos juntos una experiencia fuera de nivel y bajo tus necesidades específicas. ¡Explora las grandes cosas que podemos hacer por tu cultivo!", carro:{desc:"¡Explora las grandes cosas que podemos hacer por tu cultivo!", pago:false}};

    products = [prod1, prod2, prod3, prod4];

    listProducts = document.getElementById("listProducts");
    cargarProducts();
}

function añadirProduct(){
    var i;
   	for (i=0;i<listProducts.length;i++){ 
      	if (listProducts[i].checked) break; 
   	}
    var prod = products[listProducts[i].value-1];
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
    for(var i in usuarios){
        if(usuarios[i].user == current.user){
            usuarios[i] = current;
            localStorage.setItem("usuarios",JSON.stringify(usuarios));
            return true;
        }
    }
}

function irPagos(){
    ocultarSecciones();
    pago.classList.remove("ocultar");
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
}