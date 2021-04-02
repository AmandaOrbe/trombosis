// **********************************CONSTANS****************************






const respuestaPresentacionTab = document.getElementById("respuesta-presentacion-side");
const respuestaPresentacion = document.getElementById("respuesta-presentacion");

const respuestaObjetivosTab = document.getElementById("respuesta-objetivos-side");
const respuestaObjetivos = document.getElementById("respuesta-objetivos");

const respuestaIntroduccionTab = document.getElementById("respuesta-introduccion-side");
const respuestaIntroduccion = document.getElementById("respuesta-introduccion");

const respuestaRespuestaTab = document.getElementById("respuesta-respuesta-side");
const respuestaRespuesta = document.getElementById("respuesta-respuesta");

const respuestaReparacionTab = document.getElementById("respuesta-reparacion-side");
const respuestaReparacion = document.getElementById("respuesta-reparacion");

const respuestaEscisionTab = document.getElementById("respuesta-escision-side");
const respuestaEscision = document.getElementById("respuesta-escision");

const respuestaApareamientoTab = document.getElementById("respuesta-apareamiento-side");
const respuestaApareamiento = document.getElementById("respuesta-apareamiento");

const respuestaRecombinacionTab = document.getElementById("respuesta-recombinacion-side");
const respuestaRecombinacion = document.getElementById("respuesta-recombinacion");

const respuestaNoHomologosTab = document.getElementById("respuesta-no-homologos-side");
const respuestaNoHomologos = document.getElementById("respuesta-no-homologos");


const respuestaBiblioTab = document.getElementById("respuesta-biblio-side");
const respuestaBiblio = document.getElementById("respuesta-biblio");









const resuestaChapters = [{tab: respuestaPresentacionTab, content: respuestaPresentacion} ,
                  {tab: respuestaObjetivosTab, content: respuestaObjetivos} ,
                  {tab: respuestaIntroduccionTab, content: respuestaIntroduccion},
                  {tab: respuestaRespuestaTab, content: respuestaRespuesta},
                  {tab: respuestaBiblioTab, content: respuestaBiblio}
                ]





const resuestaSubChapters = [{tab: respuestaReparacionTab, content: respuestaReparacion} ,
                  {tab: respuestaEscisionTab, content: respuestaEscision} ,
                  {tab: respuestaApareamientoTab, content: respuestaApareamiento},
                  {tab: respuestaRecombinacionTab, content: respuestaRecombinacion},
                  {tab: respuestaNoHomologosTab, content: respuestaNoHomologos},
                ]











// // **********************************SIDEBAR****************************




window.addEventListener('scroll', function(){
  resuestaChapters.forEach(function(chapter){
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


window.addEventListener('scroll', function(){
  resuestaSubChapters.forEach(function(chapter){
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

/////////



const respuesta = document.getElementById('respuesta');


  respuesta.addEventListener("click", function(event){
    console.log("respuesta")
    event.currentTarget.parentNode.classList.toggle("sidebar-content__invisible");
    event.currentTarget.querySelector(".fa-chevron-down").classList.toggle("sidebar-content__chevron-up");

  });


// ************************************ PHONE MENU ****************************


const respuestaPhoneButton = document.getElementById("respuesta-navigation__button");
const respuestaSidebarItems = document.querySelectorAll(".sidebar-content__chapter, .sidebar-content__subchapter") ;


respuestaPhoneButton.addEventListener("click", function(event){
  document.getElementById("sidebar").classList.toggle("width-zero");
  document.getElementById("main").classList.toggle("width-zero");
  document.getElementById("main").classList.toggle("hidden-phone-main");
  document.querySelector(".navigation__icon--1").classList.toggle("navigation__icon--1x");
  document.querySelector(".navigation__icon--3").classList.toggle("navigation__icon--3x");
  document.querySelector(".navigation__icon--2").classList.toggle("navigation__icon--2x");
  document.querySelector(".navigation__background").classList.toggle("navigation__background--small");
});


respuestaSidebarItems.forEach(function(item){
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


