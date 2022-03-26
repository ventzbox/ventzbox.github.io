
const navTop = document.getElementById('navigator');


window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
   if(screen.width>900){
    if (scrolled === 0) {
        navTop.style.background = "transparent";
      
    }
    else {
        navTop.style.background = "#303030";
       
    }}
}
const main = document.getElementById('main');
// const mouseSlide = document.getElementById('mouseSlide');

function mouseSlider(){
   
    // mouseSlide.scrollIntoView({
    //     behavior: 'smooth',
    //     block: 'start'
    // });

    var offsetPosition = 900; 
    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    });
}



const menuItem = document.getElementsByClassName('menu-content');
const menuLabel = document.getElementsByClassName('menu-label');
const polzunok = document.getElementById('polzunok');

menuItem[0].classList.add('active-item');
menuLabel[0].classList.add('active-label');


var boxSliderId=0;
function changeMenuItem(idItem){

    if(boxSliderId!=idItem){
        PauseTimer();   
    }
    else{
        boxSliderId=idItem;
    }
   for(i=0;i<4;i++){
    if (i==idItem){
    menuItem[i].classList.add('active-item');
    menuLabel[i].classList.add('active-label');
    polzunok.style.top = 10+i*70+'px';
    }
    else{
        menuItem[i].classList.remove('active-item');
        menuLabel[i].classList.remove('active-label');
    }
    
   }
}

function togglePhone(){
    
        var blur = document.getElementById('blur');
        blur.classList.toggle('active');
        var popup = document.getElementById('popup');
        popup.classList.toggle('active');
    
}

// function compPost(){
    
//     var cCont = document.getElementById('container-complect');
//     cCont.classList.toggle('active');
  
// }

var sliderInputs =  document.getElementsByName('slider-sm');

function nextSlide(){
    // console.log("sadas")
 for(var i = 0; i < sliderInputs.length; i++){
    if(sliderInputs[i].checked){
        sliderInputs[i==2?0:i+1].checked=true;
        i=10;
    }
 }
}
function prevSlide(){
    for(var i = 0; i < sliderInputs.length; i++){
        if(sliderInputs[i].checked){
            sliderInputs[i==0?2:i-1].checked=true;
            i=10;
        }
     }
}

function boxSlider(){

}
function animSliders(){
    nextSlide();
     boxSliderId = boxSliderId<3?boxSliderId+1:0;
    changeMenuItem(boxSliderId);
}
var intervalID = window.setInterval(animSliders, 5000);


function PauseTimer(){
    clearInterval(intervalID);
    setTimeout(() => intervalID = window.setInterval(animSliders, 5000), 10000);
}


$("#callme1").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: ($(".hgo1").offset().top - 230)  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
$("#callme2").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: ($(".hgo2").offset().top - 100)  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
$("#callme3").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: ($(".hgo3").offset().top - 100)  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
$("#callme4").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: ($(".hgo4").offset().top - 100)  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
$("#callme5").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop:( $(".hgo5").offset().top - 100)  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
$("#callme6").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".footer").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
