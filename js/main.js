
//

const buscar = document.getElementById ("buscar");
const input = document.getElementById ("ingreso");
const card1 = document.getElementById ("remera");
const card2 = document.getElementById ("blazer");
const card3 = document.getElementById ("camperajeans");
const card4 = document.getElementById ("jeans");
const card5 = document.getElementById ("toprayas");
const card6 = document.getElementById ("zapatillas");

const imagen = document.getElementById("imagen");
const nombre = document.getElementById("nombre");
const precio = document.getElementById("precio");
const comprar = document.getElementById("comprar");
const ul = document.querySelector(".cards");
const div = document.querySelector(".carrito");



// solo filtra si es con mayuscula

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
    
        for (const item of prendas) {
            let html= "";
            html=`<article><div class="card p-3" style="width: 18rem;">
            <img src="../img/${item.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="">${item.nombre}</h5>
              <p class="">${item.precio}</p>
              <button class="carrito" id="btn-comprar${item.id}">Comprar</button>

            </div></article> 
            `
            ul.innerHTML += html;

        }
        btnComprar();
}

prendaSeleccionada(prendas);

//declaro carrito 
let carrito =[];

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
    prendaSeleccionada(prendaFiltro);
    
    })
//funcion para comprar y eventoo click

function btnComprar(){
 

    prendas.forEach(prenda=>{
        document.querySelector(`#btn-comprar${prenda.id}`).addEventListener("click",()=>{
            cargarProductos(prenda);
        })
    })
}

//funcion de push

function cargarProductos(prenda) {
    
    carrito.push(prenda);
}

cargarProductos();

/*

function cards(){
    prendas.forEach(item=>{
        container.innerHTML += `<div style="padding: 20px; background-color:orange; border: 2px solid black;">
        <h4>${item.nombre}</h4>
        <p>$${item.precio}</p>
        <button class="btnCarrito" id="btn-comprar${item.id}">Comprar</button>
        </div>`
    })
    btnComprar();
}
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
      btnComprar();
}

prendaSeleccionada(prendas);
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
prendaSeleccionada(prendaFiltro);

})

function btnComprar() {

  prendas.forEach(prenda => {
    document.querySelector(`#btn-agregar${prenda.id}`).addEventListener("click",()=>{

        cargarProductos(prenda);
    })
    
  });

}

let carrito=[];
//funcion de push 

function cargarProductos(prenda) {
    
    carrito.push(prenda);
}

cargarProductos();*/