const header = document.querySelector('.header');
const headerBtn = document.querySelector('.header_burger-btn');
const navListMobil = document.querySelector('.nav_list-mobil');

headerBtn.onclick = () => {
    document.body.classList.toggle('body--active')
    navListMobil.classList.toggle('navListMobil--active')
    header.classList.toggle('open')
}