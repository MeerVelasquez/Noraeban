import { setPlaylists } from './utils.js';
import PlayList from './playlist.js';
import { loadPlaylists, selectPlaylistNamed } from './playlistsDropdown.js';
import renderPlaylist from './renderPlaylist.js';

export default function(globals) {
    const playlists = globals.playlists;

    $form.addEventListener('submit', e => {
        e.preventDefault();
        const data = new FormData($form);
        for (let [name, value] of data) {
            value = value.trim();
            if(value) {
                if(!playlists.find(p => p.name === value)) {
                    playlists.push(new PlayList(value));
                    setPlaylists(playlists);
                    $modalPlaylist.classList.add('hidden');
                    loadPlaylists(playlists);
                    selectPlaylistNamed(value);
                    globals.currentPlaylist = value;
                    renderPlaylist(globals, false);
                } else {
                    console.log('Playlist already exists');
                }
            } else {
                console.log(`field ${name} is empty`);
            }
        }
    });
}

const $modalPlaylist = document.querySelector('.modal-playlist');
const $form = $modalPlaylist.querySelector('.modal-playlist form');
