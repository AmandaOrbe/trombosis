// **********************************CONSTANS****************************






const profilaxisPresentacionTab = document.getElementById("profilaxis-presentacion-side");
const profilaxisPresentacion = document.getElementById("profilaxis-presentacion");

const profilaxisObjetivosTab = document.getElementById("profilaxis-objetivos-side");
const profilaxisObjetivos = document.getElementById("profilaxis-objetivos");

const profilaxisIngresadoTab = document.getElementById("profilaxis-ingresado-side");
const profilaxisIngresado = document.getElementById("profilaxis-ingresado");

const profilaxisQuirurgicoTab = document.getElementById("profilaxis-quirurgico-side");
const profilaxisQuirurgico = document.getElementById("profilaxis-quirurgico");

const profilaxisCateterTab = document.getElementById("profilaxis-cateter-side");
const profilaxisCateter = document.getElementById("profilaxis-cateter");

const profilaxisAmbulatorioTab = document.getElementById("profilaxis-ambulatorio-side");
const profilaxisAmbulatorio = document.getElementById("profilaxis-ambulatorio");

const profilaxisEstudiosTab = document.getElementById("profilaxis-estudios-side");
const profilaxisEstudios = document.getElementById("profilaxis-estudios");

const profilaxisAnticoagulantesTab = document.getElementById("profilaxis-anticoagulantes-side");
const profilaxisAnticoagulantes = document.getElementById("profilaxis-anticoagulantes");

const profilaxisAmbulatoriaTab = document.getElementById("profilaxis-ambulatoria-side");
const profilaxisAmbulatoria = document.getElementById("profilaxis-ambulatoria");











const profilaxisChapters = [{tab: profilaxisPresentacionTab, content: profilaxisPresentacion} ,
                  {tab: profilaxisObjetivosTab, content: profilaxisObjetivos} ,
                  {tab: profilaxisIngresadoTab, content: profilaxisIngresado},
                  {tab: profilaxisQuirurgicoTab, content: profilaxisQuirurgico},
                  {tab: profilaxisCateterTab, content: profilaxisCateter},
                  {tab: profilaxisAmbulatorioTab, content: profilaxisAmbulatorio}
                ]



const profilaxisSubChapters = [{tab: profilaxisEstudiosTab, content: profilaxisEstudios} ,
                  {tab: profilaxisAnticoagulantesTab, content: profilaxisAnticoagulantes} ,
                  {tab: profilaxisAmbulatoriaTab, content: profilaxisAmbulatoria}
                ]












// // **********************************SIDEBAR****************************




window.addEventListener('scroll', function(){
  profilaxisChapters.forEach(function(chapter){


    if ((chapter.content.offsetTop - 500) < (window.scrollY ) && (window.scrollY ) < ((chapter.content.offsetTop- 500 ) + chapter.content.scrollHeight)) {
      chapter.tab.classList.add('sidebar-content__item--current');
          console.log(chapter.content.offsetTop);
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
  profilaxisSubChapters.forEach(function(chapter){


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

//////////

const profilaxis = document.getElementById('profilaxis');


  profilaxis.addEventListener("click", function(event){
    event.currentTarget.parentNode.classList.toggle("sidebar-content__invisible");
    event.currentTarget.querySelector(".fa-chevron-down").classList.toggle("sidebar-content__chevron-up");

  });

// ************************************ PHONE MENU ****************************


const profilaxisPhoneButton = document.getElementById("profilaxis-navigation__button");
const profilaxisSidebarItems = document.querySelectorAll(".sidebar-content__chapter, .sidebar-content__subchapter") ;


profilaxisPhoneButton.addEventListener("click", function(event){
  document.getElementById("sidebar").classList.toggle("width-zero");
  document.getElementById("main").classList.toggle("width-zero");
  document.getElementById("main").classList.toggle("hidden-phone-main");
  document.querySelector(".navigation__icon--1").classList.toggle("navigation__icon--1x");
  document.querySelector(".navigation__icon--3").classList.toggle("navigation__icon--3x");
  document.querySelector(".navigation__icon--2").classList.toggle("navigation__icon--2x");
  document.querySelector(".navigation__background").classList.toggle("navigation__background--small");
});


profilaxisSidebarItems.forEach(function(item){
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

