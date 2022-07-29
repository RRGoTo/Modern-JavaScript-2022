// 53. Crear un nuevo arreglo con el spread operator
const car = [];

const product = {
    name: 'Monitor 32 pulgadas',
    precio: 400
}

const product2 = {
    name: 'celular',
    precio: 200
}

const product3 = {
    name: 'Teclado',
    precio: 50
}

let resultado;

resultado = [...car, product];
resultado = [...resultado, product2];
resultado = [product3, ...resultado];

console.table(resultado);