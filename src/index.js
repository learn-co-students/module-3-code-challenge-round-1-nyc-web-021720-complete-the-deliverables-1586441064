const theatreId = 363;
const THEATRES_URL = "https://evening-plateau-54365.herokuapp.com/theatres/363";

function fetchMovies() {
	return fetch(THEATRES_URL)
		.then((response) => response.json())
		.then((movies) => {
			console.log(movies);
			movies.forEach(function (movie) {
				renderMovie(movie);
			});
		});
}

function renderMovie(movie) {
	console.log(movie);
	let movieCard = document.createElement("div");
	movieCard.className = "card";
	console.log(movie);

	movieCard.innerHTML = `
        <div class="content">
            <div class="header">
                ${movie.title}
            </div>
            <div class="meta">
                ${movie.runtime} minutes
            </div>
            <div class="description">
                ${movie.tickets} remaining tickets
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
}

fetchMovies();
