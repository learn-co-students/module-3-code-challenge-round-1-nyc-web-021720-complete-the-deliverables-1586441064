//constants for api
const theatreId = 372;
const BASE_URL = "https://evening-plateau-54365.herokuapp.com/";
const THEATRE_URL = `${BASE_URL}theatres/${theatreId}`;

//dom manipulation constants
const movieShowDiv = document.querySelector(`.uiCardsShowings`);

//invoke methods
getShowings().then((movies) => movies.forEach(displayMovieShowings));

//gets the theatere object from the specified url.
function getShowings() {
  return fetch(THEATRE_URL).then((res) =>
    res.json().catch((error) => console.log(error))
  );
}

function displayMovieShowings(movie) {
  //card to hold showing information
  const showCard = document.createElement("div");
  showCard.class = "card";

  //div to hold content of the card
  const showCardContent = document.createElement("div");
  showCardContent.class = "content";

  //Header containing title
  const showTitle = document.createElement("div");
  showTitle.class = "header";

  //div containing runtime
  const showRunTime = document.createElement("div");
  showRunTime.class = "meta";

  //div for desription

  //span for ui label

  //div to hold extra content

  //buy button div
}
