const theatreId = 365
const URL = "https://evening-plateau-54365.herokuapp.com/theatres/365"

document.addEventListener('DOMContentLoaded', () => {
    getData()
})

//fetch list of movies from URL
//render list
//add event listeners for buy button
//create post when creating a ticket

    getData = () => {
        fetch(URL)
            .then(response => response.json())
            .then(json => renderTheatre(json))
    }

    renderTheatre = json => {
        let shows = json.showings
        shows.forEach(show => {
            createCard(show)
    
    })
    }

    createCard = show => {
        const cardCode = `<div class="content">
        <div class="header">
            ${show.film.title}
        </div>

        <div class="meta">
        ${show.film.runtime} minutes
      </div>

      <div class="description">
        <span class="tickets-remaining">${show.capacity -
            show.tickets_sold}</span> remaining tickets
      </div>
      <span class="ui label">
        ${show.showtime}
      </span>
    </div>
    <div class="extra content">
      <div class="ui blue button">Buy Ticket</div>
    </div>
    `

    const cardsElement = document.querySelector(".cards")
    const newCard = document.createElement("div")
    newCard.className = "card"
    newCard.innerHTML = cardCode
    cardsElement.appendChild(newCard)
    addBuyTicketListener(newCard, show.id)
    }

    function addBuyTicketListener(card, id) {
        const button = card.querySelector(".button")
        const ticketCounter = card.querySelector(".tickets-remaining")
        if (ticketCounter.innerText == 0) {
            button.outerHTML = "SOLD OUT!!"
        }
      button.addEventListener("click", function() {
          ticketCounter.innerText = ticketCounter.innerText - 1 
          if (ticketCounter.innerText == 0) {
            button.outerHTML = "SOLD OUT!!"
      }
    createTicket(id)
    })
}
    function createTicket(showing_id){
        const newURL = "https://evening-plateau-54365.herokuapp.com/tickets"
        fetch(newURL, {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                Accept: "appication/json"
            },
            body: JSON.stringify({
                showing_id: showing_id
            })
        })
        .then(response => response.json())
        .then(json => json)
    }
    
    