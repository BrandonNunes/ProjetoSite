const voltar = document.querySelector(".prev");
const proxi = document.querySelector(".next");
const slides = document.querySelectorAll(".slide");
const slideIcon = document.querySelectorAll(".slideicon");
 var slideAtual = 0;
var Nslides = slides.length;

//Botões
//next
proxi.addEventListener("click", () => {
   slides.forEach((slide) => {
    slide.classList.remove("mostrar")
   });
   slideIcon.forEach((slideicon) => {
    slideicon.classList.remove("mostrar")
   });
   
    slideAtual++

    if(slideAtual > (Nslides -1)) {
         slideAtual = 0;
    }
    slides[slideAtual].classList.add("mostrar");
    slideIcon[slideAtual].classList.add("mostrar");
});
//previous
voltar.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("mostrar")
       });
       slideIcon.forEach((slideicon) => {
        slideicon.classList.remove("mostrar")
       });
       
        slideAtual--
    
        if(slideAtual < 0) {
             slideAtual = Nslides - 1;
        }
        slides[slideAtual].classList.add("mostrar");
        slideIcon[slideAtual].classList.add("mostrar");
});

//auto play slider

var start;

var repetir = () => {
    start = setInterval(() => {
        slides.forEach((slide) => {
            slide.classList.remove("mostrar")
           });
           slideIcon.forEach((slideicon) => {
            slideicon.classList.remove("mostrar")
           });
           
            slideAtual++
        
            if(slideAtual > (Nslides -1)) {
                 slideAtual = 0;
            }
            slides[slideAtual].classList.add("mostrar");
            slideIcon[slideAtual].classList.add("mostrar");
    }, 5000);
};

repetir();


