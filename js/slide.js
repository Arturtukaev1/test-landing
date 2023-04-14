const gallery = document.querySelector('.gallery');
const popup = document.querySelector('.popup');
const popupImg = document.querySelector('.popup img');
const closeBtn = document.querySelector('.close-btn');

gallery.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    popupImg.src = e.target.src;
    popup.style.display = 'block';
  }
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});