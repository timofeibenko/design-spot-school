const burger = document.querySelector('#burgerBtn');
const navList = document.querySelector('#navList');

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    navList.classList.toggle('burger-active')
});