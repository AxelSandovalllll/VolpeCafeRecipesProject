// api accessing format
fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=d14b4e290b074f7f90398b5e0a9a46ca&number=10&query=pasta')
    .then((beans) => beans.json())
    .then((data) => console.log(data));


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
