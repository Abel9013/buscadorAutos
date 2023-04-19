// Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 10;
console.log(`El max es ${max} y el minimo es ${min} `);
// const year = document.querySelector('#year');

// Eventos
document.addEventListener('DOMContentLoaded', ()=>{
  mostrarAutos(); //Muestra los autos al cargar
  
  // Llena las opciones de año
  llenarSelect();
} )


// Funciones


function mostrarAutos() {
  autos.forEach(auto => {
    const { marca, modelo, year, puertas, transmision, color, precio } = auto
    const autoHTML = document.createElement('P');
    autoHTML.textContent = ` 
    ${marca} ${modelo} - ${year} - ${puertas} puertas - Transmision: ${transmision} - color: ${color} - Precio: ${precio}
      `
      resultado.appendChild(autoHTML)
  });
  // Insertar en el HTML
}

// Genera los años del select
function llenarSelect(){
  console.log("llenando el select");
}