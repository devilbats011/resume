var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var onetime = false;

 if( document.getElementsByClassName('skills-content')[0].getBoundingClientRect().top <  h)
 {
 	skillsBars(3000);
 }

window.onscroll = function(){
	//console.log(h);
	//console.log(document.getElementsByClassName('skills-content')[0].getBoundingClientRect().top);
 if( document.getElementsByClassName('skills-content')[0].getBoundingClientRect().top <  h)
  {
  //	alert("hit");
  	if(!onetime)
  	{	
  		console.log('onetime');
  		onetime = true;
  		skillsBars(500);

  	}
  }

}

function skillsBars(t)
{
  		setTimeout(()=>
  			{
  			 document.getElementsByClassName('skills-content')[0].children[0].firstElementChild.style.width ="80%";
  			 document.getElementsByClassName('skills-content')[0].children[1].firstElementChild.style.width ="70%";
  			 document.getElementsByClassName('skills-content')[0].children[2].firstElementChild.style.width ="60%";
  			 document.getElementsByClassName('skills-content')[0].children[3].firstElementChild.style.width ="50%";
  			 document.getElementsByClassName('skills-content')[0].children[4].firstElementChild.style.width ="50%";
  			 document.getElementsByClassName('skills-content')[0].children[5].firstElementChild.style.width ="40%";


  			 } 
  		,t);	
}




var elems = Array.from(document.getElementsByClassName('iui-widthFade')),elems2 =  Array.from(document.getElementsByClassName('iui-Fade') );
// /for (let index of allImgs)
console.log(elems[0]);
var milisecond = 0,milisecond2 = 0;
for(let elem of elems)
{
	milisecond += 500;
	iui(elem,milisecond);
}


for(let elem of elems2)
{
	milisecond2 += 800;
	iuiFade(elem,milisecond2);
}

function iui(elem,delay)
{
  var temp_width = window.getComputedStyle(elem, null).getPropertyValue("width");
  
  elem.style.width = "0px";
  elem.style.opacity = "0";
  setTimeout(()=>{ elem.style.transition ="0.8s ease-out";// "0.8s cubic-bezier(0, 1, 1, 0)"

  	  setTimeout(()=>{ elem.style.width = temp_width;elem.style.opacity ="1"},300);

},delay);
}

function iuiFade(elem,delay)
{
  elem.style.opacity = "0";
  setTimeout(()=>{ elem.style.transition ="0.8s ease-out";// "0.8s cubic-bezier(0, 1, 1, 0)"

  	  setTimeout(()=>{ elem.style.opacity ="1"},300);
	},delay);

}

setTimeout(()=>{  words(elems[0].firstElementChild,"Software Engineer"); },800);


function words(elem,stringText){

	 
	var count = 0;
	var mochiString = '';
	var word = elem.innerText = stringText; 
	var charsArray = word.split('');
	var interval = setInterval(function() {
		if(count == 8){
				mochiString = mochiString+" ";

		}
	
		mochiString = mochiString+charsArray[count++];

		elem.innerText = mochiString; 

		if(count ==  charsArray.length)
			{
				//console.log("interval Cleared!")
				clearInterval(interval);
			}

	 }, 100);
}



