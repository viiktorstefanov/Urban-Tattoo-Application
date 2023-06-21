const contentElement = document.getElementById('content');
const galleryBtn = document.getElementById('gallery');

import { galleryPage } from './galleryPage.js';

contentElement.addEventListener('click', (e) => {
    if(e.currentTarget.style.color === 'white') {
        e.currentTarget.style.color = 'red';
    }else {
        e.currentTarget.style.color = 'white';
    }
});

galleryBtn.addEventListener('click', (e) => {
    galleryPage();
} )