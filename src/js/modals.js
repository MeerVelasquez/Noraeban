import { getAncestorWithClass } from "./utils.js";

export default function modals() {
    for(let $modal of $modals) {
        $modal.addEventListener('click', e => {
            const $modalClose = getAncestorWithClass(e.target, 'modal-close');
            if($modalClose) {
                $modal.classList.add('hidden');
            } else {
                const $modalContent = getAncestorWithClass(e.target, 'modal-content');
                if(!$modalContent) {
                    $modal.classList.add('hidden');
                }
            }
        })
    }
}

const $modals = document.querySelectorAll('.modal');
