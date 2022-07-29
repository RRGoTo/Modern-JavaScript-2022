// 66. Añadir Funciones en un Objeto
const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo la canción con el id ${id}`);
    },
    pausar: function () {
        console.log(`pausando...`);
    },
    borrar: function (id) {
        console.log(`Borrando canción... ${id}`);
    },
    crearPlayList: function (name) {
        console.log(`Creando la playlist de ${name}`);
    },
    reproducirPlayList: function (name) {
        console.log(`Reproduciendo la playlist ${name}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlayList('EDM');
reproductor.reproducirPlayList('EDM');