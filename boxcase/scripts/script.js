const toolTip =document.querySelector('.tooltip');
const popupBG =document.querySelector('.info__bg');
const popup =document.querySelector('.info');
const zones = document.querySelectorAll('.interactive-zone');

const zoneT = document.querySelectorAll('.zone-text');
const zoneL = document.querySelectorAll('.zone-line');
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
        // zoneT.style.display ="none";
        // zoneL.style.display ="none";
        
        zones.forEach((zone1, index)=>{
            if(this.dataset.idl!=index){
            zoneT[index].classList.add('inactive');
            zoneL[index].classList.add('inactive');
            // zoneT[index].style.display ="none";
            // zoneL[index].style.display ="none";
            }
            else{
                zoneT[index].classList.remove('inactive');
                zoneL[index].classList.remove('inactive');
            }
        });
    });
    zone.addEventListener('mouseleave', function(){
        toolTip.style.display = "none"
        zones.forEach((zone1, index)=>{
            zoneT[index].classList.remove('inactive');
            zoneL[index].classList.remove('inactive');
        });
    });
})

document.addEventListener('click', (e)=>{
    if(e.target === popupBG){
        popupBG.classList.remove('active');
    }
})