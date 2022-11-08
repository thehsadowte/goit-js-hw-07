import { galleryItems } from './gallery-items.js';
// import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';

// Change code below this line
const gallery = document.querySelector('.gallery');
const markup = renderGallery(galleryItems);

gallery.insertAdjacentHTML('beforeend', markup);
// gallery.addEventListener('click', onImageClick);

function renderGallery(images) {
  return images
    .map(({ original, preview, description }) => {
      return `
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
    })
    .join('');
}

let lightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

// function onImageClick(e) {
//   e.preventDefault();
// }
