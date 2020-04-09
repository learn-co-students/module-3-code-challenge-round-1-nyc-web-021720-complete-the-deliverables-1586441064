// insert 'defer' into script tag in HTML to replace DOMContentLoaded

const theatreId = 364;

const theatreUrl = 'https://evening-plateau-54365.herokuapp.com/theatres/364'

const showings = document.getElementsByClassName('ui cards showings')[0]




function getTheatre(){
    return fetch(theatreUrl)
    .then(resp => resp.json())
}

getTheatre()
.then((theatre_obj) => {
    let flatironTheatre = renderTheatre(theatre_obj)
})

function renderTheatre(theatre){

    const showingsCard = renderShowings(theatre)

    showings.append(showingsCard)

    function renderShowings(theatre){

    theatre.showings.forEach(showing => {
        let divCard = document.createElement('div')
        divCard.setAttribute('class', 'card')
        
        divCard.innerHTML = `
        <div class="content">
            <div class="header">
                ${showing.film.name}
            </div>
            <div class="meta">
                ${showing.film.runtime}
            </div>
            <div class="description">
                parseInt(${showing.capacity}) - parseInt(${showing.tickets_sold})
            </div>
            <span class="ui label">
                ${showing.showtime}
            </span>
        </div>
        <div class="extra content">
            <div class="ui blue button">Buy Ticket</div>
        </div>`
    })

    }


}




