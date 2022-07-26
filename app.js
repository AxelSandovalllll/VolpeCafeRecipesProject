// api accessing format
fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=d14b4e290b074f7f90398b5e0a9a46ca&number=10&query=espresso_grinder')
.then((beans) => beans.json())
.then((data) => console.log(data));