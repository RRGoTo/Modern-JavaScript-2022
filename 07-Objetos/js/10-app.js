// 44. Copiar 2 objetos
const product = {
    nombre : 'Monitor 20 pulgadas',
    precio : 200,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

console.log(producto);
console.log(medidas);

const resultado = Object.assign(product, medidas);
const resultado2 = {...product, ...medidas}; // Spread Operator

console.log(resultado);
console.log(resultado2);