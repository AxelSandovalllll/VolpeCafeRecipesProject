
// api accessing format
fetch('https://api.spoonacular.com/recipes/716429/information?apiKey=d14b4e290b074f7f90398b5e0a9a46ca&includeNutrition=false')
    .then((beans) => beans.json())
    .then((beans) => {
        recipes = (`
        <div class=card>
            <div class=thumb>
                <img class=thumb-img src=${beans['image']}></img>
            </div>
            <h1 class=recipename >${beans['title']}</h1>
            <p class=serving > Servings: ${beans['servings']} </p>
            <p class=minutes > Ready: ${beans['readyInMinutes']} </p>
        </div> `
        );
        document.getElementById('recipe-grid').innerHTML = recipes;
    })

    /*fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=d14b4e290b074f7f90398b5e0a9a46ca&number=12&query=pasta')
    .then((beans) => beans.json())
    .then((beans) => {
        var recipes = "";
        beans['results'].forEach(element => {
            var id = element['id'];
            var item = getRecipeInformation(id);
            item.then(reponse =>{
               var recipe = (`
                          <div class=htmlSegment'>
                              <img src=${item['image']}></img>
                              <h1>${item['title']}</h1>
                              <h6> ${item['servings']} </h6>
                              <h6> ${item['readyInMinutes']} </h6>
                          </div> `)
                document.getElementById('recipe-grid').innerHTML = recipe;
            }); 
        });
        
    })
    
    
  function getRecipeInformation(id){
        return fetch('https://api.spoonacular.com/recipes/'+id+'/information?apiKey=d14b4e290b074f7f90398b5e0a9a46ca&includeNutrition=false')
        .then((data) => data.json())
        .then((recipe) => {
            return recipe;           
        }); 
   }*/

