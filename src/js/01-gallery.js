import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from '../js/gallery-items';

document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.querySelector('.gallery');

    function createGallery() {
        galleryItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.classList.add('gallery__item');

            const link = document.createElement('a');
            link.classList.add('gallery__link');
            link.href = item.original;

            const img = document.createElement('img');
            img.classList.add('gallery__image');
            img.src = item.preview;
            img.alt = item.description;
            img.setAttribute('data-source', item.original);
            img.setAttribute('href', item.original);

            link.appendChild(img);
            listItem.appendChild(link);
            gallery.appendChild(listItem);
        });
    }

    createGallery();

    const lightbox = new SimpleLightbox('.gallery a', {
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.querySelector('.gallery');

    gallery.addEventListener('click', function (e) {
        e.preventDefault();
        if (e.target.tagName === 'IMG') {
            const source = e.target.dataset.source;

            const instance = SimpleLightbox.open(`<img src="${source}" alt="Image description">`);
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape') {
                    instance.close();
                }
            });
        }
    });
});

console.log(galleryItems);