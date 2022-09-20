//pre-entrega 2

//const
const cards = document.querySelector("#tarjetas");
const carro = document.querySelector("#carrito");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//stock

const prendas = [

  {imagen : "remera-negra.jpg", nombre: "remera",precio: 2000, id:1},
  {imagen : "top rayado.jpg",nombre : "top rayas",precio: 3000, id:2},
  {imagen : "jeans.jpg",nombre : "jeans",precio: 10000,id: 3},
  {imagen : "campera de jeans.jpg",nombre : "campera de jeans",precio: 12000,id: 4},
  {imagen : "zapatillas cara.jpg",nombre : "zapatillas",precio: 20000, id:5},
  {imagen : "blazer rosa.jpg",nombre : "blazer de lino",precio: 20000, id: 6},

]
//pRODUCTOS (constructor)

function Productos(imagen, nombre, precio, id) {
    
  this.imagen = imagen;
  this.nombre = nombre;
  this.cantidad = cantidad;
  this.precio = parseInt(precio);
  this.id= id;
  
}


//modificar el DOM

function hacerCards(arrayConPrendas) {
  cards.innerHTML = "";
  arrayConPrendas.forEach(prenda => {

    cards.innerHTML += `<article><div class="card p-3" style="width: 18rem;">
    <img src="../img/${prenda.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="">${prenda.nombre}</h5>
      <p class="">${prenda.precio}</p>
      <button class="carrito" id="btn-agregar${prenda.id}">Comprar</button>

    </div></article> 
    `
    
  });
  botonComprar(arrayConPrendas); 
}

// funcion comprar
function botonComprar(arrayConPrendas) {

  arrayConPrendas.forEach(prenda => {
     document.querySelector(`#btn-agregar${prenda.id}`).addEventListener("click",()=>{

      agregarCarrito(prenda);
    

     })
  });
  
}


//agregar al carrito

function agregarCarrito(prenda){

  let verificacion = carrito.some(prend=>prend.id === prenda.id);
  if(verificacion===false){
      prenda.cantidad = 1;
      carrito.push(prenda);
  }
  else{
      let prendFind = carrito.find(prend=> prend.id===prenda.id);
      prendFind.cantidad++;
  }
  console.log(carrito);
  mostrarCarrito();
  }

  function mostrarCarrito(){
    carro.innerHTML = "";
    carrito.forEach(prend=>{

      carro.innerHTML += ` <div class="container text-center">
      <div class="row">
     <div class="col">
     <h4 class="">${prend.nombre}</h4>
     <img src="../img/${prend.imagen}" alt="..." style="width: 4rem">
      </div>
      <div class="col">
      <p class="">Cantidad:${prend.cantidad}</p>
      </div>
      <div class="col">
      <p class="">El total de su compra es de :$${prend.precio * prend.cantidad}</p>
       </div>
       <div class="col">
       <button class="carrito" id="btn-borrar${prend.id}">Borrar</button>
        </div>
      </div>
      </div>`
      /*
        carro.innerHTML += `<div class="list-group p-3" style="width: 18rem;">
        <div class="card-body">
          <h4 class="">Carrito</h4>
          <h5 class="">${prend.nombre}</h5>
          <p class="">Cantidad:${prend.cantidad}</p>
          <p class="">El total de su compra es de :$${prend.precio * prend.cantidad}</p>
          <button class="carrito" id="btn-borrar${prend.id}">Borrar</button>
          <button class="carrito" id="btn-borrarUnoSolo${prend.id}">-</button>
          `*/
        //el ultimo boton es para borrar de a uno (FALTA darle funcionalidad al boton ese)
        
    })
      localStorage.setItem("carro",JSON.stringify(carrito))
     borrarPrenda()
   
}

function borrarPrenda(){
  carrito.forEach(prenda=>{
      document.querySelector(`#btn-borrar${prenda.id}`).addEventListener("click",()=>{
         let indice = carrito.findIndex(element=>element.id===prenda.id);
          carrito.splice(indice,1);
          mostrarCarrito();
      })
  })
}


// total carrito

function totalCarrito() {

  const total = carrito.reduce((acc, el) => {

    return resultado = acc + el.precio * el.cantidad;
    
    },0);
    carrito.push(total)
  console.log(carrito);
}



hacerCards(prendas); 
mostrarCarrito();

/* FUNCIONALIDAD DEL FILTO */

const input = document.querySelector ("#ingreso");


function escucharInput (){
  input.addEventListener("input",()=>{
    hacerCards(prendas.filter(el=>el.nombre.includes(input.value))); // AQUI SE RENDERIZA NUEVAMENTE LOS PRODUCTOS QUE EL USUARIO PUEDE VER. LE ENVIO UN NUEVO ARRAY POR PARAMETRO.
  })
}

escucharInput()



