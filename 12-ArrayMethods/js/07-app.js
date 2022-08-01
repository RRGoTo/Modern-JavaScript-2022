// 94. .concat
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];

// .concat
const result = meses.concat(meses2);
console.log(result);

// spread operator
const result2 = [...meses, ...meses2];
console.log(result2);