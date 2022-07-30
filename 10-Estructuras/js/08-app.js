// 78. Detener la ejecución de un if con una función
const score = 450;

function checkScore() {
    if (scroe > 400) {
        console.log('Excelente!');
        return;
    }

    if (scroe > 300) {
        console.log('Buen puntaje... felicidades');
        return;
    }
}

checkScore();