import { galleryItems } from './gallery-items.js';
// Change code below this line

const photoParent = document.querySelector("ul.gallery")

const photoCollection = galleryItems.map(({ preview, original, description }) => {
  return ` <li class="gallery__item">
  <a class="gallery__link" href="${preview}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li> `
}).join("");

photoParent.insertAdjacentHTML("beforeend", photoCollection);

// Delegation Listener to the parent - UL
photoParent.addEventListener("click", onClickFn);

// callback Function while clicking on image
function onClickFn(event) {
  event.preventDefault();

  console.dir(event.target.nodeName);
  if (event.target.nodeName !== "IMG") { return }
  
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
    `)

  instance.show();
  function onCloseEscape(event){
   
    if (event.code === "Escape") {
      instance.close();
  }
  }
  
  document.addEventListener("keydown", onCloseEscape);

  document.removeEventListener("keydown", onCloseEscape);
}