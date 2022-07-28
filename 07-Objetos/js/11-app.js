// 45. Funciones en Objetos y acceder a sus valores

const product = {
    nombre : 'Monitor 20 pulgadas',
    precio : 200,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`);
    }
}

product.mostrarInfo();