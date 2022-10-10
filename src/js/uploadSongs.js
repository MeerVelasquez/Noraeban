import renderPlaylist from "./renderPlaylist.js";

export default function uploadSongs(globals) {

    function handleFileSelect(e) {

        console.log(e.target.files);
        console.log(URL.createObjectURL(e.target.files[0]));
        // console.log(e.dataTransfer.files);
        
        e.preventDefault();
        $dropZone.classList.remove('drop-zone-over');
        let files = [...e.target.files];
        if(globals.currentPlaylist) {
            files = files
                .filter(({ type }) => type.includes('audio'))
                .map(file => {
                    const { name } = file;
                    const [artist, title] = name.split(' - ');
                    const url = URL.createObjectURL(file);
                    return title ? { artist, title, url } : { title: artist, artist: '', url };
                });
            //
            const playlist = globals.playlists.find(playlist => playlist.name === globals.currentPlaylist);
            if(playlist) {
                // playlist.songs = [...playlist.songs, ...files];
                playlist.songs = playlist.songs.concat(files);
                // playlist.songs = files;
            }
        }
        $modalUpload.classList.add('hidden');
        renderPlaylist(globals, true);
    }

    $addSong.addEventListener('click', () => {
        $modalUpload.classList.remove('hidden');
    });
    
    $dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        $dropZone.classList.add('drop-zone-over');
    });
    ["dragleave", "dragend"].forEach((type) => {
        $dropZone.addEventListener(type, () => {
            $dropZone.classList.remove("drop-zone-over");
        });
    });
    // $dropZone.addEventListener('drop', handleFileSelect);

    $uploadSong.addEventListener('click', () => {
        this.value = null;
    });
    $uploadSong.addEventListener('change', handleFileSelect, false);
}

const $addSong = document.querySelector('.add-song');
const $modalUpload = document.querySelector('.modal-upload');
const $dropZone = $modalUpload.querySelector('.drop-zone');
const $uploadSong = $modalUpload.querySelector('#upload-song');
