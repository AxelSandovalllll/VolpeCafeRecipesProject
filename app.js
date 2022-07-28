// api accessing format
fetch('https://api.spoonacular.com/food/search?apiKey=d14b4e290b074f7f90398b5e0a9a46ca&number=10&query=apple')
    .then((beans) => beans.json())
    .then((data) => console.log(data));
