// Lección 37. Agregar o Eliminar Propiedades de un objeto
const product = {
    nombre : 'Monitor 20 pulgadas',
    precio : 200,
    disponible : true
}

// Agregar nuevas propiedades al objeto
product.image = 'imagen.jpg';

// Eliminar propiedades del objeto
delete product.disponible;