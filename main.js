let clickControl = false;
const press = () => {
    let nav = document.querySelector('#drop');
   if (clickControl){
    nav.style.left='0px';
    nav.style.transition='all .5s'
    document.getElementById('open').style.display ='none'
    document.getElementById('close').style.display ='block'
    clickControl = !clickControl;
   }
   else{
    nav.style.left ='-100%';
    clickControl = !clickControl;
    document.getElementById('open').style.display ='block'
    document.getElementById('close').style.display ='none'
   }
    
}