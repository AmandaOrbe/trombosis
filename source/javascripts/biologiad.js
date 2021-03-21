

const cards = document.querySelectorAll('.card')

cards.forEach(function(card){

  card.addEventListener("click", function(event){
    event.currentTarget.classList.toggle("card__visible");
    event.currentTarget.querySelector("i").classList.toggle("fa-plus");
    event.currentTarget.querySelector("i").classList.toggle("fa-minus");

  });

});

