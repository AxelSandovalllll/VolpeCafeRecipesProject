
    fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=7cf9062184834f7caf2db21cbfee050a&number=10&query=coffee&addRecipeInformation=true')
    .then((beans) => beans.json())
    .then((beans) => {
        console.log(beans);
        var loader = document.getElementById('loader');
        loader.style.display = 'none';
        beans['results'].forEach(element => {
            var item = (`
                <div class=card ${element['id']}>
                    <div class=tumb>
                        <img src=${element['image']}></img>
                    </div>
                    <div class=details>
                        <h4><a href=${element['sourceUrl']}>${element['title']}</a></h4>
                        <div class=recipe-details>
                            <p> Servings: ${element['servings']}  </p>
                            <p> Time: ${element['readyInMinutes']} Minutes </p>
                            <div class=rating>
                                <i class="rating__star far fa-star"></i>
                                <i class="rating__star far fa-star"></i>
                                <i class="rating__star far fa-star"></i>
                                <i class="rating__star far fa-star"></i>
                                <i class="rating__star far fa-star"></i>
                            </div>
                        </div>
                    </div>      
                </div> `)
            document.getElementById('recipe-grid').innerHTML += item;  
        });
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

// creates the rating object of starts 
const ratingStars = document.getElementsByClassName("rating__star");

function executeRating(stars) {
    const starClassActive = "rating__star fas fa-star"; //star filled
    const starClassUnactive = "rating__star far fa-star"; //star hollow
    const starsLength = stars.length;
    let i;
    stars.map((star) => {
       star.onclick = () => {
          i = stars.indexOf(star);
 
          if (star.className===starClassInactive){
             for (i; i >= 0; --i) stars[i].className = starClassActive; //changes start to filled
          } else {
             for (i; i < starsLength; ++i) stars[i].className = starClassUnactive; //changes star to hollow
          }
       };
    });
 }

executeRating(ratingStars);


function getRecipesBy(){
    var query = document.getElementById('plate').value;
    var loader = document.getElementById('loader');
    document.getElementById('recipe-grid').innerHTML = '';
    loader.style.display = '';
    fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=7cf9062184834f7caf2db21cbfee050a&number=10&query='+query+'&addRecipeInformation=true')
    .then((beans) => beans.json())
    .then((beans) => {
        console.log(beans);
        var loader = document.getElementById('loader');
        loader.style.display = 'none';
        beans['results'].forEach(element => {
            var item = (`
                <div class=card>
                    <div class=tumb>
                        <img src=${element['image']}></img>
                    </div>
                    <div class=details>
                        <h4><a href=${element['sourceUrl']}>${element['title']}</a></h4>
                        <div class=recipe-details>
                            <p> Servings: ${element['servings']}  </p>
                            <p> Time: ${element['readyInMinutes']} Minutes </p>
                            <div class=rating>
                                <i class="rating__star far fa-star"></i>
                                <i class="rating__star far fa-star"></i>
                                <i class="rating__star far fa-star"></i>
                                <i class="rating__star far fa-star"></i>
                                <i class="rating__star far fa-star"></i>
                            </div>
                        </div>
                    </div>      
                </div> `)
            document.getElementById('recipe-grid').innerHTML += item;  
        });
    });
}

function getRecipesByName(query){
    document.getElementById('recipe-grid').innerHTML = '';
    loader.style.display = '';
    fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=7cf9062184834f7caf2db21cbfee050a&number=10&query='+query+'&addRecipeInformation=true')
    .then((beans) => beans.json())
    .then((beans) => {
        console.log(beans);
        var loader = document.getElementById('loader');
        loader.style.display = 'none';
        beans['results'].forEach(element => {
            var item = (`
                <div class=card>
                    <div class=tumb>
                        <img src=${element['image']}></img>
                    </div>
                    <div class=details>
                        <h4><a href=${element['sourceUrl']}>${element['title']}</a></h4>
                        <div class=recipe-details>
                            <p> Servings: ${element['servings']}  </p>
                            <p> Time: ${element['readyInMinutes']} Minutes </p>
                            <div class=rating>
                                <i class="rating__star far fa-star"></i>
                                <i class="rating__star far fa-star"></i>
                                <i class="rating__star far fa-star"></i>
                                <i class="rating__star far fa-star"></i>
                                <i class="rating__star far fa-star"></i>
                            </div>
                        </div>
                    </div>      
                </div> `)
            document.getElementById('recipe-grid').innerHTML += item;  
        });
    });
}
