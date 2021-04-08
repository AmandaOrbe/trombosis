// **********************************CONSTANS****************************






const tratamientoPresentacionTab = document.getElementById("tratamiento-presentacion-side");
const tratamientoPresentacion = document.getElementById("tratamiento-presentacion");

const tratamientoObjetivosTab = document.getElementById("tratamiento-objetivos-side");
const tratamientoObjetivos = document.getElementById("tratamiento-objetivos");

const tratamientoIndicacionesTab = document.getElementById("tratamiento-indicaciones-side");
const tratamientoIndicaciones = document.getElementById("tratamiento-indicaciones");

const tratamientoIntroduccionTab = document.getElementById("tratamiento-introduccion-side");
const tratamientoIntroduccion = document.getElementById("tratamiento-introduccion");

const tratamientoEstablecidaTab = document.getElementById("tratamiento-establecida-side");
const tratamientoEstablecida = document.getElementById("tratamiento-establecida");

const tratamientoAbsolutasTab = document.getElementById("tratamiento-absolutas-side");
const tratamientoAbsolutas = document.getElementById("tratamiento-absolutas");

const tratamientoRelativasTab = document.getElementById("tratamiento-relativas-side");
const tratamientoRelativas = document.getElementById("tratamiento-relativas");

const tratamientoTrombolisisTab = document.getElementById("tratamiento-trombolisis-side");
const tratamientoTrombolisis = document.getElementById("tratamiento-trombolisis");

const tratamientoFiltroTab = document.getElementById("tratamiento-filtro-side");
const tratamientoFiltro = document.getElementById("tratamiento-filtro");

const tratamientoRecomendacionesTab = document.getElementById("tratamiento-recomendaciones-side");
const tratamientoRecomendaciones = document.getElementById("tratamiento-recomendaciones");

const tratamientoRecurrenciaTab = document.getElementById("tratamiento-recurrencia-side");
const tratamientoRecurrencia = document.getElementById("tratamiento-recurrencia");











const tratamientoChapters = [{tab: tratamientoPresentacionTab, content: tratamientoPresentacion} ,
                  {tab: tratamientoObjetivosTab, content: tratamientoObjetivos} ,
                  {tab: tratamientoIndicacionesTab, content: tratamientoIndicaciones}
                ]





const tratamientoSubChapters = [{tab: tratamientoIntroduccionTab, content: tratamientoIntroduccion} ,
                  {tab: tratamientoEstablecidaTab, content: tratamientoEstablecida} ,
                  {tab: tratamientoAbsolutasTab, content: tratamientoAbsolutas},
                  {tab: tratamientoRelativasTab, content: tratamientoRelativas},
                  {tab: tratamientoTrombolisisTab, content: tratamientoTrombolisis},
                  {tab: tratamientoFiltroTab, content: tratamientoFiltro},
                  {tab: tratamientoRecomendacionesTab, content: tratamientoRecomendaciones},
                  {tab: tratamientoRecurrenciaTab, content: tratamientoRecurrencia}
                ]











// // **********************************SIDEBAR****************************




window.addEventListener('scroll', function(){
  tratamientoChapters.forEach(function(chapter){
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
  tratamientoSubChapters.forEach(function(chapter){
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



const tratamiento = document.getElementById('tratamiento');


  tratamiento.addEventListener("click", function(event){

    event.currentTarget.parentNode.classList.toggle("sidebar-content__invisible");
    event.currentTarget.querySelector(".fa-chevron-down").classList.toggle("sidebar-content__chevron-up");

  });

// ************************************ PHONE MENU ****************************


const tratamientoPhoneButton = document.getElementById("tratamiento-navigation__button");
const tratamientoSidebarItems = document.querySelectorAll(".sidebar-content__chapter, .sidebar-content__subchapter") ;



tratamientoPhoneButton.addEventListener("click", function(event){
  document.getElementById("sidebar").classList.toggle("width-zero");
  document.getElementById("main").classList.toggle("width-zero");
  document.getElementById("main").classList.toggle("hidden-phone-main");
  document.querySelector(".navigation__icon--1").classList.toggle("navigation__icon--1x");
  document.querySelector(".navigation__icon--3").classList.toggle("navigation__icon--3x");
  document.querySelector(".navigation__icon--2").classList.toggle("navigation__icon--2x");
  document.querySelector(".navigation__background").classList.toggle("navigation__background--small");
});


tratamientoSidebarItems.forEach(function(item){
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



