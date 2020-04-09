const theatreId = 371;
//create fetch to render all movie showings when page load
//add listening on to "buy ticket button" - decrement tickets by -1; should persis to remote api

//error when show sold out/unable to purchase ticket
//disable "buy ticket button"; innertext shoud be sold out

document.addEventListener('DOMContentLoaded', () => {
console.log("We are connected!")

fetch ('https://evening-plateau-54365.herokuapp.com/theatres/371')
.then (r => r.json())
.then (showings => {
// 
    let movieShowingsHTML = `
    <div class="card">
  <div class="content">
    <div class="header">
     <h2>${showings.title}</h2>
    </div>
    <div class="meta">
      <h2>${showings.runtime}</h2>
    </div>
    <div class="description">
      <h2>${showings.capacity}</h2>
    </div>
    <span class="ui label">
      <li>${showings.showtime}</li>
    </span>
  </div>
  <div class="extra content">
    <div class="ui blue button">Buy Ticket</div>
  </div>
</div>
   
 `
 document.querySelector('#ui cards showings').innerHTML +=
 movieShowingsHTML
})










})