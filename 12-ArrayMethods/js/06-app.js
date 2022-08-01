// 93. .every
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Evalua que TODOS los elementos del array cumplan con una condición
const resultado = carrito.every(product => product.precio < 500);
console.log(resultado);

//Evalua que almenos un elemento cumpla con la condición 
const resultado2 = carrito.some(product => product.precio < 500);
console.log(resultado2);