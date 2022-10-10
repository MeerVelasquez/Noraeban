import { getSongPlayingElement, pause } from "./playSongs.js";
import renderPlaylist from "./renderPlaylist.js";
import { hasAncestor } from "./utils.js";

export default function(globals) {
    document.addEventListener('click', (e) => {
        if($playlistsDropdown.classList.contains('hidden')) {
            if(hasAncestor(e.target, $playlistsBtn)) {
                $playlistsDropdown.classList.remove('hidden');
            }
        } else {
            if(hasAncestor(e.target, $playlistsDropdown)) {
                if(e.target.matches('.playlists-dropdown__option') && !e.target.hasAttribute('selected')) {
                    selectPlaylist(e.target);
                    if(globals.playing) pause(globals, getSongPlayingElement(globals));
                    globals.currentPlaylist = e.target.textContent;
                    renderPlaylist(globals, false);
                } else if(e.target.matches('.playlists-dropdown__new')) {
                    $playlistsDropdown.classList.add('hidden');
                    document.querySelector('.modal-playlist').classList.remove('hidden');
            }
            }else {
                $playlistsDropdown.classList.add('hidden');
            }
        }
    });

    loadPlaylists(globals.playlists);
}

export function loadPlaylists(playlists) {
    const $playlistsDropdownList = $playlistsDropdown.firstElementChild;
    let temp = '';
    for(let i = 0; i < playlists.length; i++) {
        temp += `<span class="playlists-dropdown__option" role="menuitem" tabindex="-1" id="menu-item-${i}">${playlists[i].name}</span>`;
    }
    $playlistsDropdownList.innerHTML = temp;
}

function selectPlaylist($playlist) {
    if(!$playlist.hasAttribute('selected')) {
        for(let $o of $playlistsDropdown.querySelectorAll('.playlists-dropdown__option')) {
            if($o.hasAttribute('selected')) {
                $o.removeAttribute('selected');
            }
        }
        $playlist.setAttribute('selected', '');
        $playlistsDropdown.classList.add('hidden');
    }
}

export function selectPlaylistNamed(name) {
    const $playlistsDropdownList = $playlistsDropdown.firstElementChild;
    for(let $o of $playlistsDropdownList.children) {
        if($o.textContent === name) {
            selectPlaylist($o);
            break;
        }
    }
}

const $playlistsDropdown = document.querySelector('.playlists-dropdown');
const $playlistsBtn = document.getElementById('playlists-btn');
