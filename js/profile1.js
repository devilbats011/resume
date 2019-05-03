
const blobs = Array.from(document.getElementsByClassName('blob')); //convert to node-like to pure array

//const parent_blobs = document.getElementById('blobs');
//const ballOfLight = document.getElementById('ballOfLight');

var moveSpeed = 0; //kena declare
var fragSpeed = 0;

var ParentElements = [
document.getElementsByClassName('Mywrapper')[0],
document.getElementsByClassName('divWrapper')[0],
document.getElementsByClassName('Mywrapper2')[0],
document.getElementsByClassName('divWrapper')[1],
document.getElementsByClassName('Mywrapper3')[0]
];

/*
var testElement = document.getElementsByClassName('secondWrapper')[0];

*/
var testCoordinate = null;//testElement.getBoundingClientRect();
var lastime = new Date();
var toggle = false;
var valueX = 0;
//var onscrollStop = false;
var element_position_scene1 = 0,element_position = 0;

/*
window.onscroll = function(){
};
*/

window.onresize = ()=>{



}

function moveBallOfLight()
{
	//window.onscrollStop = true;

	//alert(`${window.moveSpeed}px`);
	
	
	
	if(window.testCoordinate.top >= 0)
	{

		window.moveSpeed = window.moveSpeed+window.fragSpeed;//(60);


		window.scrollTo( 0, window.moveSpeed ); //x,y
		if( window.moveSpeed < window.element_position_scene1)
		{
			requestAnimationFrame(moveBallOfLight);
			//cancelAnimationFrame(requestAnimationFrame(moveBallOfLight));
		}
		else
		{
	
			window.scrollTo( 0, window.element_position_scene1 );
			window.onscrollStop = false;
			window.moveSpeed = window.pageYOffset;

		}
	}
	else if(window.testCoordinate.top < 0) //top always below negative
	{

		window.moveSpeed = window.moveSpeed-window.fragSpeed; //Yoffset
	    window.scrollTo( 0, window.moveSpeed ); //x,y

		if( window.moveSpeed  > window.element_position )  
		{

			requestAnimationFrame(moveBallOfLight);
			//cancelAnimationFrame(requestAnimationFrame(moveBallOfLight));
		}
		else
		{
			window.scrollTo( 0, window.element_position );
			// window.onscrollStop = false;
			// window.doOnlyOnce = true;
			 window.moveSpeed = window.pageYOffset;

		}
	}
}




//firstBlob = blobs.shift(); //remove at front
theToggleBlob = blobs.pop(); //remove at back
				theToggleBlob.style.width ="60px";
				theToggleBlob.style.height = "60px";


function toggleMenu()
{


	var items = Array.from(theToggleBlob.getElementsByClassName('item'));
	var tempTime = new Date();
    if(window.lastime <  tempTime)
    {
    	//console.log(tempTime);
    	 window.lastime = new Date();
		 window.lastime.setSeconds( window.lastime.getSeconds(),900 ); //to make dead button and alive again.
         

		 	if(!toggle)
			{


			 				theToggleBlob.style.width ="50px";
				            theToggleBlob.style.height = "50px";
				            theToggleBlob.style.transform = `translateY(-15px) translateX(15px) rotateZ(315deg)`;
				            theToggleBlob.style.background="black";
				           // theToggleBlob.style.border ="1px solid red";  box-shadow:0px 0px 5px 3px steelblue,
  						   //inset 0px 0px 3px 1px steelblue;
 							theToggleBlob.style.boxShadow = "0px 0px 5px 2px red,inset 0px 0px 5px 2px red";
				           
				            //item-a,item-b,item-c,item-d
				            items.forEach( (item)=>
				            {
				              item.style.border=`1px solid red`;
				              item.style.background="crimson";
							
				            });
				            items[0].style.transform = `translateX(65%)`;
				            items[1].style.transform = `translateX(-65%)`;
				            items[2].style.transform = `translateY(65%)`;
				            items[3].style.transform = `translateY(-65%)`;

						toggle = true;

						blobs.forEach( (item,index) =>
			 			{

				             
			 				//console.log(item);
			 				item.style.transform = `translateX(-${index*45+45}px)`;
							item.style.width ="30px";
							item.style.height = "30px";

						});
			}
			else if(toggle)
			{
				toggle = false;
				console.log('untoggle');
			 				//theToggleBlob.style.transform = `translateY(-17px) translateX(10px)`;
			 				theToggleBlob.style.width ="60px";
							theToggleBlob.style.height = "60px";
				            theToggleBlob.style.transform = `translateY(-20px) translateX(10px) rotateZ(0deg)`;
				            theToggleBlob.style.background="#125";
				            
				           // theToggleBlob.style.border ="1px solid red";  box-shadow:0px 0px 5px 3px steelblue,
  						   //inset 0px 0px 3px 1px steelblue;
 							theToggleBlob.style.boxShadow = "0px 0px 3px 1px steelblue,inset 0px 0px 5px 2px steelblue";
				           
				            //item-a,item-b,item-c,item-d
				            items.forEach( (item)=>
				            {
				              item.style.border=`1px solid steelblue`;
				              item.style.background="transparent";
							
				            });
				            items[0].style.transform = `translateX(140%)`;
				            items[1].style.transform = `translateX(-140%)`;
				            items[2].style.transform = `translateY(140%)`;
				            items[3].style.transform = `translateY(-110%)`;

			    blobs.forEach( (item,index) =>
			 			{
			 				
			 			  item.style.transform = `translateY(-7px) translateX(20px)`;
			 				
						});
			}

    }

}

theToggleBlob.addEventListener('click',toggleMenu);
/*

blobs.forEach((item,index) => { 
  
	item.addEventListener("click", () => {
	var tempTime = new Date();
      console.log('listen');
     if(window.lastime <  tempTime)
     {
    	
    	 window.lastime = new Date();
		 window.lastime.setSeconds( window.lastime.getSeconds(),900 ); //to make dead button and alive again.
         

			   window.element_position_scene1 =  ParentElements[index].getBoundingClientRect().top + window.moveSpeed;
			   window.element_position = window.moveSpeed - (-1*  (ParentElements[index].getBoundingClientRect().top) );
			   window.fragSpeed = 0.1*Math.abs(ParentElements[index].getBoundingClientRect().top);
			   window.moveSpeed = window.pageYOffset;
			   window.testCoordinate = ParentElements[index].getBoundingClientRect();
			   console.log(ParentElements[index].className);
			   console.log(`getBoundingClientRect.top: ${window.testCoordinate.top} ,  pageYOffset: ${window.moveSpeed}`);




			  moveBallOfLight( );

	 }

	});


});
*/



	blobs[0].addEventListener("click", () => {
	var tempTime = new Date();
      
     if(window.lastime <  tempTime)
     {
    	
    	 window.lastime = new Date();
		 window.lastime.setSeconds( window.lastime.getSeconds(),900 ); //to make dead button and alive again.

         	   window.moveSpeed = window.pageYOffset;
			   window.testCoordinate = ParentElements[0].getBoundingClientRect();

			   window.element_position_scene1 =  ParentElements[0].getBoundingClientRect().top + window.moveSpeed;
			   window.element_position = window.moveSpeed - (Math.abs(ParentElements[0].getBoundingClientRect().top) );
			   window.fragSpeed = 0.1*Math.abs(ParentElements[0].getBoundingClientRect().top);

		  moveBallOfLight( );

	 }

	});


	blobs[1].addEventListener("click", () => {
	var tempTime = new Date();
      
     if(window.lastime <  tempTime)
     {
    	
    	 window.lastime = new Date();
		 window.lastime.setSeconds( window.lastime.getSeconds(),900 ); //to make dead button and alive again.

         	   window.moveSpeed = window.pageYOffset;
			   window.testCoordinate = ParentElements[1].getBoundingClientRect();

			   window.element_position_scene1 =  ParentElements[1].getBoundingClientRect().top + window.moveSpeed;
			   window.element_position = window.moveSpeed - (Math.abs(ParentElements[1].getBoundingClientRect().top) );
			   window.fragSpeed = 0.1*Math.abs(ParentElements[1].getBoundingClientRect().top);

			  // console.log(ParentElements[1].className);
			  // console.log(`getBoundingClientRect.top: ${window.testCoordinate.top} ,  pageYOffset: ${window.moveSpeed}`);




		  moveBallOfLight( );

	 }

	});



	blobs[2].addEventListener("click", () => {
	var tempTime = new Date();
      
     if(window.lastime <  tempTime)
     {
    	
    	 window.lastime = new Date();
		 window.lastime.setSeconds( window.lastime.getSeconds(),900 ); //to make dead button and alive again.

         	   window.moveSpeed = window.pageYOffset;
			   window.testCoordinate = ParentElements[2].getBoundingClientRect();

			   window.element_position_scene1 =  ParentElements[2].getBoundingClientRect().top + window.moveSpeed;
			   window.element_position = window.moveSpeed - (Math.abs(ParentElements[2].getBoundingClientRect().top) );
			   window.fragSpeed = 0.1*Math.abs(ParentElements[2].getBoundingClientRect().top);

			  // console.log(ParentElements[1].className);
			  // console.log(`getBoundingClientRect.top: ${window.testCoordinate.top} ,  pageYOffset: ${window.moveSpeed}`);




		  moveBallOfLight( );

	 }

	});
	

	blobs[3].addEventListener("click", () => {
	var tempTime = new Date();
      
     if(window.lastime <  tempTime)
     {
    	
    	 window.lastime = new Date();
		 window.lastime.setSeconds( window.lastime.getSeconds(),900 ); //to make dead button and alive again.

         	   window.moveSpeed = window.pageYOffset;
			   window.testCoordinate = ParentElements[3].getBoundingClientRect();

			   window.element_position_scene1 =  ParentElements[3].getBoundingClientRect().top + window.moveSpeed;
			   window.element_position = window.moveSpeed - (Math.abs(ParentElements[3].getBoundingClientRect().top) );
			   window.fragSpeed = 0.1*Math.abs(ParentElements[3].getBoundingClientRect().top);

		  moveBallOfLight( );

	 }

	});


	blobs[4].addEventListener("click", () => {
	var tempTime = new Date();
      
     if(window.lastime <  tempTime)
     {
    	
    	 window.lastime = new Date();
		 window.lastime.setSeconds( window.lastime.getSeconds(),900 ); //to make dead button and alive again.

         	   window.moveSpeed = window.pageYOffset;
			   window.testCoordinate = ParentElements[4].getBoundingClientRect();

			   window.element_position_scene1 =  ParentElements[4].getBoundingClientRect().top + window.moveSpeed;
			   window.element_position = window.moveSpeed - (Math.abs(ParentElements[4].getBoundingClientRect().top) );
			   window.fragSpeed = 0.1*Math.abs(ParentElements[4].getBoundingClientRect().top);

		  moveBallOfLight( );

	 }

	});



	document.getElementsByClassName('pikachu')[0].addEventListener("click", () => {
	var tempTime = new Date();
      
     if(window.lastime <  tempTime)
     {
    	
    	 window.lastime = new Date();
		 window.lastime.setSeconds( window.lastime.getSeconds(),900 ); //to make dead button and alive again.

         	   window.moveSpeed = window.pageYOffset;
			   window.testCoordinate = ParentElements[0].getBoundingClientRect();

			   window.element_position_scene1 =  ParentElements[0].getBoundingClientRect().top + window.moveSpeed;
			   window.element_position = window.moveSpeed - (Math.abs(ParentElements[0].getBoundingClientRect().top) );
			   window.fragSpeed = 0.1*Math.abs(ParentElements[0].getBoundingClientRect().top);

		  moveBallOfLight( );

	 }

	});

	document.getElementsByClassName('work')[1].getElementsByTagName('a')[0].addEventListener('click',() =>{ 

		
	 })
	function hyperlink(url)
	{
		  document.getElementById('loadingscreen-bg').className = "bg-vissible";
		  setTimeout( () => { document.getElementById('loadingscreen-bg').className = "bg-hidden";
		  var win = window.open(url, '_blank');
		  win.focus();
		   }, 3000 );

	}

	var toggleEve = false;
	//click evebox text change----- note: (svg)[3] == eve svg 
	document.getElementsByTagName('svg')[3].addEventListener('click',
()=>{



	var tempTime = new Date();
      
     	if(window.lastime <  tempTime)
    	{
    	 window.lastime = new Date();
		 window.lastime.setSeconds( window.lastime.getSeconds()+1,500 ); //to make dead button and alive again.

		//document.getElementById('Evebox').className ="click-eve-rotateX-evechatbox";//(i think)regex for hasclass /[\w+-\w+|w+]+/g
		 document.getElementById('Evebox').style.transform = "rotateX(90deg)";
		 document.getElementById('Evebox').style.opacity = "0"; //.getElementsByTagName('p')[0]. 
		 setTimeout( ()=>{
			document.getElementById('Evebox').style.opacity = "1"; //.getElementsByTagName('p')[0] 

			var event_width = window.innerWidth
			|| document.documentElement.clientWidth
			|| document.body.clientWidth;
			//@media(max-width: 700px)

			if(event_width <= 700 && !toggleEve)
			{
				document.getElementById('Evebox').style.top = "-125px";
			}
			else if( event_width <= 700 && toggleEve)
			{
				document.getElementById('Evebox').style.top = "-175px";
			}

			if(!toggleEve)
			{	

				toggleEve = true;
				document.getElementById('Evebox').getElementsByTagName('p')[0].innerHTML = "Feel Free To Look Around <b>^.^</b>";
			}
			else if(toggleEve)
			{
				toggleEve = false;
				document.getElementById('Evebox').getElementsByTagName('p')[0].innerHTML =
				`<span>HI </span>, I'm <span>Afnan ! </span>	
      				<span id="welcomeP_mobile" ><br>
					I love to  make websites  Fancy ! <br> I also  develop a website for business owner and turn the design into realty.<br> Check out <span style="cursor:pointer;" onclick="hyperlink('file:///C:/xampp/htdocs/Iprofile/Iprofile/resume/web_resume.html')"><u> My Online Resume !</u>
				  </span><br>` ;//"<span>HI </span>, I'm <span>Afnan ! </span>";
			}

			document.getElementById('Evebox').style.transform = "rotateX(0deg)";
		},700 );

 		}

	});
	


	var intro_h5 = document.getElementsByClassName('introduction')[0].getElementsByTagName('h5')[0];
	const default_intro_h5 = "Introduction";
	intro_h5.innerText = default_intro_h5;

	var introduction = document.getElementsByClassName('introduction')[0].getElementsByTagName('p')[0];
	const default_intro_text = "Mars the First Son of Heaven is an aggressive melee strength hero who controls the battlefield with numerous knockbacks and impassable terrain. Equipped with a large shield, his Bulwark passively blocks attacks from the front and sides, making him a very durable fighter in most situations. The same shield allows him to smash enemies and knock them back, dealing critical damage that ignores all evasion. The Spear of Mars can be thrown at long range, piercing enemies to push them back, and stunning them upon contact with trees or terrain. Mars' most potent ability creates an Arena Of Blood, a circular zone where no enemy can exit or enter, as well as blocking enemy attacks from the outside. Used correctly, the Arena Of Blood can decisively split and cut off enemies from support during teamfights, making Mars a valuable asset to his team, as well as a highly dangerous opponent.";
	introduction.innerText = default_intro_text;
	introduction.style.lineHeight =1.5;

	document.getElementById('toggle-intro').addEventListener('change',
()=>{

	var tempTime = new Date();
      
     	if(window.lastime <  tempTime)
    	{
    	 window.lastime = new Date();
		 window.lastime.setSeconds( window.lastime.getSeconds()+1,100 );


		 if(document.getElementById('toggle-intro').checked)
		 {
		 		intro_h5.style.opacity = 0;
		 		//intro_h5.style.transition ="0.8s linear";
		 		setTimeout(()=>{
		 		 intro_h5.style.opacity = 1;
		 		 words(intro_h5,"The Beginning");
		 		},100);
		 		
		 		introduction.style.opacity= 0;
		 		introduction.style.lineHeight = 0.2; 	
		 		setTimeout(()=>{
		 			setTimeout(()=>{

		 			
		 			introduction.style.opacity= 1;
		 			introduction.innerText =
					`
						lorums esplum
					`;
		 			introduction.style.lineHeight =1.5;
		 			},100);
		 	},500);

		 	
		 }
		 else if(!document.getElementById('toggle-intro').checked)
		 {

		 		intro_h5.style.opacity = 0;
		 		//intro_h5.style.transition ="0.8s linear";
		 		setTimeout(()=>{
		 		 intro_h5.style.opacity = 1;
		 		 words(intro_h5,default_intro_h5);
		 		},100);

		 		intro_h5.innerText = default_intro_h5;
		 		introduction.style.opacity= 0;
		 		introduction.style.lineHeight =0.2; 	
		 		setTimeout(()=>{
		 			setTimeout(()=>{
		 			introduction.style.opacity= 1;
		 			introduction.innerText = default_intro_text;
		 			introduction.style.lineHeight =1.5;
		 			},100);
		 	},500);
		 	
		 }



 		}

	});


function words(elem,stringText){

	 
	var count = 0;
	var mochiString = '';
	var word = elem.innerText = stringText; 
	var charsArray = word.split('');
	var interval = setInterval(function() {
		mochiString = mochiString+charsArray[count++];
		/* console.log("mochiString: "+ mochiString);
		 console.log(id); */
		//$(id).html(mochiString);
		elem.innerText = mochiString; 

		if(count ==  charsArray.length)
			{
				//console.log("interval Cleared!")
				clearInterval(interval);
			}

	 }, 100);
}
