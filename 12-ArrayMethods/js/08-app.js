// 95. Spread Operator
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

const meses2 = ['Agosto', ...meses];
console.log(meses2);

const product = {nombre: 'Disco Duro', precio: 300};
const carrito2 = [product, ...carrito];
console.log(carrito2);