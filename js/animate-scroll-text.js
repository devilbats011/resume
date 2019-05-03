const elem1 = document.getElementsByClassName('home_Mywrapper')[0];
const elem2 = document.getElementsByClassName('secondWrapper')[0];
const elem3 = document.getElementsByClassName('resume-box-wrapper')[0];
const elem4 = document.getElementsByClassName('inside-secondWrapper')[0];

function hideText(elem){

  elem.style.opacity = "0";
  elem.style.transform = "translateY(-120px)";
} 


function insideSecondWrapper(elem)
{

  var linePercentageTrigger = elem.parentNode.parentNode.getBoundingClientRect().height*0.55;
  var element = elem.parentNode.parentNode;

  if(element.getBoundingClientRect().top < 0 && Math.abs(element.getBoundingClientRect().top) > linePercentageTrigger ){
    //alert(`${linePercentageTrigger} :: h:: ${elem.parentNode.getBoundingClientRect().height } ::top  ${Math.abs(elem.parentNode.getBoundingClientRect().top)}`);
    elem.style.opacity = "0";
    elem.style.transform = "translateY(-120px)";

    //show text elem3 ------------------------------------
    elem3.style.transition = "0.8s";
    elem3.style.opacity = "1";
    elem3.style.transform = "translateY(0px)";
    //show text elem3 ------------------------------------
  }

  if(element.getBoundingClientRect().top <= 0 && Math.abs(element.getBoundingClientRect().top) < linePercentageTrigger ){
    //alert(`${linePercentageTrigger} :: h:: ${elem.parentNode.getBoundingClientRect().height } ::top  ${Math.abs(elem.parentNode.getBoundingClientRect().top)}`);
    elem.style.transition = "0.5s";
    elem.style.opacity = "1";
    elem.style.transform = "translateY(0px)";
    hideText(elem3);
  } 
  
  if(element.getBoundingClientRect().top < 270  && element.getBoundingClientRect().top > 0  ){
    //alert(`${linePercentageTrigger} :: h:: ${elem.parentNode.getBoundingClientRect().height } ::top  ${Math.abs(elem.parentNode.getBoundingClientRect().top)}`);
    elem.style.transition = "0.5s";
    elem.style.opacity = "1";
    elem.style.transform = "translateY(0px)";
   // hideText(elem3);
  } 



} 


function scrollTextHideShow(elem){

  var linePercentageTrigger = elem.parentNode.getBoundingClientRect().height*0.55;
  //var linePercentageTriggerShow = elem.parentNode.getBoundingClientRect().height*0.5;
  //console.log(`${linePercentageTrigger} :: top:: ${elem.parentNode.getBoundingClientRect().top } `);
  if(elem.parentNode.getBoundingClientRect().top < 0 && Math.abs(elem.parentNode.getBoundingClientRect().top) > linePercentageTrigger ){
    //alert(`${linePercentageTrigger} :: h:: ${elem.parentNode.getBoundingClientRect().height } ::top  ${Math.abs(elem.parentNode.getBoundingClientRect().top)}`);
    elem.style.opacity = "0";
    elem.style.transform = "translateY(-120px)";

  }

  if(elem.parentNode.getBoundingClientRect().top <= 0 && Math.abs(elem.parentNode.getBoundingClientRect().top) < linePercentageTrigger ){
    //alert(`${linePercentageTrigger} :: h:: ${elem.parentNode.getBoundingClientRect().height } ::top  ${Math.abs(elem.parentNode.getBoundingClientRect().top)}`);
    elem.style.transition = "0.5s";
    elem.style.opacity = "1";
    elem.style.transform = "translateY(0px)";
  } 




} 


function showText(pre_elem,elem)
{
  if( pre_elem.style.opacity == "0")
  {
    elem.style.transition = "0.5s";
    elem.style.opacity = "1";
    elem.style.transform = "translateY(0px)";
  }
  else if( pre_elem.style.opacity == "1")
  {
   Hide_if_not_showText(elem);
  }

}

function Hide_if_not_showText(elem)
{
    elem.style.opacity = "0";
    elem.style.transform = "translateY(-120px)";
  
}


function scrollTextCallback(callback)
{

  callback(arguments[1]); //hideText(elem)
  setTimeout( () => { 
  arguments[1].style.transition = "0.5s";
  arguments[1].style.transform = "translateY(0px)";
  arguments[1].style.opacity = "1";
  },300);


}



function scrollTextAwait(elem)
{


   setTimeout( () => { 
    elem.style.transition = "0.5s";
    elem.style.transform = "translateY(0px)";
    elem.style.opacity = "1";
  
  },300);
  
}

async function textAnimationAwait(elem)
{
  await hideText(elem);
  await scrollTextAwait(elem);
}

scrollTextCallback(hideText,elem1);
hideText(elem2);
hideText(elem3);
hideText(elem4);

window.onscroll = function()
{
    //callback(arguments[1]); //scrollText(elem)
    showText(elem1,elem2);
    showText(elem2,elem4);
    showText(elem4,elem3);

    scrollTextHideShow(elem1);
    scrollTextHideShow(elem2);
    scrollTextHideShow(elem3);
    insideSecondWrapper(elem4);

  
};
