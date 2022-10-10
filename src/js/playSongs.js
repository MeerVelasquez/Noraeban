import { getAncestorWithClass, hasAncestor } from "./utils.js";

export default function playSongs(globals) {
    $playlist.addEventListener('click', (e) => {
        // console.log(e.target);
        const $song = getAncestorWithClass(e.target, 'song');
        if ($song) {
            const name = $song.querySelector('.song__info__title').textContent.trim();
            // console.log(name);
            const playlist = globals.playlists.find((p) => p.name === globals.currentPlaylist);
            const song = playlist.songs.find((s) => s.title === name);
            audio.src = song.url;
            // console.log(audio.paused);
            if(globals.playing) {
                if(globals.currentSong === name) {
                    if(globals.playing) {
                        pause(globals, $song);
                    } else {
                        play(globals, $song);
                    }
                } else {
                    pause(globals, getSongPlayingElement(globals));
                    play(globals, $song);
                }
            } else {
                play(globals, $song);
            }
        }
    });
}

function play(globals, $song) {
    $song.querySelector('.song__play img').src = './assets/img/pause.svg';
    globals.playing = true;
    globals.currentSong = $song.querySelector('.song__info__title').textContent.trim();
    audio.play();
}

export function pause(globals, $song) {
    $song.querySelector('.song__play img').src = './assets/img/play.svg';
    globals.playing = false;
    audio.pause();
}

export function getSongPlayingElement(globals) {
    function getElement($songs) {
        for(let $song of $songs) {
            if($song.querySelector('.song__info__title').textContent.trim() === globals.currentSong) {
                return $song;
            }
        }
        return null;
    }
    const $song = getElement($playlist.querySelectorAll('.song'));
    console.log($song);
    return $song;
}

const $playlist = document.querySelector('.playlist');
const audio = new Audio();
