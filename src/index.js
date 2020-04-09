const theatreId = 363;
const THEATRES_URL = "https://evening-plateau-54365.herokuapp.com/theatres/363";
const moviesBody = document.querySelector("#ui cards showings");
function fetchMovies() {
	return fetch(THEATRES_URL)
		.then((response) => response.json())
		.then((object) => {
			let movies = Object.values(object.showings);
			movies.forEach((movie) => {
				renderMovie(movie);
			});
		});
}

function renderMovie(movie) {
	let movieCard = document.createElement("div");
	movieCard.className = "card";
	console.log(movie);

	movieCard.innerHTML = `
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
            <div class="ui blue button">Buy Ticket</div>
        </div>
        </div>
    `;
	moviesBody.appendChild(movieCard);
}

fetchMovies();
