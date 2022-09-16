//pre-entrega 2

//const
const cards = document.querySelector("#tarjetas");
const carro = document.querySelector(".carrito");
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
  this.precio = parseInt(precio);
  this.id= id;
  
}


//modificar el DOM

function hacerCards() {
  prendas.forEach(prenda => {

    cards.innerHTML += `<article><div class="card p-3" style="width: 18rem;">
    <img src="../img/${prenda.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="">${prenda.nombre}</h5>
      <p class="">${prenda.precio}</p>
      <button class="carrito" id="btn-agregar${prenda.id}">Comprar</button>

    </div></article> 
    `
    
  });
}

hacerCards();
// funcion comprar
function botonComprar() {

  prendas.forEach(prenda => {
     document.querySelector(`#btn-agregar${prenda.id}`).addEventListener("click",()=>{

      agregarCarrito(prenda);
     

     })
  });
  
}
botonComprar();

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
        carro.innerHTML += `<article><div class="card p-3" style="width: 18rem;">
        <div class="card-body">
          <h5 class="">Carrito</h5>
          <p class="">${prend.precio * prend.cantidad}</p>
          <button class="carrito" id="btn-borrar${prend.id}">Borrar</button>
          <button class="carrito" id="btn-borrarUnoSolo${prend.id}">-</button>
          `
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

mostrarCarrito();










/*
  function mostrarCarrito(prenda) {
    
    prendas.forEach(prend=>{
      carro.innerHTML= "";
     carro.innerHTML += `<article><div class="card p-3" style="width: 18rem;">
    <div class="card-body">
      <h5 class="">Carrito</h5>
      <h6>Cantidad : ${prend.cantidad}</h6>
      <p class="">${prend.precio * prend.cantidad}</p>
      <button class="carrito" id="btn-borrar${prend.id}">Borrar</button>

    </div></article> 
    `

    })
  }





/*
//

const buscar = document.querySelector ("#buscar");
const input = document.querySelector ("#ingreso");
const ul = document.querySelector("#lista");
const div1 = document.querySelector(".container");
const div2 = document.querySelector(".carrito");

//stock

const prendas = [

    {imagen : "remera-negra.jpg", nombre: "remera",precio: 2000, id:"remera2000"},
    {imagen : "top rayado.jpg",nombre : "top rayas",precio: 3000, id:"top_rayas3000"},
    {imagen : "jeans.jpg",nombre : "jeans",precio: 10000,id: "jeans10000"},
    {imagen : "campera de jeans.jpg",nombre : "campera de jeans",precio: 12000,id: "campera1-jeans12000"},
    {imagen : "zapatillas cara.jpg",nombre : "zapatillas",precio: 20000, id:"zapatillas20000"},
    {imagen : "blazer rosa.jpg",nombre : "blazer de lino",precio: 20000, id:"blazer_lino20000"},
  
  ]

  //pRODUCTOS (constructor)

function Productos(imagen, nombre, precio, id) {
    
    this.imagen = imagen;
    this.nombre = nombre;
    this.precio = parseInt(precio);
    this.id= id;
    
}

// modificar el DOM

function prendaSeleccionada(arr) {
    let html="";
        for (const item of arr) {
        
            html=`<article><div class="card p-3" style="width: 18rem;">
            <img src="../img/${item.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="">${item.nombre}</h5>
              <p class="">${item.precio}</p>
              <button class="carrito" id="btn-agregar${item.id}">Comprar</button>

            </div></article> 
            `
            ul.innerHTML += html;

        }
      
        }


prendaSeleccionada(prendas); //se pintan todas las tarjetas

//fc filtrar por nombres

function filtrarNombre(arr, filtro) {

    let filtrado = arr.filter((el)=>{
       
        return el.nombre.includes(filtro);
        
    });
    
    
      return filtrado;

    }


//eventos

ingreso.addEventListener("input", ()=>{

let prendaFiltro = filtrarNombre(prendas,ingreso.value);
console.log(prendaFiltro);

}
)

buscar.addEventListener("click",()=>{

let prendaFiltro = filtrarNombre(prendas,ingreso.value);
console.log(prendaFiltro);
ul.innerHTML="";
prendaSeleccionada(prendaFiltro); // se pintan solo las que estan filtradas

})

function btnComprar(prendas) {

  prendas.forEach(item => {
    document.querySelector(`#btn-agregar${item.id}`).addEventListener("click",()=>{
   //console.log("hola");
     cargarProductos(filtrado);
    })
    
  });

}
btnComprar(prendas);

let carrito=[];
console.log(carrito);
//funcion de push 

function cargarProductos(prenda) {
    
    carrito.push(prenda);
}
*/