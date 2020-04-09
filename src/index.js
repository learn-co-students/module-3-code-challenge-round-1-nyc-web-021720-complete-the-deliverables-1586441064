const theatreId = 359;

document.addEventListener("DOMContentLoaded", () => {

    let movieContainer = document.getElementsByClassName("showings")[0]
    //fetchMovies
    console.log(movieContainer)
    fetchMovies()

    function fetchMovies() {
        fetch(`https://evening-plateau-54365.herokuapp.com/theatres/359`)
        .then(r => r.json())
        .then(obj => renderMovies(obj))
    }

    function renderMovies(theater) {
         let movies = theater.showings
        for (let movie of movies) {
            let newMovie = document.createElement('div')
            newMovie.className = "card"
            newMovie.innerHTML = `
             <div class="content">
               <div class="header">
                 ${movie.film.title}
               </div>
               <div class="meta">
                 ${movie.film.runtime} minutes
                </div>
               <div class="description">
                 ${movie.capacity - movie.tickets_sold} remaining tickets
               </div>
                 <span class="ui label">
                  ${movie.showtime}
                 </span>
               </div>
               <div class="extra content">
               <div class="ui blue button" data-id="${movie.id}>Buy Ticket</div>
              </div>
            `
            movieContainer.appendChild(newMovie)
        }
    }

});
