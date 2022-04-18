const toolTip =document.querySelector('.tooltip');
const popupBG =document.querySelector('.info__bg');
const popup =document.querySelector('.info');
const zones = document.querySelectorAll('.interactive-zone');
// alert(zones.length)
zones.forEach(zone =>{

    zone.addEventListener('click', function(){
        popup.querySelector('.info__photo').setAttribute('src', this.dataset.photo);
        popup.querySelector('.info_title').innerText = this.dataset.title;
        popup.querySelector('.info_text').innerText = this.dataset.description;
        popupBG.classList.add('active');
    });

    zone.addEventListener('mousemove', function(e ){
       toolTip.innerText = this.dataset.title;
       toolTip.style.top = (e.y+15)+'px'
       toolTip.style.left = (e.x +15)+'px'
    });
    zone.addEventListener('mouseenter', function(){
        toolTip.style.display = "block"
    });
    zone.addEventListener('mouseleave', function(){
        toolTip.style.display = "none"
    });
})

document.addEventListener('click', (e)=>{
    if(e.target === popupBG){
        popupBG.classList.remove('active');
    }
})