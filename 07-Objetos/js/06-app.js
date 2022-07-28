// 40. Destructuring de Objetos Anidados
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

const { nombre, information, information:{fabricacion, fabricacion: { pais } } } = product