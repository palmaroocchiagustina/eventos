
//

const button = document.getElementById ("button");
const input = document.getElementById ("ingreso");
const article = document.getElementById ("card");
const imagen = document.getElementById("imagen");
const nombre = document.getElementById("nombre");
const precio = document.getElementById("precio");



//stock

const prendas = [

    {nombre : "remera",precio: 2000},
    {nombre : "top rayas",precio: 3000},
    {nombre : "jeans",precio: 10000},
    {nombre : "campera jeans",precio: 12000},
    {nombre : "zapatillas",precio: 20000},
    {nombre : "blazer lino",precio: 20000},
  
  ]

  //pRODUCTOS(NOMBRE, PRECIO)

function Productos(imagen, nombre, precio) {
    
    this.imagen = imagen;
    this.nombre = nombre;
    this.precio = parseInt(precio);
    
}


// modificar el DOM

function prendaSeleccionada(prendas) {

    let html = "";
    for (const prenda of prendas) {

    html= `<article><div class="card p-3"  style="width: 18rem;">
        <img src="${prenda.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="${prenda.nombre} "></h5>
          <p class="${prenda.precio} "></p>
          <a href="#" class="btn btn-primary id=${prenda.nombre}">Comprar</a>
        </div></article>
        `
          article.innerHTML += html;
  
        
    }
    
}


//funcion generica de push 

function cargarProductos(arr, valor) {
    
    return arr.push(valor);
}


//fc filtrar por nombre

function filtrarNombre(arr, filtro) {

        const filtrado = arr.filter ((el)=>{
    
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

button.addEventListener("click",()=>{
  
    const prendaSelect = filtrarNombre(prendas,ingreso.value);
    console.log(prendaSelect);
    article.innerHTML="";
    prendaSeleccionada(prendas)

})



