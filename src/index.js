const theatreId = 366

const showings = document.querySelector('.ui cards showings')



fetch(` https://evening-plateau-54365.herokuapp.com/theatres/${theatreId}`)
.then(response => response.json())
.then(ticket => renderShows(ticket))

const renderShows = ticket => {
  ticket.showings.forEach(renderShow)
}

const renderShow = show => {
  console.log(show)
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
    ${} remaining tickets
  </div>
  <span class="ui label">
    (Showtime)
  </span>
  </div>
  <div class="extra content">
  <div class="ui blue button">Buy Ticket</div>
  </div>
  `
}
