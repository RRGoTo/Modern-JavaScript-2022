// 74. Mayor o Igual y else if
const money = 300;
const totalToPay = 300;
const card = false;
const check = false;

if (money == totalToPay) {
    console.log('Sí podemos pagar');
} else if(check){
    console.log('Si tengo cheque');
} else if(card){
    console.log('Si puedo pagar porque tengo la tarjeta');
} else {
    console.log('Fondos insuficientes');
}