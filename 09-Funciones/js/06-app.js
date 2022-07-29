// 63. Parametros por default
function saludar(name = 'Desconocido', lastname = '') {
    console.log(`Hola ${name} ${lastname}`);
}

saludar('Rommel');