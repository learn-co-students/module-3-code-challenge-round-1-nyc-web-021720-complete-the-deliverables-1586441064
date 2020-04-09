const theatreId = 357;
const THEATERS_LINK = "https://evening-plateau-54365.herokuapp.com/theatres/357"

document.addEventListener("DOMContentLoaded", (event => {

    fetchTheaters()

    document.addEventListener("click", (event) => {
        if (event.target.innerText === "Buy Ticket") {
            console.log(event.target.parentNode.parentNode)
            let card = event.target.parentNode.parentNode
            buyTicket(card)

        }
    })

    function buyTicket(card) {
        let description = card.querySelector(".description")

        let config = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        fetch("https://evening-plateau-54365.herokuapp.com/tickets", {
            method: "POST",
            headers: config,
            body: JSON.stringify({ "showing_id": card.dataset.id })
        })
            .then(resp => resp.json())
            .then(data => console.log(data))

        card.dataset.tickets -= 1
        description.innerText = `${card.dataset.tickets} remaining tickets`
        if (parseInt(card.dataset.tickets) === 0) {
            console.dir(card.getElementsByClassName("ui blue button")[0])
            card.getElementsByClassName("ui blue button")[0].innerHTML = `<div>Sold out!</div>`
        }
    }

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
        cardDiv.setAttribute("class", "card")
        cardDiv.dataset.id = theater.id
        cardDiv.dataset.tickets = theater.capacity - theater.tickets_sold

        cardDiv.innerHTML = `
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
        `
        showings.append(cardDiv)
        console.log()
        if (parseInt(cardDiv.dataset.tickets) === 0) {
            console.dir(cardDiv.getElementsByClassName("ui blue button")[0])
            cardDiv.getElementsByClassName("ui blue button")[0].innerHTML = `<div>Sold out!</div>`
        }
    }
}))