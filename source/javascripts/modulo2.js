// **********************************CONSTANS****************************






const oncogenesisPresentacionTab = document.getElementById("presentacion-side");
const oncogenesisPresentacion = document.getElementById("oncogenesis-presentacion");

const oncogenesisObjetivosTab = document.getElementById("objetivos-side");
const oncogenesisObjetivos = document.getElementById("oncogenesis-objetivos");

const introduccionTab = document.getElementById("introduccion-side");
const introduccion = document.getElementById("oncogenesis-introduccion");

const mantenimientoTab = document.getElementById("mantenimiento-side");
const mantenimiento = document.getElementById("oncogenesis-mantenimiento");

const perdidaTab = document.getElementById("perdida-side");
const perdida = document.getElementById("oncogenesis-perdida");

const resistenciaTab = document.getElementById("resistencia-side");
const resistencia = document.getElementById("oncogenesis-resistencia");

const activacionTab = document.getElementById("activacion-side");
const activacion = document.getElementById("oncogenesis-activacion");

const induccionTab = document.getElementById("induccion-side");
const induccion = document.getElementById("oncogenesis-induccion");

const invasionTab = document.getElementById("invasion-side");
const invasion = document.getElementById("oncogenesis-invasion");

const inestabilidadTab = document.getElementById("inestabilidad-side");
const inestabilidad = document.getElementById("oncogenesis-inestabilidad");

const inflamacionTab = document.getElementById("inflamacion-side");
const inflamacion = document.getElementById("oncogenesis-inflamacion");

const alteracionTab = document.getElementById("alteracion-side");
const alteracion = document.getElementById("oncogenesis-alteracion");

const evasionTab = document.getElementById("evasion-side");
const evasion = document.getElementById("oncogenesis-evasion");

const oncogenesisBiblioTab = document.getElementById("biblio-side");
const oncogenesisBiblio = document.getElementById("oncogenesis-biblio");









const oncogenesisChapters = [{tab: oncogenesisPresentacionTab, content: oncogenesisPresentacion} ,
                  {tab: oncogenesisObjetivosTab, content: oncogenesisObjetivos} ,
                  {tab: introduccionTab, content: introduccion},
                  {tab: mantenimientoTab, content: mantenimiento},
                  {tab: perdidaTab, content: perdida},
                  {tab: resistenciaTab, content: resistencia},
                  {tab: activacionTab, content: activacion},
                  {tab: induccionTab, content: induccion},
                  {tab: invasionTab, content: invasion},
                  {tab: inestabilidadTab, content: inestabilidad},
                  {tab: inflamacionTab, content: inflamacion},
                  {tab: alteracionTab, content: alteracion},
                  {tab: evasionTab, content: evasion},
                  // {tab: oncogenesisBiblioTab, content: oncogenesisBiblio},
                ]











// // **********************************SIDEBAR****************************




window.addEventListener('scroll', function(){
  oncogenesisChapters.forEach(function(chapter){


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


// // **************************** LOCAL STORAGE*****************************



window.addEventListener('scroll', function(){
  localStorage.setItem("windowHeight", window.scrollY  );
});


