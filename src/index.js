const theatreId = 369;

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://evening-plateau-54365.herokuapp.com/theatres/369')
    .then(response => {
        return response.json()
    })
    .then(theatres => {
        theatres.showings)
    })
})