document.addEventListener('DOMContentLoaded', () => {

const theatreId = 365
const URL = `https://evening-plateau-54365.herokuapp.com/theatres/${theatreId}`



//fetch list of movies from URL

fetch(URL)
.then(response => response.json())
.then(movies => {
    //console.log(movies)
    movies.forEach(movie => {
let div = renderMovie(movie)
        main.append(div)
    })
})

function renderMovie(movie){
    let card = document.createElement('div')
    card.setAttribute("class", "card")
    card.dataset.id - movie.id
}


})

