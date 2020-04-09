const theatreId = 361;
const url = "https://evening-plateau-54365.herokuapp.com/theatres/361"


function getTheatre(){
    return fetch(url)
    .then(res => res.json())
}

function renderShowings(theatre){
    const showings = theatre.showings

    showings.forEach(showing => {
        const remainingTix =  showing.capacity - showing.tickets_sold

        const showingCard = document.createElement('div')
        showingCard.className = "card"

        const showingContent = document.createElement('div')
        showingContent.className = "content"

        const filmTitle = document.createElement('div')
        filmTitle.className= "header"
        filmTitle.textContent= showing.film.title

        const runTime = document.createElement('div')
        runTime.className="meta"
        runTime.textContent= showing.film.runtime +" "+ "minutes"

        const remainingTickets = document.createElement('div')
        remainingTickets.className= "description"
        remainingTickets.textContent =  remainingTix +" "+"remaining tickets"

        const  showTime = document.createElement('span')
        showTime.className = "ui label"
        showTime.textContent = showing.showTime

        showingContent.append(filmTitle,runTime,remainingTix,showTime)

        const buyButtonDiv = document.createElement('div')
        buyButtonDiv.className = "extra content"

        const buyTicketsButton = document.createElement('div')
        buyTicketsButton.className = "ui blue button"
        buyTicketsButton.textContent= "Buy Ticket"

        buyButtonDiv.appendChild(buyTicketsButton)

        showingCard.append(showingContent,buyButtonDiv)

    });


}

<div class="card">
  <div class="content">
    <div class="header">
      (Film Title)
    </div>
    <div class="meta">
      (Runtime) minutes
    </div>
    <div class="description">
      (Num Tickets) remaining tickets
    </div>
    <span class="ui label">
      (Showtime)
    </span>
  </div>
  <div class="extra content">
    <div class="ui blue button">Buy Ticket</div>
  </div>
</div>