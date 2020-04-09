const theatreId = 360;

let showArea = document.getElementsByClassName("showings")
let displayArea = Array.from(showArea)
document.addEventListener('DOMContentLoaded', (event) => {
    // console.log('DOM fully loaded and parsed');
    console.dir(displayArea)
    // console.log(showArea)
    function doesMyFetch(){
        fetch('https://evening-plateau-54365.herokuapp.com/theatres/360')
        .then((response) => {
            return response.json()
        })
        .then((theater) => {
            // console.log(theater.showings)
            theater.showings.forEach(showing => {
                // console.log(showing)
                let showingDiv = document.createElement('div')
                showingDiv.dataset.showingId = showing.id
                showingDiv.className = "card"
                showingDiv.innerHTML = `
                <div class="content">
    <div class="header">
    ${showing.film.title}
    </div>
    <div class="meta">
      ${showing.film.runtime}
    </div>
    <div class="description">
      ${showing.film.capacity} - ${showing.film.tickets_sold}
    </div>
    <span class="ui label">
      ${showing.film.showtime}
    </span>
  </div>
  <div class="extra content">
    <div class="ui blue button">Buy Ticket</div>
  </div>
                `
                displayArea.push(showingDiv)
            });
            
        })

    }
    doesMyFetch()
});
