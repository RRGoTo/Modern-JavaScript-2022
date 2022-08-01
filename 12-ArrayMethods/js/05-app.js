// 92. .find
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Con foreach
let resultado = '';
carrito.forEach((product, i) => {
    if (product.nombre === 'Tablet') {
        resultado = carrito[i];
    }
});

console.log(resultado);

// Con find
const findResult = carrito.find(product => product.nombre == 'Tablet');
console.log(findResult);