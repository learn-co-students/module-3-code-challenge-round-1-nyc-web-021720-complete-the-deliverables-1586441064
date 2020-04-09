const theatreId = 360;

document.addEventListener('DOMContentLoaded', (event) => {
    // console.log('DOM fully loaded and parsed');
    let showArea = document.getElementsByClassName("ui cards showing")
    console.dir(showArea)
    console.log(showArea)
    function doesMyFetch(){
        fetch('https://evening-plateau-54365.herokuapp.com/theatres/360')
        .then((response) => {
            return response.json()
        })
        .then((theater) => {
            // console.log(theater.showings)
            theater.showings.forEach(showing => {
                let showingDiv = document.createElement('div')
                showingDiv.dataset.showingId = showing.id
                // showArea.appendChild(showingDiv)
                let title = document.createElement('h3')
                title.innerText = showing.film.title
                showingDiv.appendChild(title)

            });
            
        })
    }
    doesMyFetch()
});
