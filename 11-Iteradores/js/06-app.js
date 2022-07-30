// 85. .forEach y .map
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar'];

pendientes.forEach( (pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`);
})

const car = [
    {name: 'Monitor 27 pulgadas', price: 500},
    {name: 'TV', price: 100},
    {name: 'Tablet', price: 300},
    {name: 'Audifonos', price: 400},
    {name: 'Teclado', price: 700},
    {name: 'Celular', price: 700},
]

const newArray = car.forEach(product => product.name);
const newArray2 = car.map(product => product.name);

console.log(newArray);
console.log(newArray2);