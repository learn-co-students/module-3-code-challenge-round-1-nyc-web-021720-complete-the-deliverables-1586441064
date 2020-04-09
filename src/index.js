const theatreId = 363;
const THEATRES_URL = "https://evening-plateau-54365.herokuapp.com/theatres/363";
const moviesBody = document.querySelector(".showings");

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
document.addEventListener("click", function (event) {
	if (event.target.className === "ui blue bttn") {
		console.log(event.target.parentNode);
		let parent = event.target.parentNode;
		let id = parent.dataset.id;
		console.log(parent);
	}
});

function getTicket(ticket) {
	return fetch("https://evening-plateau-54365.herokuapp.com/tickets", {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
			accept: "application/json",
		},
		body: JSON.stringify({ ticket }),
	}).then((response) => response.json());
}

fetchMovies();
