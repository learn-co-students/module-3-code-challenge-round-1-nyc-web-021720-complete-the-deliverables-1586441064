// insert 'defer' into script tag in HTML to replace DOMContentLoaded

const theatreId = 364;

const theatreUrl = 'https://evening-plateau-54365.herokuapp.com/theatres/364'

const showings = document.getElementsByClassName('ui cards showings')[0]

const ticketUrl = 'https://evening-plateau-54365.herokuapp.com/tickets'




function getTheatre(){
    return fetch(theatreUrl)
    .then(resp => resp.json())
}

getTheatre()
.then((theatre_obj) => {
    renderShowings(theatre_obj)
})



function renderShowings(theatre){

    theatre.showings.map(showing => {
    let div = document.createElement('div')
    div.setAttribute('class', 'card')
    div.dataset.showingId = showing.id
    div.innerHTML = `
    
        <div class="content">
            <div class="header">
                ${showing.film.title}
            </div>
            <div class="meta">
                ${showing.film.runtime}
            </div>
            <div class="description">
                ${showing.capacity} - ${showing.tickets_sold}
            </div>
            <span class="ui label">
                ${showing.showtime}
            </span>
        </div>
        <div class="extra content">
            <div class="ui blue button">Buy Ticket</div>
        </div>
    `

    showings.append(div)

    })    
}

function buyTicket(button){
    let parent = button.parentNode
    let id = parent.dataset.showingId
    fetch(ticketUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({showing_id: showingId})
    })
}







