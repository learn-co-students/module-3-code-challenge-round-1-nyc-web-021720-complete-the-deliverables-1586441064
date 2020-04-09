const theatreId = 365
const URL = "https://evening-plateau-54365.herokuapp.com/theatres/365"


document.addEventListener('DOMContentLoaded', () => {




//fetch list of movies from URL
//render list
//add event listeners for buy button

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
        const cardHtml = `<div class="content">
        <div class="header">
            ${show.film.html}
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
  </div>
        
        
        
        `
    }

})
