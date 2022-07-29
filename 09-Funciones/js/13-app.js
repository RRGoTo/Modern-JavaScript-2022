// 70. Arrow Functions en el Reproductor de Música

const reproductor = {
    song: '',
    reproducir: id => console.log(`Reproduciendo la canción con el id ${id}`),
    pausar: () => console.log(`pausando...`),
    borrar: id =>console.log(`Borrando canción... ${id}`),
    crearPlayList: name =>console.log(`Creando la playlist de ${name}`),
    reproducirPlayList: name =>console.log(`Reproduciendo la playlist ${name}`),
    set newSong(song) {
        this.song = song;
        console.log(`Añadiendo ${song}`);
    },
    get getSong(){
        console.log(`${this.song}`);
    }
}

reproductor.newSong = 'To Glory';
reproductor.getSong;

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlayList('EDM');
reproductor.reproducirPlayList('EDM');