// 76. El Operador && para revisar que se cumplan 2 o más
const user = false;
const canPay = false;

if (user && canPay) {
    console.log('Si puede comprar');
} else if(!canPay && !user) {
    console.log('No, no puedes comprar');
} else if(!user) {
    console.log('Inicia sesión o crea una cuenta');
} else if(!canPay) {
    console.log('Fondos insuficientes');
}