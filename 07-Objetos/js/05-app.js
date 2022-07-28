// 39. Objetos dentro de Objetos
const product = {
    nombre : 'Monitor 20 pulgadas',
    precio : 200,
    disponible : true,
    information : {
        medidas : {
            peso: '1 kg',
            medida: '1m'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}

console.log(product.information.medidas.peso);