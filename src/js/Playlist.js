export default class Playlist {
    constructor(name, songs) {
        this.name = name;
        this.songs = songs || [];
    }
}

export class Song {
    constructor(name, artist, filePath, fileName) {
        this.name = name;
        this.artist = artist;
        this.filePath = filePath;
        this.fileName = fileName;
    }
}
