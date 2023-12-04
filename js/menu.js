const barraMenu = document.getElementById('barra');
const menu = document.getElementById('menu');
const titulo = document.getElementById('titulo');

barraMenu.addEventListener('click', () => {
    menu.classList.toggle('menu--show');
});
barraMenu.addEventListener('click', () => {
    titulo.classList.toggle('titulo-show');
});
