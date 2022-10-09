export default function renderPlaylist(globals) {
    if(!globals.currentPlaylist) return;
    
    const playlist = globals.playlists.find(p => p.name === globals.currentPlaylist);
    if(!playlist) return;

    const { songs } = playlist;

    const numPages = 1 + parseInt(songs.length / 6);
    updatePaging(numPages);

    let $page;
    let songsTemp = [];
    for(let i = 0; i < songs.length; i++) {
        if(i % 5 === 0) {
            if($page) { // if not first page
                addSongsToPage($page, songsTemp);
                songsTemp = [];
            }
            $page = document.createElement('div');
            $playlist.appendChild($page);
            $page.className = 'page';
        }
        // grow lg:basis-1/3 basis-full min-h-full md:min-h-0 md:basis-1/2 md:max-w-11/24 lg:max-w-7/24
        songsTemp.push(`
        <div class="playlist__item song">
            <div class="playlist__item__cont">
                <span class="song__music-note img-abs-cont img-abs-cont-cent">
                    <img src="./assets/img/music-note.svg" alt="Music note">
                </span>
                <div class="song__info">
                    <div class="song__info__title">${songs[i].title}</div>
                    <div class="song__info__artist">${songs[i].artist}</div>
                </div>
                <span class="song__play img-abs-cont img-abs-cont-cent">
                    <img src="./assets/img/play.svg" alt="Play">
                </span>
            </div>
        </div>
        `);
    }
    addSongsToPage($page, songsTemp);
    selectPage(1);

    $paging.addEventListener('click', e => {
        // console.log(e.target.matches('.page-btn'));
        if(e.target.matches('.page-btn')) {
            const page = parseInt(e.target.getAttribute('page-num'));
            // console.log('asd');
            if(page !== globals.currentPage) {
                globals.currentPage = page;
                selectPage(globals.currentPage);
            }
        }
    });
}

function addSongsToPage($page, songs) {
    const $row1 = document.createElement('div');
    $row1.className = 'page__row';
    $page.appendChild($row1);
    if(songs.length <= 2) {
        $row1.innerHTML = songs.join('');    
        $page.classList.add('page-3');
    }else {
        $row1.innerHTML = songs.slice(0, 3).join('');

        const $row2 = document.createElement('div');
        $row2.className = 'page__row';
        $page.appendChild($row2);
        $row2.innerHTML = songs.slice(3, 5).join('');
        $page.classList.add('page-6');
    }
}

function updatePaging(numPages) {
    let temp = '';
    for(let i = 0; i < numPages; i++) {
        temp += `<span class="page-btn" page-num="${i + 1}">${i + 1}</span>`
    }
    $paging.innerHTML = temp;
}

function selectPage(page) {
    const $pages = $playlist.querySelectorAll('.page');
    const $page = $pages[page - 1];
    if(!$page) {
        console.log('Page not found');
        return;
    }

    for(let $p of $pages) {
        if($p.hasAttribute('selected')) {
            $p.removeAttribute('selected');
            break;
        }
    }
    console.log($page);
    $page.setAttribute('selected', '');
    $page.lastElementChild.appendChild($addSong);
    if($addSong.classList.contains('hidden')) $addSong.classList.remove('hidden');
}

const $playlist = document.querySelector('.playlist');
const $paging = document.querySelector('.playlist-paging');
const $addSong = document.querySelector('.add-song');
