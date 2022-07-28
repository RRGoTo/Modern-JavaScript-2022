// 42. Congelar un Objeto para no poderlo modificar
'use strict';
const product = {
    nombre : 'Monitor 20 pulgadas',
    precio : 200,
    disponible : true
}

Object.freeze(product); // Permite congelar el objeto para que sea imposible de modificar.

// product.disponible = false;
// product.image = 'image.jpg';
// delete product.precio;

console.log(product);

console.log(Object.isFrozen(product)); // Indica si un objeto esta congelado.