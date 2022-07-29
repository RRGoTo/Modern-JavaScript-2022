// 52. Añadir nuevos elementos al fin o Inicio de un array
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