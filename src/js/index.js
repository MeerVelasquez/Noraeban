import playlistsDropdown from "./playlistsDropdown.js";
import modals from "./modals.js";
import addPlaylistForm from "./addPlayListForm.js";
import { getPlaylists } from "./utils.js";

const playlists = getPlaylists();

playlistsDropdown(playlists);
modals();
addPlaylistForm(playlists);
