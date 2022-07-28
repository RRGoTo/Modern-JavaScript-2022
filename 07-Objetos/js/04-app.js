//38. Destructuring de Objetos 
const product = {
    nombre : 'Monitor 20 pulgadas',
    precio : 200,
    disponible : true
}

// Destructuring
const {nombre, precio, disponible} = product;

console.log(nombre);
console.log(precio);
console.log(disponible);