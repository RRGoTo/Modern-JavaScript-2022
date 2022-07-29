// 59. La Diferencia entre Function expression y Declaration

// Function Declaration - Permite ejecutar una funcion antes de ser declarada por el hosting 
sumar();
function sumar() {
    console.log(2+2);
}

// Function Expression - No permite ejecutar la funcion antes de ser declarada.
summar2(); 
const summar2 = function () {
    console.log(3+3);
}
