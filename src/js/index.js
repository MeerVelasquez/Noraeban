import playlistsDropdown from "./playlistsDropdown.js";
import modals from "./modals.js";
import addPlaylistForm from "./addPlayListForm.js";
// import renderPlaylist from "./renderPlaylist.js";
import { getPlaylists } from "./utils.js";

const globals = {
    playlists: [
        {
            name: 'Playlist 1',
            songs: [
                {
                    title: 'Song 1',
                    artist: 'Artist 1',
                },
                {
                    title: 'Song 1',
                    artist: 'Artist 1',
                },
                {
                    title: 'Song 1',
                    artist: 'Artist 1',
                },
                {
                    title: 'Song 1',
                    artist: 'Artist 1',
                },
                {
                    title: 'Song 1',
                    artist: 'Artist 1',
                },
                {
                    title: 'Song 1',
                    artist: 'Artist 1',
                },
            ]
        }
    ],
    currentPlaylist: null,
    currentSong: null,
    currentPage: 1,
}

playlistsDropdown(globals);
modals();
addPlaylistForm(globals);
// renderPlaylist(globals);
