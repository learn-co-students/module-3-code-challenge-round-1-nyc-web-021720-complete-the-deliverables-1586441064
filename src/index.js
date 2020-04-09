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
  showCardDiv.innerHTML = `
  <div class="content">
  <div class="header">
    ${show.film.title}
  </div>
  <div class="meta">
    ${show.film.runtime} minutes
  </div>
  <div class="description">
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
}

const ticketsRemaining = show => {
  console.log(show)
  return (parseInt(show.capacity) - parseInt(show.tickets_sold))
}

//const buyTixBtn = document.getElementById('#button')
document.addEventListener('click', event => {
  if (event.target.id === 'button') {
    let description = 
    let ticketsAvailable = document.querySelector('.description').textContent
    
    let ticketAmt = parseInt(ticketsAvailable)
    .innerHTML = `${ticketAmt - 1}`


    // let ticketAmt = ticketsRemaining()
    // console.log(ticketAmt)
  }
})


