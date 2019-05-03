var toggleContact = false;

ContactAnimate('footer-contact',0);
ContactAnimate('footer-contact',1);
ContactAnimate('pika-contact',0);
ContactAnimate('c',0);
ContactAnimate('background',0);
function ContactAnimate(elementClassName,index){

document.getElementsByClassName(elementClassName)[index].addEventListener('click',()=>{

  if(toggleContact == false){
    document.getElementsByClassName('contact-wrapper')[0].style.visibility="visible";
    document.getElementsByClassName('contact-wrapper')[0].style.opacity="1";

    document.getElementsByClassName('contact')[0].style.width="110%",
    document.getElementsByClassName('contact')[0].style.height="110%";
    document.getElementsByClassName('contact')[1].style.left="25%",
    document.getElementsByClassName('contact')[1].style.top="25%";  
    document.getElementsByClassName('border-footer-contact')[0].style.opacity="0";
    document.getElementsByClassName('contact')[3].style.left="75%",
    document.getElementsByClassName('contact')[3].style.top="80%"; 
    toggleContact = true;
  }
  else if(toggleContact == true)
  {
 

   
    document.getElementsByClassName('contact')[0].style.width="50%",
    document.getElementsByClassName('contact')[0].style.height="40%";
    document.getElementsByClassName('contact')[1].style.left="50%",
    document.getElementsByClassName('contact')[1].style.top="50%";  
    document.getElementsByClassName('border-footer-contact')[0].style.opacity="1";
    document.getElementsByClassName('contact')[3].style.left="50%",
    document.getElementsByClassName('contact')[3].style.top="50%"; 
    toggleContact = false; 
    
     setTimeout(()=>{  
       document.getElementsByClassName('contact-wrapper')[0].style.opacity="0";
     document.getElementsByClassName('contact-wrapper')[0].style.visibility="hidden";
    },800);   
  }
  //alert(toggleContact);

 } );

}
