//your JS code here. If required.
let para=getElementById("timer");
let timer=new Date();
setInterval( function(){
	timer=new Date();
	para.innerHTML=timer.toLocalString();
},1000);
