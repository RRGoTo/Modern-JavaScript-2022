// 69. Arrow Functions en un forEach y un map
const car = [
    {name: 'Monitor 27 pulgadas', price: 500},
    {name: 'TV', price: 100},
    {name: 'Tablet', price: 300},
    {name: 'Audifonos', price: 400},
    {name: 'Teclado', price: 700},
    {name: 'Celular', price: 700},
]

car.forEach( product => console.log(`${product.name} - Precio: ${product.price}`) );

let newArray = car.map(product => console.log(`${product.name} - Precio: ${product.price}`));

console.log(newArray);