//72. Comparador Estricto
const score = 100;
const score2 = '100';
/**
 * * == Comparador no estricto que solo compara por valor he intenta igualar los tipos de datos
 * * === Comparador estricto que compara los tipos de datos.
 */
if (score === '100') {
    console.log('Sí es igual...');
} else {
    console.log('No es igual...');
}