const toolTip =document.querySelector('.tooltip');
const popupBG =document.querySelector('.info__bg');
const popup =document.querySelector('.info');
const zones = document.querySelectorAll('.interactive-zone');
const zones2 = document.querySelectorAll('.interactive-zone2');

const zoneT = document.querySelectorAll('.zone-text');
const zoneL = document.querySelectorAll('.zone-line');
const zHeader = document.querySelectorAll('.zHeader');
const zHeader2 = document.querySelectorAll('.smZh');



const zoneT2 = document.querySelectorAll('.smallt');
const zoneL2 = document.querySelectorAll('.smallline');
// console.log(zHeader.length);
// alert(zones.length)
zones.forEach((zone, izIndex) =>{

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
            hideRef(this.dataset.idl, index);
        });
    });
    zone.addEventListener('mouseleave', function(){
        toolTip.style.display = "none"
        zones.forEach((zone1, index)=>{
            ShowRef(index);
        });
    });
  




    
    zHeader[izIndex].addEventListener('mouseenter', function(){
        // toolTip.style.display = "block"
        // zoneT.style.display ="none";
        // zoneL.style.display ="none";
        
        zones.forEach((zone1, index)=>{
            hideRef(this.dataset.idl, index);
        });
    });

    zHeader[izIndex].addEventListener('mouseleave', function(){
        // toolTip.style.display = "none"

        zones.forEach((zone, index)=>{
            ShowRef(index);
        });
    });
})

const toolTip2 =document.querySelector('.tooltip2');
zones2.forEach((zone, izIndex) =>{

    zone.addEventListener('click', function(){
        popup.querySelector('.info__photo').setAttribute('src', this.dataset.photo);
        popup.querySelector('.info_title').innerText = this.dataset.title;
        popup.querySelector('.info_text').innerText = this.dataset.description;
        popupBG.classList.add('active');
    });
 
    zone.addEventListener('mousemove', function(e ){
       toolTip2.innerText = this.dataset.title;
       toolTip2.style.top = (e.y+15)+'px'
       toolTip2.style.left = (e.x +15)+'px'
    });
    zone.addEventListener('mouseenter', function(){
        toolTip2.style.display = "block"
        // zoneT.style.display ="none";
        // zoneL.style.display ="none";
        
        zones2.forEach((zone1, index)=>{
            hideRef2(this.dataset.idl, index);
        });
    });
    zone.addEventListener('mouseleave', function(){
        toolTip2.style.display = "none"
        zones2.forEach((zone1, index)=>{
            ShowRef2(index);
        });
    });
  




    
    zHeader2[izIndex].addEventListener('mouseenter', function(){
        // toolTip.style.display = "block"
        // zoneT.style.display ="none";
        // zoneL.style.display ="none";
        
        zones2.forEach((zone1, index)=>{
            hideRef2(this.dataset.idl, index);
        });
    });

    zHeader2[izIndex].addEventListener('mouseleave', function(){
        // toolTip.style.display = "none"

        zones2.forEach((zone, index)=>{
            ShowRef2(index);
        });
    });
})


document.addEventListener('click', (e)=>{
    if(e.target === popupBG){
        popupBG.classList.remove('active');
    }
})

function hideRef(idl, index){
    // console.log(idl, index);
    if(idl!=index){
        zoneT[index].classList.add('inactive');
        zoneL[index].classList.add('inactive');
        }
        else{
            zoneT[index].classList.remove('inactive');
            zoneL[index].classList.remove('inactive');
        }
}

function ShowRef(index){
 zoneT[index].classList.remove('inactive');
 zoneL[index].classList.remove('inactive');
}



function hideRef2(idl, index){
    // console.log(idl, index);
    if(idl!=index){
        zoneT2[index].classList.add('inactive');
        zoneL2[index].classList.add('inactive');
        }
        else{
            zoneT2[index].classList.remove('inactive');
            zoneL2[index].classList.remove('inactive');
        }
}

function ShowRef2(index){
 zoneT2[index].classList.remove('inactive');
 zoneL2[index].classList.remove('inactive');
}

// // let btn = document.querySelector('.btn');
// let clipBox = document.querySelector('.clip-box');
// let btnClose = document.querySelector('.close-bc');
// btn.onclick = function () {
//     // btn.classList.add('active')
//     clipBox.classList.add('active')
// }
// btnClose.onclick = function () {
//     // btn.classList.remove('active')
//     clipBox.classList.remove('active')
// }
const ctrlCase = document.getElementById('CtrlCaseB');
const boxCase = document.getElementById('boxCaseB');

const cbCont = document.querySelector('.clipbox-container');

function toggleCtrlCase(){
    ctrlCase.classList.toggle('active');
    boxCase.classList.remove('active');
    cbCont.classList.add('active');
    
   
}
function toggleBoxCase(){
    boxCase.classList.toggle('active');
    ctrlCase.classList.remove('active');
    cbCont.classList.add('active');

}