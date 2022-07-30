// 86. for ....of

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar'];


const car = [
    {name: 'Monitor 27 pulgadas', price: 500},
    {name: 'TV', price: 100},
    {name: 'Tablet', price: 300},
    {name: 'Audifonos', price: 400},
    {name: 'Teclado', price: 700},
    {name: 'Celular', price: 700},
]

for (let pendiente of pendientes) {
    console.log(pendiente);
}


for (let product of car) {
    console.log(product.name);
}