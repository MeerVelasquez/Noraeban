export function hasAncestor($elem, $ancestor) {
    while ($elem) {
        if ($elem === $ancestor) {
            return true;
        }
        $elem = $elem.parentNode;
    }
    return false;
}

export function getAncestorWithClass($elem, className) {
    while ($elem !== document.documentElement) {
        if ($elem.classList.contains(className)) {
            return $elem;
        }
        $elem = $elem.parentNode;
    }
    return null;
}

export function getPlaylists() {
    const playlists = localStorage.getItem('playlists');
    return playlists && playlists != 'null' ? JSON.parse(playlists) : [];
}

export function setPlaylists(playlists) {
    localStorage.setItem(PLAYLISTS, JSON.stringify(playlists));
}

export function removePlaylists() {
    localStorage.removeItem(PLAYLISTS);
}

const PLAYLISTS = 'playlists';
