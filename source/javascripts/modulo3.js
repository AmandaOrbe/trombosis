// **********************************CONSTANS****************************






const microambientePresentacionTab = document.getElementById("microambiente-presentacion-side");
const microambientePresentacion = document.getElementById("microambiente-presentacion");

const microambienteObjetivosTab = document.getElementById("microambiente-objetivos-side");
const microambienteObjetivos = document.getElementById("microambiente-objetivos");

const microambientePoblacionesTab = document.getElementById("microambiente-poblaciones-side");
const microambientePoblaciones = document.getElementById("microambiente-poblaciones");

const microambienteCelulasMadreTab = document.getElementById("microambiente-celulas-madre-side");
const microambienteCelulasMadre = document.getElementById("microambiente-celulas-madre");

const microambienteCelulasVascularesTab = document.getElementById("microambiente-celulas-vasculares-side");
const microambienteCelulasVasculares = document.getElementById("microambiente-celulas-vasculares");

const microambienteCelulasInmunesTab = document.getElementById("microambiente-celulas-inmunes-side");
const microambienteCelulasInmunes = document.getElementById("microambiente-celulas-inmunes");

const microambienteProcesoTab = document.getElementById("microambiente-proceso-side");
const microambienteProceso = document.getElementById("microambiente-proceso");

const microambienteInvasionTab = document.getElementById("microambiente-invasion-side");
const microambienteInvasion = document.getElementById("microambiente-invasion");

const microambienteIntravasacionTab = document.getElementById("microambiente-intravasacion-side");
const microambienteIntravasacion = document.getElementById("microambiente-intravasacion");

const microambienteTransporteTab = document.getElementById("microambiente-transporte-side");
const microambienteTransporte = document.getElementById("microambiente-transporte");

const microambienteDetencionTab = document.getElementById("microambiente-detencion-side");
const microambienteDetencion = document.getElementById("microambiente-detencion");

const microambienteExtravasacionTab = document.getElementById("microambiente-extravasacion-side");
const microambienteExtravasacion = document.getElementById("microambiente-extravasacion");

const microambienteInfiltracionTab = document.getElementById("microambiente-infiltracion-side");
const microambienteInfiltracion = document.getElementById("microambiente-infiltracion");

const microambienteAngiogenesisTab = document.getElementById("microambiente-angiogenesis-side");
const microambienteAngiogenesis = document.getElementById("microambiente-angiogenesis");

const microambienteFormacionTab = document.getElementById("microambiente-formacion-side");
const microambienteFormacion = document.getElementById("microambiente-formacion");

const microambienteBiblioTab = document.getElementById("microambiente-biblio-side");
const microambienteBiblio = document.getElementById("microambiente-biblio");









const microambienteChapters = [{tab: microambientePresentacionTab, content: microambientePresentacion} ,
                  {tab: microambienteObjetivosTab, content: microambienteObjetivos} ,
                  {tab: microambientePoblacionesTab, content: microambientePoblaciones},
                  {tab: microambienteProcesoTab, content: microambienteProceso},
                  {tab: microambienteAngiogenesisTab, content: microambienteAngiogenesis},
                  {tab: microambienteBiblioTab, content: microambienteBiblio}
                ]





const microambienteSubChapters = [{tab: microambienteCelulasMadreTab, content: microambienteCelulasMadre} ,
                  {tab: microambienteCelulasVascularesTab, content: microambienteCelulasVasculares} ,
                  {tab: microambienteCelulasInmunesTab, content: microambienteCelulasInmunes},
                  {tab: microambienteInvasionTab, content: microambienteInvasion},
                  {tab: microambienteIntravasacionTab, content: microambienteIntravasacion},
                  {tab: microambienteTransporteTab, content: microambienteTransporte},
                  {tab: microambienteDetencionTab, content: microambienteDetencion},
                  {tab: microambienteExtravasacionTab, content: microambienteExtravasacion},
                  {tab: microambienteInfiltracionTab, content: microambienteInfiltracion},
                  {tab: microambienteFormacionTab, content: microambienteFormacion}
                ]











// // **********************************SIDEBAR****************************




window.addEventListener('scroll', function(){
  microambienteChapters.forEach(function(chapter){
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


window.addEventListener('scroll', function(){
  microambienteSubChapters.forEach(function(chapter){
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

////



const microambiente = document.getElementById('microambiente');


  microambiente.addEventListener("click", function(event){

    event.currentTarget.parentNode.classList.toggle("sidebar-content__invisible");
    event.currentTarget.querySelector(".fa-chevron-down").classList.toggle("sidebar-content__chevron-up");

  });

// ************************************ PHONE MENU ****************************


const microambientePhoneButton = document.getElementById("microambiente-navigation__button");
const microambienteSidebarItems = document.querySelectorAll(".sidebar-content__chapter, .sidebar-content__subchapter") ;



microambientePhoneButton.addEventListener("click", function(event){
  document.getElementById("sidebar").classList.toggle("width-zero");
  document.getElementById("main").classList.toggle("width-zero");
  document.getElementById("main").classList.toggle("hidden-phone-main");
  document.querySelector(".navigation__icon--1").classList.toggle("navigation__icon--1x");
  document.querySelector(".navigation__icon--3").classList.toggle("navigation__icon--3x");
  document.querySelector(".navigation__icon--2").classList.toggle("navigation__icon--2x");
  document.querySelector(".navigation__background").classList.toggle("navigation__background--small");
});


microambienteSidebarItems.forEach(function(item){
  item.addEventListener("click", function(event){

    document.getElementById("sidebar").classList.add("width-zero");
    document.getElementById("main").classList.remove("width-zero");
    document.getElementById("main").classList.remove("hidden-phone-main");
    document.querySelector(".navigation__icon--1").classList.remove("navigation__icon--1x");
    document.querySelector(".navigation__icon--3").classList.remove("navigation__icon--3x");
    document.querySelector(".navigation__icon--2").classList.remove("navigation__icon--2x");
    document.querySelector(".navigation__background").classList.remove("navigation__background--small");
  });
});



