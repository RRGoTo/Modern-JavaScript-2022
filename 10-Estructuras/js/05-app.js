// 75. Switch para evaluar múltiples Condiciones

const payMethod = "efectivo";

switch (payMethod) {
  case "efectivo":
    pay();
  case "cheque":
    console.log(`Pagaste con ${payMethod}`);
    break;
  case "tarjeta":
    console.log(`Pagaste con ${payMethod}`);
    break;
  default:
    console.log("Aún no has seleccionado un método de pago soportado");
    break;
}

function pay() {
  console.log("Pagando...");
}
