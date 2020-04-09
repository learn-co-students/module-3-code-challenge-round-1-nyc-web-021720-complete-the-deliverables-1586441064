//constants for api
const theatreId = 372;
const BASE_URL = "https://evening-plateau-54365.herokuapp.com/";
const THEATRE_URL = `${BASE_URL}theatres/${theatreId}`;
const TICKETS_URL = `${BASE_URL}tickets`;

//dom manipulation constants
const movieShowDiv = document.querySelector(`.cards`);

//invoke methods
getShowings().then((movies) => movies.showings.forEach(displayMovieShowings));

//gets the theatere object from the specified url.
function getShowings() {
  return fetch(THEATRE_URL)
    .then((res) => res.json())
    .catch((error) => console.log(error));
}

function displayMovieShowings(movie) {
  //card to hold showing information
  const showCard = document.createElement("div");
  showCard.className = "card";

  //div to hold content of the card
  const showCardContent = document.createElement("div");
  showCardContent.className = "content";

  //Header containing title
  const showTitle = document.createElement("div");
  showTitle.className = "header";
  showTitle.innerText = movie.film.title;

  //div containing runtime
  const showRunTime = document.createElement("div");
  showRunTime.className = "meta";
  showRunTime.innerText = `${movie.film.runtime} minutes`;

  //div for desription
  const showNumOfTickets = document.createElement("div");
  showNumOfTickets.className = "description";
  let remainingTickets =
    parseInt(movie.capacity) - parseInt(movie.tickets_sold);
  showNumOfTickets.innerText = `${remainingTickets} remaining tickets`;

  //span for ui label
  const showtime = document.createElement("span");
  showtime.className = "ui label";
  showtime.innerText = movie.showtime;

  //apend contents to the content div
  showCardContent.appendChild(showTitle);
  showCardContent.appendChild(showRunTime);
  showCardContent.appendChild(showNumOfTickets);
  showCardContent.appendChild(showtime);
  //append contents div to the card
  showCard.appendChild(showCardContent);

  //div to hold extra content
  const extraContent = document.createElement("div");
  extraContent.className = "extra content";

  //buy button div
  const buyButton = document.createElement("div");
  buyButton.className = "ui blue button";
  if (remainingTickets > 0) {
    buyButton.innerText = "Buy Ticket";
    //adding functionality to buyButton
    buyButton.addEventListener("click", (e) => {
      buyTicket(movie.id);
    });
  } else {
    buyButton.innerText = "Sold Out";
    buyButton.style.backgroundColor = "white";
    buyButton.style.color = "black";
  }

  //append button to extra content
  extraContent.appendChild(buyButton);
  //apend extra content to the card
  showCard.appendChild(extraContent);
  //append card to movie show div
  movieShowDiv.appendChild(showCard);
}

//Get ticket id
function createTicket(movieId) {
  fetch(TICKETS_URL, {
    method: "POST",
    headers: {
      "Content-Type": `application/json`,
      Accepts: `application/json`,
    },
    body: JSON.stringify({ showing_id: movieId }),
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
}

//Buy tickets
function buyTicket(movieId) {
  createTicket(movieId);
}
