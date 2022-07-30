// 89. .findIndex para encontrar la posición en un array
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach((mes, i)=>{
    if (mes === 'Abril') {
        console.log(`Encontrado en el indice ${i}`);
    }
});

// Devuelve el indice donde se encuentra el primer elemento buscado.
// si devuelve -1 indica que no encontro el elemento.
const indice = meses.findIndex(mes => mes === 'Abril');
console.log(indice);

// Encontrar el indice en un arreglo de  objetos
const indice2 = carrito.findIndex(product => product.precio === 100);