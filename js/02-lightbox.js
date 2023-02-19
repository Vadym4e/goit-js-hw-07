import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const makeGaleryCards = makeGalery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", makeGaleryCards);

// galleryContainer.addEventListener("click", onGalleryContainerClick);
// galleryContainer.preventDefault();
function makeGalery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
`;
    })
    .join("");
}

// function onGalleryContainerClick(e) {
//   e.preventDefault();

//   //   if (!e.target.classList.contains("gallery__image")) {
//   //     return;
//   //   }
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});
// }
