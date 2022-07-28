// 41. El Problema con los objetos
const product = {
    nombre : 'Monitor 20 pulgadas',
    precio : 200,
    disponible : true
}

product.disponible = false;

delete product.precio;

console.log(product);

// El pro blema es que aunque el objeto se declare como CONST sus propiedades sis e pueden modificar.