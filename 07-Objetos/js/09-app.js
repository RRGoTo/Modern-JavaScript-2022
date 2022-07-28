// 43. Sellar un Objeto
'use strict';
const product = {
    nombre : 'Monitor 20 pulgadas',
    precio : 200,
    disponible : true
}

Object.seal(product); // Permite modificar las propiedades existentes pero no agregar nuevas o eliminar propiedades.

// product.disponible = false;
// product.image = 'image.jpg';
// delete product.precio;

console.log(product);

console.log(Object.isSealed(product)); // Indica si un objeto esta sellado.