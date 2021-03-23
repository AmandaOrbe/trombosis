// **********************************CONSTANS****************************






const infecciososPresentacionTab = document.getElementById("infecciosos-presentacion-side");
const infecciososPresentacion = document.getElementById("infecciosos-presentacion");

const infecciososObjetivosTab = document.getElementById("infecciosos-objetivos-side");
const infecciososObjetivos = document.getElementById("infecciosos-objetivos");

const infecciososIntroduccionTab = document.getElementById("infecciosos-introduccion-side");
const infecciososIntroduccion = document.getElementById("infecciosos-introduccion");

const infecciososVirusTab = document.getElementById("infecciosos-virus-side");
const infecciososVirus = document.getElementById("infecciosos-virus");

const infecciososVEBTab = document.getElementById("infecciosos-VEB-side");
const infecciososVEB = document.getElementById("infecciosos-VEB");

const infecciososHepatocarcinomaTab = document.getElementById("infecciosos-hepatocarcinoma-side");
const infecciososHepatocarcinoma = document.getElementById("infecciosos-hepatocarcinoma");

const infecciososVPHTab = document.getElementById("infecciosos-VPH-side");
const infecciososVPH = document.getElementById("infecciosos-VPH");

const infecciososMerkelTab = document.getElementById("infecciosos-merkel-side");
const infecciososMerkel = document.getElementById("infecciosos-merkel");

const infecciososRetrovirusTab = document.getElementById("infecciosos-retrovirus-side");
const infecciososRetrovirus = document.getElementById("infecciosos-retrovirus");

const infecciososBacteriasTab = document.getElementById("infecciosos-bacterias-side");
const infecciososBacterias = document.getElementById("infecciosos-bacterias");

const infecciososParasitosTab = document.getElementById("infecciosos-parasitos-side");
const infecciososParasitos = document.getElementById("infecciosos-parasitos");

const infecciososEspanaTab = document.getElementById("infecciosos-espana-side");
const infecciososEspana = document.getElementById("infecciosos-espana");


const infecciososBiblioTab = document.getElementById("infecciosos-biblio-side");
const infecciososBiblio = document.getElementById("infecciosos-biblio");









const infecciososChapters = [
                  {tab: infecciososPresentacionTab, content: infecciososPresentacion} ,
                  {tab: infecciososObjetivosTab, content: infecciososObjetivos} ,
                  {tab: infecciososIntroduccionTab, content: infecciososIntroduccion},
                  {tab: infecciososVirusTab, content: infecciososVirus},
                  {tab: infecciososBacteriasTab, content: infecciososBacterias},
                  {tab: infecciososParasitosTab, content: infecciososParasitos},
                  {tab: infecciososEspanaTab, content: infecciososEspana},
                  {tab: infecciososBiblioTab, content: infecciososBiblio}
                ]





const infecciososSubChapters = [{tab: infecciososVEBTab, content: infecciososVEB} ,
                  {tab: infecciososHepatocarcinomaTab, content: infecciososHepatocarcinoma} ,
                  {tab: infecciososVPHTab, content: infecciososVPH},
                  {tab: infecciososMerkelTab, content: infecciososMerkel},
                  {tab: infecciososRetrovirusTab, content: infecciososRetrovirus},
                ]











// // **********************************SIDEBAR****************************




window.addEventListener('scroll', function(){

  infecciososChapters.forEach(function(chapter){


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
  infecciososSubChapters.forEach(function(chapter){
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


