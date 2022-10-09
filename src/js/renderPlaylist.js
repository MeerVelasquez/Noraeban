export default function renderPlaylist(globals) {
    if(!globals.currentPlaylist) return;
    
    const playlist = globals.playlists.find(p => p.name === globals.currentPlaylist);
    if(!playlist) return;

    const { songs } = playlist;

    const numPages = 1 + parseInt(songs.length / 6);
    updatePaging(numPages);

    let $page;
    let temp = '';
    for(let i = 0; i < songs.length; i++) {
        if(i % 5 === 0) {
            if($page) { // if not first page
                $page.innerHTML = temp;
                $page.classList.add('playlist-6');
                // $page.appendChild($addSong);
                temp = '';
            }
            $page = document.createElement('div');
            $playlist.appendChild($page);
            $page.className = 'page';
        }
        // grow lg:basis-1/3 basis-full min-h-full md:min-h-0 md:basis-1/2 md:max-w-11/24 lg:max-w-7/24
        temp += `
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
        `;
    }
    $page.innerHTML = temp;
    $page.classList.add($page.children.length > 2 ? 'playlist-6' : 'playlist-3');
    selectPage(1);

    // distributeSongs();
    
    // for(let i = 2; i <= numPages; i++) {

    // }

    // document.querySelector('.add-song').addEventListener('click', () => {
    //     console.log(numPages);
    // });

    $paging.addEventListener('click', e => {
        if(e.target.matches('page-btn')) {
            const page = parseInt(e.target.getAttribute('page-num'));
            if(page !== globals.currentPage) {
                globals.currentPage = page;
                selectPage(currentPage);
            }
        }
    });
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
    const $toSelect = $pages[page - 1];
    if(!$toSelect) {
        console.log('Page not found');
        return;
    }

    for(let $page of $pages) {
        if($page.hasAttribute('selected')) {
            $page.removeAttribute('selected');
            break;
        }
    }
    $toSelect.setAttribute('selected', '');
    $toSelect.appendChild($addSong);
    if($addSong.classList.contains('hidden')) $addSong.classList.remove('hidden');
}

const $playlist = document.querySelector('.playlist');
const $paging = document.querySelector('.playlist-paging');
const $addSong = document.querySelector('.add-song');
