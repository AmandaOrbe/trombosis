// **********************************CONSTANS****************************






const ambientalesPresentacionTab = document.getElementById("ambientales-presentacion-side");
const ambientalesPresentacion = document.getElementById("ambientales-presentacion");

const ambientalesObjetivosTab = document.getElementById("ambientales-objetivos-side");
const ambientalesObjetivos = document.getElementById("ambientales-objetivos");

const ambientalesIntroduccionTab = document.getElementById("ambientales-introduccion-side");
const ambientalesIntroduccion = document.getElementById("ambientales-introduccion");

const ambientalesHistoriaTab = document.getElementById("ambientales-historia-side");
const ambientalesHistoria = document.getElementById("ambientales-historia");

const ambientalesCriteriosTab = document.getElementById("ambientales-criterios-side");
const ambientalesCriterios = document.getElementById("ambientales-criterios");

const ambientalesCarcinogenosTab = document.getElementById("ambientales-carcinogenos-side");
const ambientalesCarcinogenos = document.getElementById("ambientales-carcinogenos");

const ambientalesDietaTab = document.getElementById("ambientales-dieta-side");
const ambientalesDieta = document.getElementById("ambientales-dieta");

const ambientalesTabacoTab = document.getElementById("ambientales-tabaco-side");
const ambientalesTabaco = document.getElementById("ambientales-tabaco");

const ambientalesCarcinogenesisTab = document.getElementById("ambientales-carcinogenesis-side");
const ambientalesCarcinogenesis = document.getElementById("ambientales-carcinogenesis");

const ambientalesPrevencionTab = document.getElementById("ambientales-prevencion-side");
const ambientalesPrevencion = document.getElementById("ambientales-prevencion");


const ambientalesBiblioTab = document.getElementById("ambientales-biblio-side");
const ambientalesBiblio = document.getElementById("ambientales-biblio");









const ambientalesChapters = [
                  {tab: ambientalesPresentacionTab, content: ambientalesPresentacion} ,
                  {tab: ambientalesObjetivosTab, content: ambientalesObjetivos} ,
                  {tab: ambientalesIntroduccionTab, content: ambientalesIntroduccion},
                  {tab: ambientalesHistoriaTab, content: ambientalesHistoria},
                  {tab: ambientalesCriteriosTab, content: ambientalesCriterios},
                  {tab: ambientalesCarcinogenosTab, content: ambientalesCarcinogenos},
                  {tab: ambientalesCarcinogenesisTab, content: ambientalesCarcinogenesis},
                  {tab: ambientalesBiblioTab, content: ambientalesBiblio}
                ]





const ambientalesSubChapters = [
                  {tab: ambientalesDietaTab, content: ambientalesDieta} ,
                  {tab: ambientalesTabacoTab, content: ambientalesTabaco} 
                ]











// // **********************************SIDEBAR****************************




window.addEventListener('scroll', function(){

  ambientalesChapters.forEach(function(chapter){


    if ((chapter.content.offsetTop - 500) < (window.scrollY ) && (window.scrollY ) < ((chapter.content.offsetTop- 500 ) + chapter.content.scrollHeight)) {
      chapter.tab.classList.add('sidebar-content__item--current');        
      chapter.tab.classList.remove('sidebar__content__read');

      } else if ((window.scrollY ) >= (chapter.content.offsetTop - 500  + chapter.content.scrollHeight )){
        chapter.tab.classList.remove('sidebar-content__item--current');
        chapter.tab.classList.add('sidebar__content__read');
        // console.log(chapter.tab.classList + "is" + chapter.content.offsetTop  )
      } else if (chapter.tab.classList.contains('sidebar-content__item--current') && (chapter.content.offsetTop - 500 > (window.scrollY )))  {
        chapter.tab.classList.remove('sidebar-content__item--current');
        // chapter.tab.classList.remove('sidebar__content__read');
      }
    });

});


window.addEventListener('scroll', function(){
  ambientalesSubChapters.forEach(function(chapter){
    console.log(chapter.tab);
    console.log(chapter.content);
    if ((chapter.content.offsetTop - 500) < (window.scrollY ) && (window.scrollY ) < ((chapter.content.offsetTop- 500 ) + chapter.content.scrollHeight)) {
      chapter.tab.classList.add('sidebar-content__item--current');        
      chapter.tab.classList.remove('sidebar__content__read');

      } else if ((window.scrollY ) >= (chapter.content.offsetTop - 500  + chapter.content.scrollHeight )){
        chapter.tab.classList.remove('sidebar-content__item--current');
        chapter.tab.classList.add('sidebar__content__read');
        // console.log(chapter.tab.classList + "is" + chapter.content.offsetTop  )
      } else if (chapter.tab.classList.contains('sidebar-content__item--current') && (chapter.content.offsetTop - 500 > (window.scrollY )))  {
        chapter.tab.classList.remove('sidebar-content__item--current');
        // chapter.tab.classList.remove('sidebar__content__read');
      }
    });

});


// // **************************** LOCAL STORAGE*****************************



window.addEventListener('scroll', function(){
  localStorage.setItem("windowHeight", window.scrollY  );
});




// // **************************** LOCAL STORAGE*****************************


const ambientales = document.getElementById('ambientales');


  ambientales.addEventListener("click", function(event){
    console.log("ambientales")
    event.currentTarget.parentNode.classList.toggle("sidebar-content__invisible");
    event.currentTarget.querySelector(".fa-chevron-down").classList.toggle("sidebar-content__chevron-up");

  });


