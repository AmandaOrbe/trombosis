// **********************************CONSTANS****************************






const factoresPresentacionTab = document.getElementById("factores-presentacion-side");
const factoresPresentacion = document.getElementById("factores-presentacion");

const factoresObjetivosTab = document.getElementById("factores-objetivos-side");
const factoresObjetivos = document.getElementById("factores-objetivos");

const factoresIntroduccionTab = document.getElementById("factores-introduccion-side");
const factoresIntroduccion = document.getElementById("factores-introduccion");

const factoresRiesgoTab = document.getElementById("factores-riesgo-side");
const factoresRiesgo = document.getElementById("factores-riesgo");

const factoresRiesgoPronosticoTab = document.getElementById("factores-riesgo-pronostico-side");
const factoresRiesgoPronostico = document.getElementById("factores-riesgo-pronostico");

const factoresPronosticoTab = document.getElementById("factores-pronostico-side");
const factoresPronostico = document.getElementById("factores-pronostico");

const factoresPredictivosTab = document.getElementById("factores-predictivos-side");
const factoresPredictivos = document.getElementById("factores-predictivos");










const factoresChapters = [{tab: factoresPresentacionTab, content: factoresPresentacion} ,
                  {tab: factoresObjetivosTab, content: factoresObjetivos} ,
                  {tab: factoresIntroduccionTab, content: factoresIntroduccion},
                  {tab: factoresRiesgoTab, content: factoresRiesgo},
                  {tab: factoresPredictivosTab, content: factoresPredictivos},
                ]





const factoresSubChapters = [{tab: factoresRiesgoPronosticoTab, content: factoresRiesgoPronostico} ,
                  {tab: factoresPronosticoTab, content: factoresPronostico} ,
                ]











// // **********************************SIDEBAR****************************




window.addEventListener('scroll', function(){
  factoresChapters.forEach(function(chapter){


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
  factoresSubChapters.forEach(function(chapter){


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

/////////

// // **************************** chevron*****************************

const factores = document.getElementById('factores');


  factores.addEventListener("click", function(event){
    console.log("factores")
    event.currentTarget.parentNode.classList.toggle("sidebar-content__invisible");
    event.currentTarget.querySelector(".fa-chevron-down").classList.toggle("sidebar-content__chevron-up");

  });


// // ************************************ PHONE MENU ****************************


const factoresPhoneButton = document.getElementById("factores-navigation__button");
const factoresSidebarItems = document.querySelectorAll(".sidebar-content__chapter, .sidebar-content__subchapter") ;


factoresPhoneButton.addEventListener("click", function(event){
  document.getElementById("sidebar").classList.toggle("width-zero");
  document.getElementById("main").classList.toggle("width-zero");
  document.getElementById("main").classList.toggle("hidden-phone-main");
  document.querySelector(".navigation__icon--1").classList.toggle("navigation__icon--1x");
  document.querySelector(".navigation__icon--3").classList.toggle("navigation__icon--3x");
  document.querySelector(".navigation__icon--2").classList.toggle("navigation__icon--2x");
  document.querySelector(".navigation__background").classList.toggle("navigation__background--small");
});


factoresSidebarItems.forEach(function(item){
  item.addEventListener("click", function(event){
    console.log(item);
    document.getElementById("sidebar").classList.add("width-zero");
    document.getElementById("main").classList.remove("width-zero");
    document.getElementById("main").classList.remove("hidden-phone-main");
    document.querySelector(".navigation__icon--1").classList.remove("navigation__icon--1x");
    document.querySelector(".navigation__icon--3").classList.remove("navigation__icon--3x");
    document.querySelector(".navigation__icon--2").classList.remove("navigation__icon--2x");
    document.querySelector(".navigation__background").classList.remove("navigation__background--small");
  });
});


