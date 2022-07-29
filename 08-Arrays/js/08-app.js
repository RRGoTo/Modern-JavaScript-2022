// 55. Destructuring de Arrays
const product = {
    nombre : 'Monitor 20 pulgadas',
    precio : 200,
    disponible : true
}

// Destructuring
const {nombre, precio, disponible} = product;

// Destructuring con Arrays
const numbers = [10, 20, 30, 40, 50];

const [, , third, ...last] = numbers;
console.log(third);
console.log(last);