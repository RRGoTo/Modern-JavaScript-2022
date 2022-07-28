// 47. Object .keys, .values y .entries
const product = {
    nombre : 'Monitor 20 pulgadas',
    precio : 200,
    disponible: true
}

console.log(Object.keys(product)); // Devuelve las propiedades del object
console.log(Object.values(product)); // Devuelve los valores del object
console.log(Object.entries(product)); // Devuelve todo en forma de parejas