const menuBtn = document.querySelector('.menu-icon');
const menu = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('show');
});
