
//

const button = document.getElementById ("button");
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
const ul = document.getElementById("lista");



// solo filtra si es con mayuscula

//stock

const prendas = [

    {nombre : "Remera",precio: 2000, id:"remera2000"},
    {nombre : "Top rayas",precio: 3000, id:"top_rayas3000"},
    {nombre : "Jeans",precio: 10000,id: "jeans10000"},
    {nombre : "Campera de jeans",precio: 12000,id: "campera1-jeans12000"},
    {nombre : "Zapatillas",precio: 20000, id:"zapatillas20000"},
    {nombre : "Blazer de lino",precio: 20000, id:"blazer_lino20000"},
  
  ]

  //pRODUCTOS(NOMBRE, PRECIO)

function Productos(imagen, nombre, precio, id) {
    
    this.imagen = imagen;
    this.nombre = nombre;
    this.precio = parseInt(precio);
    this.id= id;
    
}

// modificar el DOM

function prendaSeleccionada(prendas) {
    
        for (const prenda of prendas) {

            const li = document.createElement('li')
        
            li.innerHTML=`<article><div class="card p-3" id=${prenda.nombre}  style="width: 18rem;">
            <img src="${prenda.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="">${prenda.nombre}</h5>
              <p class="">${prenda.precio}</p>
              <a href="#" class="btn btn-primary">Comprar</a>
            </div></article>
            `
            ul.append(li)
        
        }
}
prendaSeleccionada(prendas);
//funcion generica de push 

function cargarProductos(arr, valor) {
    
    return arr.push(valor);
}


//fc filtrar por nombre

function filtrarNombre(arr, filtro) {

        let filtrado = arr.filter ((el)=>{
            
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
    //prendaSeleccionada(prendas);
    ocultar(prendas,filtrarNombre(prendas,filtro));

})



function ocultar(prendas,filtrado) {
    for (const prenda of prendas) {
        let x = document.getElementById(Productos.id);
        if (filtrado.id != prenda.id) {
        
            x.style.display = "none"
            
        } else {
            x.style.display = "block"
        }
        
        }   
}


