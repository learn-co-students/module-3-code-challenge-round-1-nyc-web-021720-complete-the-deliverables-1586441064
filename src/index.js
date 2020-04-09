// As a user, when the page loads I should see a list of movie showings fetched 
// from a remote API.

// As a user, clicking on the 'Buy Ticket' button should purchase a 
// ticket and decrement the remaining tickets by one. This information should be 
// persisted in the remote API.

// As a user I should not be able to purchase a ticket for a sold out showing. 
// The 'Buy Ticket' button should be disabled on sold out showings, and the text should 
// change to "sold out".

// Movie Card
{/* <div class="card">
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
</div> */}

const theatreId = 358;
const showtimesUrl = "https://evening-plateau-54365.herokuapp.com/theatres/358"
const showtimesDiv = document.getElementsByClassName("ui inverted red menu")

document.addEventListener("DOMContentLoaded", event => {
    fetchShowtimes()
    clickHandler()

})

function fetchShowtimes() {
    fetch(showtimesUrl)
        .then(response => response.json())
        .then(showtimes => 
            showtimes.forEach(
                (showtime) => {
                    let li = renderShowtime(showtime)
                    showtimesDiv.append(li)
                })                    
)}

function renderShowtime(showtime) { 
    let showtimeCard = document.createElement("div")
    showtimeCard.className = "card"
    console.log(showtime)
    
    showtimeCard.innerHTML = `
        <div class="card">
            <div class="content">
                <div class="header">
                    ${showtime.name}
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
    `
}