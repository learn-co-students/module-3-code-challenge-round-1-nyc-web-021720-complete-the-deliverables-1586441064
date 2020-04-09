const theatreId = 357;
const THEATERS_LINK = "https://evening-plateau-54365.herokuapp.com/theatres/357"

document.addEventListener("DOMContentLoaded", (event => {

    fetchTheaters()

    function fetchTheaters() {
        fetch(THEATERS_LINK)
            .then(resp => resp.json())
            .then(data => data.showings.forEach(theater => {
                renderTheater(theater)
            }))
    }

    function renderTheater(theater) {
        console.log(theater)
    }
}))