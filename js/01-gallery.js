import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const makeGaleryCards = makeGalery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", makeGaleryCards);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function makeGalery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
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
</div>
`;
    })
    .join("");
}

function onGalleryContainerClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" alt="${e.target.alt} width = '1280px">
    `
  );
  instance.show();

  galleryContainer.addEventListener("keydown", (e) => {
    if (e.code !== "Escape") {
      return;
    }
    instance.close();
  });
}
