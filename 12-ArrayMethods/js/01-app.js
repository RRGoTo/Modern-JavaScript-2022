// 88. .some
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
/**
 * * includes -> Comprueba si un valor existe en un array, no funciona con arrays de objetos
 * * some -> Es lo mismo que includes pero para arrays de objetos
 */
const result = meses.includes('Enero');
console.log(result);

// Ahora utilizamos el .some
const exist = carrito.some((product)=>{
    return product.nombre === 'Tablet';
});

console.log(exist);

// array tradicional
const exist2 = meses.some(mes => mes === 'Febrero');
console.log(exist2);