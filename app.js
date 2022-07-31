
    fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=61bba8c3712641a384c5d6d4e1665cc2&number=14&query=coffee&addRecipeInformation=true')
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
                        <h4>${element['title']}</h4>
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

const ratingStars = [...document.getElementsByClassName("rating__star")];

function executeRating(stars) {
  const starClassActive = "rating__star fas fa-star";
  const starClassInactive = "rating__star far fa-star";
  const starsLength = stars.length;
  let i;
  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);

      if (star.className.indexOf(starClassInactive) !== -1) {
        for (i; i >= 0; --i) stars[i].className = starClassActive;
      } else {
        for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
      }
    };
  });
}

executeRating(ratingStars);