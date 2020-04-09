const theatreId = 359;

document.addEventListener("DOMContentLoaded", () => {

    let movieContainer = document.getElementsByClassName("showings")[0]
    //fetchMovies
    fetchMovies()

    function fetchMovies() {
        fetch(`https://evening-plateau-54365.herokuapp.com/theatres/359`)
        .then(r => r.json())
        .then(obj => renderMovies(obj))
    }

    //fetch for updating tickets

    function updateMovie(id) {
        fetch(`https://evening-plateau-54365.herokuapp.com/tickets`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                showing_id: id
            })
        })
        .then(r => r.json())
        .then(resp => updateTickUI(resp))
    }


    function renderMovies(theater) {
         let movies = theater.showings
        for (let movie of movies) {
            let newMovie = document.createElement('div')
            newMovie.className = "card"
            newMovie.dataset.cardId = movie.id
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
               <div class="ui blue button" data-id="${movie.id}">Buy Ticket</div>
              </div>
            `
            movieContainer.appendChild(newMovie)
            //checkSoldOut(movies)
            newMovie.addEventListener("click", handleClick)
        }
    }

    function handleClick(event) {
        if (event.target.className === 'ui blue button') {
             let movieId = (event.target.dataset.id)
             updateMovie(movieId)

        }
    }

    function updateTickUI(resp){
        if (resp.error) {
            console.log(error)
        }
        else {
            let movies = document.querySelectorAll('.card')
            for (let movie of movies) {
                if (resp.showing_id === parseInt(movie.dataset.cardId)) {
                    let remain = movie.querySelector('.description')
                    let remainNum = parseInt(remain.innerText)
                    remainNum -= 1
                    remain.innerText = `${remainNum} remaining tickets`
                }
            }
        }
    }

    //function checkSoldOut(movies) {
    //    for (let movie of movies) {
    //        let remainingTickets = document.querySelector('.description')
    //        let button = movie.
    //        if (movie.capacity - movie.tickets_sold === 0)
//
    //    }
    //}

});
