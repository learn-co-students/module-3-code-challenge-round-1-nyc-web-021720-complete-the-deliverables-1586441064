const theatreId = 362;
const THEATRES_URL = "https://evening-plateau-54365.herokuapp.com/theatres/362"

document.addEventListener('DOMContentLoaded',function(){
const movieList = document.querySelector('.showings')
 
    getData()

    movieList.addEventListener('click',function(event){
        if(event.target.className==='ui blue button'){
            

            let val = event.target.parentNode.parentNode.querySelector('.description').innerHTML           
            val--
            event.target.parentNode.parentNode.querySelector('.description').innerHTML = val
            
            updateTicket(event,val)
        }
    })

    
    
    function getData(){
        
        fetch(THEATRES_URL)
        .then(resp => resp.json())
        .then(function(data){
            data.showings.forEach(function(data){
            let div = renderFilms(data)
            movieList.appendChild(div)
          })
        })
    }
    
    function renderFilms(film){
        let div = document.createElement('div')
        div.className = 'card'
        let rem = parseInt(film.capacity) - parseInt(film.tickets_sold)
        div.innerHTML = `
        <div class="content">
        <div class="header">
          ${film.film.title}
        </div>
        <div class="meta">
        ${film.film.runtime}
        </div>
        <div class="description">
        ${rem}
        </div>
        <span class="ui label">
        ${film.showtime}
        </span>
      </div>
      <div class="extra content">
        <div data-id=${film.id} class="ui blue button">Buy Ticket</div>
      </div>
        `
        return div
    }

    function updateTicket(event,val){
        let more = event.parentNode.parentNode.querySelector('.description').innerHTML--
        let obj = {
            method: "PATCH",
            headers: {    
              "Content-Type": "application/json",
      
              "Accept": "application/json"
           
            },    
            body: JSON.stringify({     
              "tickets_sold": more    
            })

        }
        
        
        
        fetch(THEATRES_URL+"/"+event.target.dataset.id , obj )
        .then(res => res.json())
        .then(function(data){
            
        })
      
      
    }



    

})