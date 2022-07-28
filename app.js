
// api accessing format
fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=61bba8c3712641a384c5d6d4e1665cc2&number=12&query=pasta')
    .then((beans) => {
        console.log(beans);
        var recipes;
        beans['results'].forEach(element => {
            console.log(element['title']);
            recipe += (`<img src=${element['image']}></img><h1>${element['title']}</h1>`
            );
        });
        document.getElementById('recipe-grid').innerHTML = recipe;
    });




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



