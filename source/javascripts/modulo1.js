

// **********************************CONSTANS ****************************


const presentacionTab = document.getElementById("origen-presentacion-side");
const presentacion = document.getElementById("origen-presentacion");

const objetivosTab = document.getElementById("origen-objetivos-side");
const objetivos = document.getElementById("origen-objetivos");

const biomarcadoresTab = document.getElementById("origen-biomarcadores-side");
const biomarcadores = document.getElementById("origen-biomarcadores");

const biomarcadores1Tab = document.getElementById("origen-biomarcadores1-side");
const biomarcadores1 = document.getElementById("origen-biomarcadores1");

const biomarcadores2Tab = document.getElementById("origen-biomarcadores2-side");
const biomarcadores2 = document.getElementById("origen-biomarcadores2");

const genomaTab = document.getElementById("origen-genoma-side");
const genoma = document.getElementById("origen-genoma");

const genoma1Tab = document.getElementById("origen-genoma1-side");
const genoma1 = document.getElementById("origen-genoma1");

const genoma2Tab = document.getElementById("origen-genoma2-side");
const genoma2 = document.getElementById("origen-genoma2");

const genoma3Tab = document.getElementById("origen-genoma3-side");
const genoma3 = document.getElementById("origen-genoma3");

const biblioTab = document.getElementById("origen-biblio-side");
const biblio = document.getElementById("origen-biblio");









const chapters = [{tab: presentacionTab, content: presentacion} ,
                  {tab: objetivosTab, content: objetivos} ,
                  {tab: biomarcadoresTab, content: biomarcadores},
                  {tab: genomaTab, content: genoma},
                  {tab: biblioTab, content: biblio},
                ]



const subChapters = [{tab: biomarcadores1Tab, content: biomarcadores1} ,
                  {tab: biomarcadores2Tab, content: biomarcadores2},
                  {tab: genoma1Tab, content: genoma1} ,
                  {tab: genoma2Tab, content: genoma2},
                  {tab: genoma3Tab, content: genoma3} ,

                ]

// // **********************************SIDEBAR****************************



window.addEventListener('scroll', function(){
  chapters.forEach(function(chapter){
    if ((chapter.content.offsetTop - 500 )< (window.scrollY ) && (window.scrollY ) < ((chapter.content.offsetTop - 500) + chapter.content.scrollHeight)) {
      chapter.tab.classList.add('sidebar-content__item--current');
      chapter.tab.classList.remove('sidebar__content__read');

      } else if ((window.scrollY ) >= ((chapter.content.offsetTop - 500) + chapter.content.scrollHeight)){
        chapter.tab.classList.remove('sidebar-content__item--current');
        chapter.tab.classList.add('sidebar__content__read');
        // console.log(chapter.tab.classList + "is" + chapter.content.offsetTop  )
      } else if (chapter.tab.classList.contains('sidebar-content__item--current') && ((chapter.content.offsetTop - 500)> (window.scrollY )))  {
        chapter.tab.classList.remove('sidebar-content__item--current');
        // chapter.tab.classList.remove('sidebar__content__read');
      }
    });

});



window.addEventListener('scroll', function(){
  subChapters.forEach(function(chapter){
    if (chapter.content.offsetTop < (window.scrollY ) && (window.scrollY ) < (chapter.content.offsetTop + chapter.content.scrollHeight)) {
      chapter.tab.classList.add('sidebar-content__item--current');
      chapter.tab.classList.remove('sidebar__content__read');

      } else if ((window.scrollY ) >= (chapter.content.offsetTop + chapter.content.scrollHeight)){
        chapter.tab.classList.remove('sidebar-content__item--current');
        chapter.tab.classList.add('sidebar__content__read');
        // console.log(chapter.tab.classList + "is" + chapter.content.offsetTop  )
      } else if (chapter.tab.classList.contains('sidebar-content__item--current') && (chapter.content.offsetTop > (window.scrollY )))  {
        chapter.tab.classList.remove('sidebar-content__item--current');
        // chapter.tab.classList.remove('sidebar__content__read');
      }
    });

});




// // **************************** LOCAL STORAGE*****************************



window.addEventListener('scroll', function(){
  localStorage.setItem("windowHeight", window.scrollY  );
});




//  // *******************************  MENÚ CERRABLE ******************************

const origen = document.getElementById('origen');


  origen.addEventListener("click", function(event){
    console.log("origen")
    event.currentTarget.parentNode.classList.toggle("sidebar-content__invisible");
    event.currentTarget.querySelector(".fa-chevron-down").classList.toggle("sidebar-content__chevron-up");

  });

// ************************************ PHONE MENU ****************************


const origenPhoneButton = document.getElementById("origen-navigation__button");
const origenSidebarItems = document.querySelectorAll(".sidebar-content__chapter, .sidebar-content__subchapter") ;

function toggleSidebar(){
  document.getElementById("sidebar").classList.toggle("width-zero");
  document.getElementById("main").classList.toggle("width-zero");
  document.getElementById("main").classList.toggle("hidden-phone-main");
  document.querySelector(".navigation__icon--1").classList.toggle("navigation__icon--1x");
  document.querySelector(".navigation__icon--3").classList.toggle("navigation__icon--3x");
  document.querySelector(".navigation__icon--2").classList.toggle("navigation__icon--2x");
  document.querySelector(".navigation__background").classList.toggle("navigation__background--small");
}

origenPhoneButton.addEventListener("click", function(event){
  toggleSidebar();
});


origenSidebarItems.forEach(function(item){
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

// document.getElementById("side_bibliografia").addEventListener("click", function(event){
//   toggleSidebar();
// });




