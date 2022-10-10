import { getAncestorWithClass, hasAncestor } from "./utils.js";

export default function playSongs(globals) {
    $playlist.addEventListener('click', (e) => {
        // console.log(e.target);
        const $song = getAncestorWithClass(e.target, 'song');
        if ($song) {
            const name = $song.querySelector('.song__info__title').textContent.trim();
            console.log(name);
            const playlist = globals.playlists.find((p) => p.name === globals.currentPlaylist);
            const song = playlist.songs.find((s) => s.title === name);
            audio.src = song.url;
            console.log(audio.paused);
            audio.paused ? play($song) : pause($song);
        }
    });
}

function play($song) {
    $song.querySelector('.song__play img').src = './assets/img/pause.svg';
    audio.play();
}

function pause($song) {
    console.log('asdasd');
    $song.querySelector('.song__play img').src = './assets/img/play.svg';
    audio.pause();
}

const $playlist = document.querySelector('.playlist');
const audio = new Audio();
