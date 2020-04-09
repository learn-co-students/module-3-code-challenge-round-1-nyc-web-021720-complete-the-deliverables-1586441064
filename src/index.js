const theatreId = 360;

let showArea = document.getElementsByClassName("showings")
//showArea is an HTML Collection?? make it an array to push divs?
let displayArea = Array.from(showArea)
document.addEventListener('DOMContentLoaded', (event) => {
    
    function doesMyFetch(){
        //get request for theater showing info
        fetch('https://evening-plateau-54365.herokuapp.com/theatres/360')
        .then((response) => {
            return response.json()
        })
        .then((theater) => {
        //display sowings on page with necessary html elements/info
            theater.showings.forEach(showing => {
                console.log(showing.id)
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
                        (${showing.capacity} - ${showing.tickets_sold})
                    </div>
                    <span class="ui label">
                        ${showing.showtime}
                    </span>
                    </div>
                    <div class="extra content">
                        <div class="ui blue button">Buy Ticket</div>
                    </div>
                `
            displayArea.push(showingDiv)
        // add event listener for buy ticket button click
        document.addEventListener("click", function (event){
            event.preventDefault()
            if (event.target.textContent === "Buy Ticket"){
            //isolate # tickets remaining
            let remainingTickets = docuement.getElementsByClassName('description')
                if (remainingTickets > 0){
                    remainingTickets--
                //send post request to update database
                fetch('https://evening-plateau-54365.herokuapp.com/tickets', {
                    method: "POST",
                    headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                    showing_id: event.target.parentNode.dataset.showingId
                    }) 
                    .then(res => res.json())
                    .then(json => {
                        return res
                    }) 
                })
                //disable button if no tickets remaining
                }else if (remainingTickets === 0){
                    event.target.disabled = true
                    event.target.textContent = 'Sold Out'
                }
            }
        })
        });
        })
    }
    doesMyFetch()
});
