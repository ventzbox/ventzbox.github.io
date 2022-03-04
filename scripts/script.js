
const navTop = document.getElementById('navigator');


window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled === 0) {
        navTop.style.background = "transparent";
        console.log("верх")
    }
    else {
        navTop.style.background = "#3a3a3a";
        console.log("неВерх")
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
