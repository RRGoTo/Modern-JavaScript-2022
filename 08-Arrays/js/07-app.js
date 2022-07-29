// 54. Eliminar elementos con Splice
const car = [];

const product = {
    name: 'Monitor 32 pulgadas',
    precio: 400
}

const product2 = {
    name: 'celular',
    precio: 200
}

// .push agregar al final del array

car.push(product2);
car.push(product);

const product3 = {
    name: 'Teclado',
    precio: 50
}

// .unshift agregar al inicio del array
car.unshift(product3);

console.table(car);

// Eliminar último elemento del array
car.pop();

console.table(car);

// Eleminar primer elemento del array
car.shift();

/**
 *   Eliminar con el metodo splice  toma 2 parametros:
 * * 1. A partir de que posición emepezar a eliminar
 * * 2. Cuanto elementos va a eliminar
 */

car.splice(1, 1);