const theatreId = 366

const showings = document.querySelector('.showings')



fetch(` https://evening-plateau-54365.herokuapp.com/theatres/${theatreId}`)
.then(response => response.json())
.then(ticket => renderShows(ticket))

const renderShows = ticket => {
  ticket.showings.forEach(renderShow)
}

const renderShow = show => {
  //console.log(show)
  let remainingTix = ticketsRemaining(show)
  let showCardDiv = document.createElement('div')
  showCardDiv.className = 'card'
  showCardDiv.dataset.id = show.id
  showCardDiv.innerHTML = `
  <div class="content">
  <div class="header">
    ${show.film.title}
  </div>
  <div class="meta">
    ${show.film.runtime} minutes
  </div>
  <div id="${show.id}" class="description">
    ${remainingTix} remaining tickets
  </div>
  <span class="ui label">
    ${show.showtime}
  </span>
  </div>
  <div class="extra content">
  <div id="button" class="ui blue button">Buy Ticket</div>
  </div>
  `
  showings.append(showCardDiv)
  getShowId(show.id)
}

const getShowId = showId => {
  return showId
}

const ticketsRemaining = show => {
  return (parseInt(show.capacity) - parseInt(show.tickets_sold))
}


showings.addEventListener('click', event => {
  if (event.target.id === 'button') {
    let showId = event.target.parentNode.parentNode.dataset.id
    let description = document.querySelector('.description')
    let ticketsAvailable = document.querySelector('.description').textContent
    let ticketAmt = parseInt(ticketsAvailable)
    if (ticketAmt > 0) {
      description.innerHTML = `${ticketAmt - 1} remaining tickets`

      fetch("https://evening-plateau-54365.herokuapp.com/tickets", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({ showing_id: showId })
      })
    } else if (ticketAmt === 0) {
      alert("That showing is sold out")
    }
  }
})


