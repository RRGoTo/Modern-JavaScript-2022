// 80. For Loop

for (let i = 0; i < 10; i++) {
  console.log(`Numero: ${i}`);
}

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`El número ${i} es par`);
  } else {
    console.log(`El número ${i} es impar`);
  }
}

const car = [
    {name: 'Monitor 27 pulgadas', price: 500},
    {name: 'TV', price: 100},
    {name: 'Tablet', price: 300},
    {name: 'Audifonos', price: 400},
    {name: 'Teclado', price: 700},
    {name: 'Celular', price: 700},
]

for (let i = 0; i < car.length; i++) {
    const product = car[i].name;
    console.log(product);
}