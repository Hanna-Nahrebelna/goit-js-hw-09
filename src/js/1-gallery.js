import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { images } from './images';

const galleryContainer = document.querySelector('.gallery');

function createMarkUp(images) {
  return images
    .map(
      ({ preview, original, description }) => `<li class="gallery-item">
    <a class="gallery-link" href="${original}">
      <img
      class="gallery-image"
      src="${preview}" 
      alt="${description}" 
      />      
    </a>
  </li>`
    )
    .join('');
}

galleryContainer.innerHTML = createMarkUp(images);

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  captionPosition: 'bottom',
});





