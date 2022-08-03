
    fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=61bba8c3712641a384c5d6d4e1665cc2&number=10&query=coffee&addRecipeInformation=true')
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
                            <div class="rating" onclick="activateStars('${element['id']}')">
                                <span class="rating__result__${element['id']}"></span> 
                                <i class="rating__star__${element['id']} far fa-star"></i>
                                <i class="rating__star__${element['id']} far fa-star"></i>
                                <i class="rating__star__${element['id']} far fa-star"></i>
                                <i class="rating__star__${element['id']} far fa-star"></i>
                                <i class="rating__star__${element['id']} far fa-star"></i>
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
function activateStars(id){
    const ratingStars = [...document.getElementsByClassName("rating__star__"+id)];
    executeRating(ratingStars,id);
}

function executeRating(stars,id) {
   const starClassActive = "rating__star__"+id+" fas fa-star";
   const starClassUnactive = "rating__star__"+id+" far fa-star";
   const starsLength = stars.length;
   let i;
   stars.map((star) => {
      star.onclick = () => {
         i = stars.indexOf(star);

         if (star.className.indexOf(starClassUnactive) !== -1) {
            for (i; i >= 0; --i) stars[i].className = starClassActive;
         } else {
            for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
         }
      };
   });
}

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
