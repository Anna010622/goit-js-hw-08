import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

function createItems(array) {
  return array
    .map(
      ({ original, preview, description }) =>
        `
        <a class="gallery__item" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>
        `
    )
    .join('');
}

const gallery = document.querySelector('.gallery');
gallery.innerHTML = createItems(galleryItems);
gallery.addEventListener('click', onImageClick);

function onImageClick(event) {
  if (event.target.nodeName === 'IMG') {
    event.preventDefault();
  }
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  alertError: false,
});
