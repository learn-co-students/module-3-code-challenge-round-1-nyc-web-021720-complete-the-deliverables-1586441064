// fetch get request to show all the movies
//add event listener to buy tickets
//when user buy a ticket, fetch get Post method
// when user buy a ticket, decrease remaining tickets
//when tickets are sold out, disable buy ticket button
// buy ticket button.textContent should be 'sold out'
const theatreId = 'https://evening-plateau-54365.herokuapp.com/theatres/367' ;

document.addEventListener('DOMContentLoaded', () =>{
    fetchShows(theatreId)





})

function fetchShows(url){
    fetch(url)
        .then(res => res.json())
        .then(object => {
            object.showings.forEach(showing => {
                renderShow()
            })
        })
}

