const theatreId = 368;


const show= document.getElementsByClassName("ui cards showings")[0]
// const buybutton=document.getElementsByClassName("content")
// console.log(buybutton)

let url=`https://evening-plateau-54365.herokuapp.com/theatres/${theatreId}`

document.addEventListener("DOMContentLoaded",function(e){


    fetchMovie();

    buyticket()
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
    div.dataset.id=movie.id
    div.innerHTML=`
    <div class="content">
      <div class="header">
         ${movie.film.title}
      </div>
      <div class="meta">
        ${movie.film.runtime} minutes
      </div>
      <div class="description">
        ${movie.capacity-movie.tickets_sold} remaining tickets
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
 show.append(div)

}


function buyticket(){

document.addEventListener("click",function(e){
    if(e.target.textContent==="Buy Ticket"){
        console.dir(e.target)
        let id=e.target.parentNode.parentNode.dataset.id
        
        fetch()

    }
})

}


