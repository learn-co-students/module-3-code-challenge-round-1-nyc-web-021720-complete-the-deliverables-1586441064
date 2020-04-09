// insert 'defer' into script tag in HTML to replace DOMContentLoaded

const theatreId = 364;

const theatreUrl = 'https://evening-plateau-54365.herokuapp.com/theatres/364'

const showings = document.getElementsByClassName('ui cards showings')[0]

const ticketUrl = 'https://evening-plateau-54365.herokuapp.com/theatres/364/tickets'




function getTheatre(){
    return fetch(theatreUrl)
    .then(resp => resp.json())
}

getTheatre()
.then((theatre_obj) => {
    renderShowings(theatre_obj)
})

// Short on time, could not figure out how to subtract API Objects (Capacity - tickets sold)

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

document.addEventListener('click', function(event){
    if(event.target.className === 'ui blue button'){
        buyTicket(event.target)
    }

    function buyTicket(button){
        let parent = button.parentNode
        let showingId = parent.dataset.showingId
    // CANT FIGURE OUT THIS DAMN TICKET URL!!!!!!!
        fetch(theatreUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({showing_id: showingId})
        })
    }
})

// I imagine the ticket API is a bunch of show objects with NESTED tickets
// I would make a fetch DELETE request once I posted a new ticket object and then Delete ticket from API 
// Then create an console.error for any shows that sold out of tickets 

// UPDATE
// Tried to use theatreUrl because I saw the tickets were nested within the showing object
// recieved "POST 404 error (Not Found)"

// Decrease ticket in DOM
// grab innerText from DOM and assign to variable, decrement "--tickets"








