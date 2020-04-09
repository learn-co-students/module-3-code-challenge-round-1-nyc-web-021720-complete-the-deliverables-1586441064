const theatreId = 357;
const THEATERS_LINK = "https://evening-plateau-54365.herokuapp.com/theatres/357"

document.addEventListener("DOMContentLoaded", (event => {

    fetchTheaters()

    function fetchTheaters() {
        fetch(THEATERS_LINK)
            .then(resp => resp.json())
            .then(data => data.showings.forEach(theater => {
                renderTheater(theater)
            }))
    }

    function renderTheater(theater) {
        let showings = document.getElementsByClassName("ui cards showings")[0]
        let cardDiv = document.createElement("div")

        console.log(showings)
        cardDiv.innerHTML = `
        <div class="card">
            <div class="content">
                <div class="header">
                ${theater.film.title}
            </div>
            <div class="meta">
                ${theater.film.runtime} minutes
            </div>
            <div class="description">
                ${theater.capacity - theater.tickets_sold} remaining tickets
            </div>
            <span class="ui label">
                ${theater.showtime}
            </span>
            </div>
            <div class="extra content">
            <div class="ui blue button">Buy Ticket</div>
            </div>
        </div>
        `
        showings.append(cardDiv)
    }
}))