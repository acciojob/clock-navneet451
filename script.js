//your JS code here. If required.
let para=document.getElementById("timer");
let timer=new Date();
setInterval( function(){
	timer=new Date();
	para.innerHTML=timer.toLocaleString();
},1000);
