import playlistsDropdown from "./playlistsDropdown.js";
import modals from "./modals.js";
import addPlaylistForm from "./addPlayListForm.js";
import uploadSongs from "./uploadSongs.js";
import playSongs from "./playSongs.js";
import { getPlaylists } from "./utils.js";

const globals = {
    // playlists: [
    //     {
    //         name: 'Playlist 1',
    //         songs: Array(7).fill(0).map((_, i) => ({
    //             title: `Song ${i + 1}`,
    //             artist: `Artist ${i + 1}`,
    //         }))
    //     },
    //     {
    //         name: 'Playlist 2',
    //         songs: Array(7).fill(0).map((_, i) => ({
    //             title: `Song ${i + 1}`,
    //             artist: `Artist ${i + 1}`,
    //         }))
    //     },
    //     {
    //         name: 'Playlist 3',
    //         songs: Array(7).fill(0).map((_, i) => ({
    //             title: `Song ${i + 1}`,
    //             artist: `Artist ${i + 1}`,
    //         }))
    //     },
    //     {
    //         name: 'Playlist 4',
    //         songs: Array(7).fill(0).map((_, i) => ({
    //             title: `Song ${i + 1}`,
    //             artist: `Artist ${i + 1}`,
    //         }))
    //     },
    // ],
    playlists: getPlaylists(),
    currentPlaylist: null,
    currentSong: null,
    currentPage: 1,
}

playlistsDropdown(globals);
modals();
addPlaylistForm(globals);
uploadSongs(globals);
playSongs(globals);
