
const navTop = document.getElementById('navigator');


window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled === 0) {
        navTop.style.background = "transparent";
      
    }
    else {
        navTop.style.background = "#303030";
       
    }
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
function changeMenuItem(idItem){
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

function compPost(){
    
    var cCont = document.getElementById('container-complect');
    cCont.classList.toggle('active');
  
}

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


// function toggleMainMenu(){
    
//     var menu = document.getElementById('menu-active');
//     menu.classList.toggle('active');
   

// }

// $(window).scroll(function(){
//     if ($(this).scrollTop() == 0) {
//         navTop.style.background  = "transparent";
//         console.log("верх")
//     }
//     else {
//         navTop.style.background  = "#3a3a3a";
//         console.log("неВерх")
//     }
//   });