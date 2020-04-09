const theatreId = 368;


const showing= document.querySelector("ui cards showings")

let url=`https://evening-plateau-54365.herokuapp.com/theatres/${theatreId}`
document.addEventListener("DOMContentLoaded",function(e){


    fetchMovie();
})



function fetchMovie(){
    fetch(url)
    .then(resp =>resp.json())
    // .then(console.log)
    .then(movies => movies.showings.forEach(function(movie){
        renderMovies(movie)
    })
    )
}


function renderMovies(movie){
    const div= document.createElement("div")
    div.className="card"
    div.innerHTML=`
    <div class="content">
      <div class="header">
         ${movie.film.title}
      </div>
      <div class="meta">
        ${movie.film.runtime}
      </div>
      <div class="description">
        ${movie.capacity-movie.tickets_sold}
      </div>
      <span class="ui label">
      ${movie.showtime}
      </span>
    </div>
    <div class="extra content">
      <div class="ui blue button">Buy Ticket</div>
    </div>
  </div>
    
    `
    showing.append(div)
 

}