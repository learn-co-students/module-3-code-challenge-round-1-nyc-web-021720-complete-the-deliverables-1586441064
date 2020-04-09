const theatreId = 369;

document.addEventListener('DOMContentLoaded', () => {

    const showings = document.getElementsByClassName("ui cards showings")[0]
    console.log(showings)

    fetch('https://evening-plateau-54365.herokuapp.com/theatres/369')
    .then(response => {
        return response.json()
    })
    .then(theatres => {
        theatres.showings.forEach(showing => {
            createShowing(showing)
        });
    })

    document.addEventListener('click', (e) => {
        if (e.target.textContent === 'Buy Ticket') {
            showingId = e.target.dataset.id
            console.log(showingId)
            fetch('https://evening-plateau-54365.herokuapp.com/tickets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({showing_id: showingId})
            })
            .then(results => {
                return results.json()
            })
            .then(newShowing => {
                console.log(newShowing)
            })

        }
    })

    function createShowing(showing) {
        // console.log(showing)
        div = document.createElement('div')
        div.className = 'card'

        numOfTickets = showing.capacity - showing.tickets_sold

        div.innerHTML = `
            <div class="card">
                <div class="content">
                    <div class="header">
                        (${showing.film.title})
                    </div>
                    <div class="meta">
                        (${showing.film.runtime}) minutes
                    </div>
                    <div class="description">
                        (${numOfTickets}) remaining tickets
                    </div>
                    <span class="ui label">
                        (${showing.showtime})
                    </span>
                    </div>
                    <div class="extra content">
                    <div class="ui blue button" data-id=${showing.id}>Buy Ticket</div>
                </div>
            </div>
        `

        showings.append(div)
    }
})