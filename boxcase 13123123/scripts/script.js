
const navTop = document.getElementById('navigator');


// window.onscroll = function () {
//     var scrolled = window.pageYOffset || document.documentElement.scrollTop;
//    if(screen.width>900){
//     if (scrolled === 0) {
//         navTop.style.background = "transparent";
      
//     }
//     else {
//         navTop.style.background = "#303030";
       
//     }}
// }

var someStr = location.search.split("box=");
var catalogType = 0;
if (someStr.length == 2 && someStr[1] == "0") {
    catalogType = 0;
}
else if (someStr.length == 2 && someStr[1] == "20") {
    catalogType = 20;
}
else if (someStr.length == 2 && someStr[1] == "1") {
    catalogType = 1;
}
else if (someStr.length == 2 && someStr[1] == "10") {
    catalogType = 10;
}

else if (someStr.length == 2 && someStr[1] == "2") {
    catalogType = 2;
}
else
{ catalogType = -1;
}
console.log(catalogType);
var box0 = document.getElementById('box0');
var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');



switch(catalogType){
    case 0:
        box0.style.display = 'block';
        box1.style.display = 'none';
        box2.style.display = 'none';
        break;
    case 1:
        box0.style.display = 'none';
        box1.style.display = 'block';
        box2.style.display = 'none';
        break;
    case 2:
        box0.style.display = 'none';
        box1.style.display = 'none';
        box2.style.display = 'block';   
        break; 
    case 10:
        box0.style.display = 'none';
        box1.style.display = 'block';
        box2.style.display = 'block';   
        break; 
    case 20:
        box0.style.display = 'block';
        box1.style.display = 'none';
        box2.style.display = 'none';    
    break;
    case -1:
        box0.style.display = 'none';
        box1.style.display = 'none';
        box2.style.display = 'none';    
    break;
    default:
        break;
}







const main = document.getElementById('main');
// const mouseSlide = document.getElementById('mouseSlide');

function mouseSlider(){
   
    // mouseSlide.scrollIntoView({
    //     behavior: 'smooth',
    //     block: 'start'
    // });

    // var offsetPosition = 900; 
    // window.scrollBy({
    //     top: offsetPosition,
    //     behavior: 'smooth'
    // });
    // ID откуда кливаем
        $('html, body').animate({
            scrollTop: ($(".hgo3").offset().top - 230)  // класс объекта к которому приезжаем
        }, 1000); 
}



const menuItem = document.getElementsByClassName('menu-content');
const menuLabel = document.getElementsByClassName('menu-label');
const polzunok = document.getElementById('polzunok');




// var boxSliderId=0;
// function changeMenuItem(idItem){

//     if(boxSliderId!=idItem){
//         PauseTimer();   
//     }
//     else{
//         boxSliderId=idItem;
//     }
//    for(i=0;i<4;i++){
//     if (i==idItem){
//     menuItem[i].classList.add('active-item');
//     menuLabel[i].classList.add('active-label');
//     polzunok.style.top = 10+i*70+'px';
//     }
//     else{
//         menuItem[i].classList.remove('active-item');
//         menuLabel[i].classList.remove('active-label');
//     }
    
//    }
// }

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

// function boxSlider(){

// }
// function animSliders(){
//     nextSlide();
//      boxSliderId = boxSliderId<3?boxSliderId+1:0;
//     changeMenuItem(boxSliderId);
// }
// var intervalID = window.setInterval(animSliders, 7000);

// function PauseTimer(){
//     clearInterval(intervalID);
//     setTimeout(() => intervalID = window.setInterval(animSliders, 5000), 10000);
// }


$("#callme1").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: ($(".hgo1").offset().top - 100)  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
$("#callme2").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: ($(".hgo2").offset().top - 100)  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
$("#callme3").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: ($(".hgo3").offset().top - 230)  // класс объекта к которому приезжаем
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
$("#callme7").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: ($(".card-container").offset().top - 200 ) // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});