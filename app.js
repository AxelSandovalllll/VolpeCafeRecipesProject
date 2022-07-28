// api accessing format
fetch('https://api.spoonacular.com/food/search?apiKey=d14b4e290b074f7f90398b5e0a9a46ca&number=10&query=apple')
    .then((beans) => beans.json())
    .then((data) => console.log(data));



const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top = '-100%';
}
