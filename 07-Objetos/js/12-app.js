// 46. El Object Constructor

//Literal object
const product = {
    nombre : 'Monitor 20 pulgadas',
    precio : 200,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`);
    }
}

// Object Constructor

function Product(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const product2 = new Product('Monitor 24 Pulgadas', 500);
console.log(product2);

const product3 = new Product('Television', 100);
console.log(product3);