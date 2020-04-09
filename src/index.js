const theatreId = 375;

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://evening-plateau-54365.herokuapp.com/theatres/375')
    .then((response) => {
        return response.json
    })
    .then((data) => {
        console.log
    })
})
/* 1. When page loads, User sees as list of movie showings aka DOMContentLoaded
  Document.addEventListener('DOMContentLoaded', () => {
      fetch('https://evening-plateau-54365.herokuapp.com/theatres/375')
      .then((response) => {
          return response.json
      })
      .then((data) => {
          console.log
      })
  })






   2. Fetch movie showing from api and .then to get response than another .then to take the data for manipultion 
   3. Create a button called 'Buy Ticket' and have it attached to each movie showing
   4. Add event listner to 'Buy Ticket' button so when clicked the button decrements the remaining tickets. Also this should extend to the api
   5. Add an if statement to prevent anyone from buying a ticket to a sold out showing.
   5a. Should also change innerText to say 'Sold Out' instead of 'Buy Tickets'. */
