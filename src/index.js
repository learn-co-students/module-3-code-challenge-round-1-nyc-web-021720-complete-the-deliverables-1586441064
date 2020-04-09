const theatreId = 361;
const url = "https://evening-plateau-54365.herokuapp.com/theatres/361"
const tixUrl= "https://evening-plateau-54365.herokuapp.com/tickets"

function getTheatre(){
    return fetch(url)
    .then(res => res.json())
}

function createTicket(showingId){
    fetch(tixUrl,{
        method: "POST",
        headers:{ 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body:JSON.stringify({
            "showing_id":showingId
        })

    })
    .then(res=>res.json())
    .then(json => console.log(json))
}

function renderShowings(theatre){
    const showings = theatre.showings
    const showingsDisplay = document.getElementsByClassName("ui cards showings")[0]

    showings.forEach(showing => {
        var remainingTix =  showing.capacity - showing.tickets_sold

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
        showTime.textContent = showing.showtime

        showingContent.append(filmTitle,runTime,remainingTickets,showTime)

        const buyButtonDiv = document.createElement('div')
        buyButtonDiv.className = "extra content"

        const buyTicketsButton = document.createElement('div')
        buyTicketsButton.className = "ui blue button"
        buyTicketsButton.textContent= "Buy Ticket"
        buyTicketsButton.addEventListener("click",function(e){
            e.preventDefault()
            if (showing.tickets_sold<showing.capacity){
                createTicket(showing.id)
            }else{
                buyTicketsButton.textContent= "Sold Out"
            }
            
        })

        buyButtonDiv.appendChild(buyTicketsButton)

        showingCard.append(showingContent,buyButtonDiv)

        showingsDisplay.appendChild(showingCard)

    });


}

getTheatre().then(renderShowings)