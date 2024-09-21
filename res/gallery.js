'use strict';

function makeModal(url) {
    let modal = document.createElement('div');
    modal.className = 'modal-bg';
    
    let inset = document.createElement('div');
    inset.className = 'modal-inset';
    
    let img = document.createElement('img');
    img.src = url;
    
    inset.appendChild(img);
    modal.appendChild(inset);

    modal.addEventListener('click', (e) => {
        modal.style.opacity = 0;
        modal.style.pointerEvents = 'none'; // allows clicking "through" to another image while it's fading out.
        setTimeout(() => {
            modal.remove();
            e.preventDefault();
            e.stopPropagation();
        }, 500);
    });

    return modal;
}

function activateModal(e) {
    let url = this.querySelector('img').src;
    let m = makeModal(url);
    
    document.body.appendChild(m);

    setTimeout(() => {
        m.style.opacity = 1;
    }, 1);
    
    e.preventDefault();
    e.stopPropagation();
}

let imgs = document.querySelectorAll('.gallery-entry');

for (let img of imgs) {
    img.addEventListener('click', activateModal);
}