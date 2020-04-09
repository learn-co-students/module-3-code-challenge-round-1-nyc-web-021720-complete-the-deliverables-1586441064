// fetch get request to show all the movies
//add event listener to buy tickets
//when user buy a ticket, fetch get Post method
// when user buy a ticket, decrease remaining tickets
//when tickets are sold out, disable buy ticket button
// buy ticket button.textContent should be 'sold out'
const theatreId = 'https://evening-plateau-54365.herokuapp.com/theatres/367' ;
const showCards = document.querySelector('.ui.cards.showings')
// console.log(showCards)

document.addEventListener('DOMContentLoaded', () =>{
    fetchShows(theatreId)

    showCards.addEventListener('click', (e) => {
        if (e.target.textContent === 'Buy Ticket'){
            let showId = e.target.parentNode.parentNode.dataset.id
            let remainTickets = e.target.parentNode.parentNode.firstChild.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.nextElementSibling
            remainTickets --
            e.target.parentNode.parentNode.firstChild.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.nextElementSibling = remainTickets
            fetch('https://evening-plateau-54365.herokuapp.com/tickets',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    showing_id: showId
                })
                
            })
            if (remainTickets <= 0){
                let buyBtn = document.querySelector('.ui.blue.button')
                buyBtn.diabled = true
                buyBtn.textContent = 'sold out'
            }
        }

            
    })




    
    function fetchShows(url){
        fetch(url)
        .then(res => res.json())
        .then(object => {
            object.showings.forEach(showing => {
                renderShow(showing)
                // console.log(showing)
            })
        })
    }
    
    function renderShow(showing){
        let showCard = document.createElement('div')
        
        let remainTickets = showing.capacity - showing['tickets_sold']
        showCard.className = 'card'
        showCard.dataset.id = showing.id
        showCard.innerHTML = `
        <div class="content">
        <div class="header">
        ${showing.film['title']}
        </div>
        <div class="meta">
        ${showing.film['runtime']}
        </div>
        <div class="description">
        ${remainTickets}
        </div>
        <span class="ui label">
        ${showing.showtime}
        </span>
        </div>
        <div class="extra content">
        <div class="ui blue button">Buy Ticket</div>
        </div>
        `
        showCards.append(showCard)
        // console.log(document.querySelector('.ui.blue.button'))
    }
})
    
