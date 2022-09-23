//pre-entrega 2

//const
const cards = document.querySelector("#tarjetas");
const carro = document.querySelector("#carrito");
const total = document.querySelector("#totalCarrito");
let carrito = JSON.parse(localStorage.getItem("carrito")) || []; // operador OR

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
// destructuring

function hacerCards(arrayConPrendas) {
  cards.innerHTML = "";
  arrayConPrendas.forEach(prenda => {
    let {imagen, nombre, precio,id} = prenda

    cards.innerHTML += `<article><div class="card p-3" style="width: 18rem;">
    <img src="../img/${imagen}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="">${nombre}</h5>
      <p class="">$${precio}</p>
      <button class="carrito" id="btn-agregar${id}">Comprar</button>

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

//destructuring

  function mostrarCarrito(){
    carro.innerHTML = "";
    carrito.forEach(prend=>{
      let {nombre, imagen, cantidad, id} =prend
      carro.innerHTML += ` <div class="container text-center">
      <div class="row">
     <div class="col">
     <h4 class="">${nombre}</h4>
     <img src="../img/${imagen}" alt="..." style="width: 4rem">
      </div>
      <div class="col">
      <p class="">Cantidad:${cantidad}</p>
      </div>
      <div class="col">
      <button class="carrito btn btn-info" id="btn-borrarUno${cantidad}">-</button>
      <button class="carrito btn btn-danger" id="btn-sumarUno${cantidad}">+</button>
      </div>
      <div class="col">
      <p class="">$${prend.precio * prend.cantidad}</p>
       </div>
       <div class="col">
       <button class="carrito btn btn-secondary" id="btn-borrar${id}">Vaciar carrito</button>
      </div>
      </div>
      </div>`
        
    })

    let totalCarrito = carrito.reduce((acc, el) => acc + el.precio * el.cantidad,0)
    total.innerHTML = `
    <h5 class="">El total de su compra es $${totalCarrito}</h5>
    `
    console.log(totalCarrito);
    localStorage.setItem('totalCarrito', JSON.stringify(totalCarrito))
    localStorage.setItem("carro",JSON.stringify(carrito))
     borrarPrenda();
     borrarUno() 

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
// FUNCION BORRAR DE A UNO (NO FUNCIONA)
function borrarUno() {

  carrito.forEach(prenda=>{
    document.querySelector(`#btn-borrarUno${prenda.cantidad}`).addEventListener("click",()=>{
      
      let verificacion = carrito.some(prend=>prend.cantidad === prenda.cantidad);
      let indicePrenda = carrito.indexOf(prenda);
      if(verificacion === false){
         
        carrito[indicePrenda].cantidad - 1;
        console.log(carrito[indicePrenda].cantidad);
       
      
      }
        mostrarCarrito();
	


    })
  })
  
}


hacerCards(prendas); 
mostrarCarrito();

/* FUNCIONALIDAD DEL FILTRO */

const input = document.querySelector ("#ingreso");


function escucharInput (){
  input.addEventListener("input",()=>{
    hacerCards(prendas.filter(el=>el.nombre.includes(input.value))); 
  })
}

escucharInput()



