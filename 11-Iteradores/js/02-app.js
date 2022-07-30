// 81. break y continue; en un for loop

//Uso de Countinue
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log('CINCO');
        continue;
    }
    console.log(`Numero ${i}`);
}