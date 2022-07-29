// 65. Ejemplo con múltiples funciones que se pasan valores
function sumar(a, b) {
    return a + b;
}

const result = sumar(2,3);

console.log(result);

// Ejemplo mas avanzado 
let total = 0;
function addToCar(price) {
    return total += price;
}
function taxCalculation(total) {
    return total * 1.15;
}

total = addToCar(300);
total = addToCar(100);
total = addToCar(600);

const totalToPay = taxCalculation(total);

console.log(`El total a pagar es de ${totalToPay}`);