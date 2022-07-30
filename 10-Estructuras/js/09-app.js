// 79. El Operador Ternario
const autenticado = true;
const puedePagar = false;

console.log(autenticado ? 'Sí esta autentica' : 'No esta autenticado');
console.log(autenticado ? puedePagar ? 'Si esta autenticado y pued' : 'Si esta utenticado, no puede' : 'No esta autenticado');