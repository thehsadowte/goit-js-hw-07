import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const markup = renderGallery(galleryItems);

gallery.insertAdjacentHTML('beforeend', markup);

function renderGallery(images) {
  return images
    .map(({ original, preview, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
            </a>
        </div>`;
    })
    .join('');
}

function createModal(image) {
  const instance = basicLightbox.create(`<img src="${image.dataset.source}">`, {
    onShow: instance => {
      document.addEventListener('keydown', closeOnEsc.bind(instance));
    },
    onClose: instance => {
      document.removeEventListener('keydown', closeOnEsc.bind(instance));
    },
  });

  instance.show();
}

function onImageClick(e) {
  e.preventDefault();
  if (e.target.classList.contains('gallery')) {
    return;
  }

  createModal(e.target);
}

function closeOnEsc(e) {
  if (e.code === 'Escape') {
    this.close();
  }
}

gallery.addEventListener('click', onImageClick);
