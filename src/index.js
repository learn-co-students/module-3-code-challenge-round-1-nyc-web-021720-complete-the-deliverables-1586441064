const theatreId = 371;
const buyTicketBtn = document.querySelector('#ui blue button')

//create fetch to render all movie showings, then display it on page load
//add listening on to "buy ticket button" - decrement tickets by -1; should persis to remote api

//create error for when show sold out/unable to purchase ticket
//disable "buy ticket button" by calling .disable within if/else; innertext shoud be sold out

document.addEventListener('DOMContentLoaded', () => {
console.log("We are connected!")

fetch ('https://evening-plateau-54365.herokuapp.com/theatres/371')
.then (r => r.json())
.then (showings => {
//  console.log(showings)
let movieShowingsHTML = showings.forEach (function(show) {
//**GOT STUCK IN THIS LINE 17 ERROR!! Reading forEach as not a function */
  return `
    <div class="card">
  <div class="content">
    <div class="header">
     <h2>${show.title}</h2>
    </div>
    <div class="meta">
      <h2>${show.runtime}</h2>
    </div>
    <div class="description">
      <h2>${show.capacity}</h2>
    </div>
    <span class="ui label">
      <li>${show.showtime}</li>
    </span>
  </div>
  <div class="extra content">
    <div class="ui blue button">Buy Ticket</div>
  </div>
</div>
   
 `
})
 document.querySelector("#ui cards showings").innerHTML +=
 movieShowingsHTML


})
buyTicketBtn.addEventListener('click', function(e){
    console.log(e.target)
    //**COULDNT TEST TO OR EVEN LISTEN FOR IT BC OF PREVOUS ERROR*/
})

})