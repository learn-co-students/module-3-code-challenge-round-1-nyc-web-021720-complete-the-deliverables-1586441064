const theatreId = 371;
//create fetch to render all movie showings when page load
//add listening on to "buy ticket button" - decrement tickets by -1; should persis to remote api

//error when show sold out/unable to purchase ticket
//disable "buy ticket button"; innertext shoud be sold out

document.addEventListener('DOMContentLoaded', () => {
console.log("We are connected!")

fetch (`https://evening-plateau-54365.herokuapp.com/`)
.then (r => (r.json()))
.then (showings => {

    let movieShowings = `
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
   
    `
})










})