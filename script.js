const thumbnails = document.querySelectorAll('.thumbnail');
const selectedImage = document.querySelector('.selected-image img');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const tempSrc = selectedImage.src;
    selectedImage.src = thumbnail.src;
    thumbnail.src = tempSrc;
  });
});
