// 56. .forEach para iterar un array
const car = [
    {name: 'Monitor 27 pulgadas', price: 500},
    {name: 'TV', price: 100},
    {name: 'Tablet', price: 300},
    {name: 'Audifonos', price: 400},
    {name: 'Teclado', price: 700},
    {name: 'Celular', price: 700},
]

car.forEach(function (product) {
    let message = `${product.name} - Precio: ${product.price}`;
    console.log(message);
});