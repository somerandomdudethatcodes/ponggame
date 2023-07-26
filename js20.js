window.addEventListener('keyup',clearK);
function clearK(){

directionInfo=false;

}
var directionInfo;
var select="two players";
if(select=="two players"){
//dva igraca

}else{
//komp

}


var bvX=9;
var bvY;
var ball=document.getElementById('ball');
ballDirection();
function ballDirection(){
var rn=Math.random();
//lopta ka player2
if(rn>0.5){
bvX=bvX;
cpplay=true;
requestAnimationFrame(ballMoving);
}
//lopta ka player1
if(rn<=0.5){
bvX=-bvX;
cpplay=false;
requestAnimationFrame(ballMoving);
}

}

var player=document.getElementById('player1');
var com=document.getElementById('player2');
var screen=document.getElementById('screen');
window.addEventListener('keydown',playerMove);
gameLoop();
function gameLoop(){

if(directionInfo=="up"){

player.style.top=parseInt(getComputedStyle(player,null).top,10)-15+"px";
if(parseInt(player.style.top,10)<10){
player.style.top=parseInt(getComputedStyle(player,null).top)+15+"px";

}

}
if(directionInfo=="down"){

player.style.top=parseInt(getComputedStyle(player,null).top)+15+"px";
if(parseInt(player.style.top,10)+parseInt(getComputedStyle(player,null).height,10)>parseInt(getComputedStyle(screen,null).top,10)+parseInt(getComputedStyle(screen,null).height,10)-10){
player.style.top=parseInt(getComputedStyle(player,null).top)-15+"px";

}

}
setTimeout(gameLoop,50);
}
function playerMove(){

var y=event.which || event.keyCode;

if(y==38){

directionInfo="up";


}
if(y==40){
directionInfo="down";
}


}
function ballMoving(){

ball.style.left=parseInt(getComputedStyle(ball,null).left,10)+bvX+"px";
if(bvY){
ball.style.top=parseInt(getComputedStyle(ball,null).top,10)+bvY+"px";
}

if(parseInt(ball.style.top,10)<parseInt(getComputedStyle(screen,null).top,10)){ //Ako loptica predje preko gornjeg dela ekrana,promeniti smer 
bvY=-bvY;


}
if(parseInt(ball.style.top,10)+parseInt(getComputedStyle(ball,null).height)>parseInt(getComputedStyle(screen,null).top,10)+parseInt(getComputedStyle(screen,null).height,10)){

bvY=-bvY;

}



if(parseInt(ball.style.left,10)<parseInt(getComputedStyle(player,null).left,10)+parseInt(getComputedStyle(player,null).width,10)){

if(parseInt(getComputedStyle(ball,null).top,10)+20>=parseInt(getComputedStyle(player,null).top,10) && parseInt(getComputedStyle(ball,null).top,10)+20<=parseInt(getComputedStyle(player,null).top,10)+40){
bvX=-bvX;
bvY=-6;
cpplay=true;
}
if(parseInt(getComputedStyle(ball,null).top,10)+20>parseInt(getComputedStyle(player,null).top,10)+40 && parseInt(getComputedStyle(ball,null).top,10)+20<=parseInt(getComputedStyle(player,null).top,10)+50){
bvX=-bvX;
bvY=-3;
cpplay=true;

}
if(parseInt(getComputedStyle(ball,null).top,10)+20>parseInt(getComputedStyle(player,null).top,10)+50 && parseInt(getComputedStyle(ball,null).top,10)+20<=parseInt(getComputedStyle(player,null).top,10)+60){
bvX=-bvX;
bvY=0;
cpplay=true;

}
if(parseInt(getComputedStyle(ball,null).top,10)+20>parseInt(getComputedStyle(player,null).top,10)+60 && parseInt(getComputedStyle(ball,null).top,10)+20<=parseInt(getComputedStyle(player,null).top,10)+70){
bvX=-bvX;
bvY=3;
cpplay=true;

}
if(parseInt(getComputedStyle(ball,null).top,10)+20>parseInt(getComputedStyle(player,null).top,10)+70 && parseInt(getComputedStyle(ball,null).top,10)<=parseInt(getComputedStyle(player,null).top,10)+parseInt(getComputedStyle(player,null).height,10)){
bvX=-bvX;
bvY=6;
cpplay=true;

}
}



if(parseInt(ball.style.left,10)+parseInt(getComputedStyle(ball,null).width,10)>=parseInt(getComputedStyle(com,null).left,10)){

if(parseInt(getComputedStyle(ball,null).top,10)+20>=parseInt(getComputedStyle(com,null).top,10) && parseInt(getComputedStyle(ball,null).top,10)+20<=parseInt(getComputedStyle(com,null).top,10)+40){
bvX=-bvX;
bvY=-6;
cpplay=false;
}
if(parseInt(getComputedStyle(ball,null).top,10)+20>parseInt(getComputedStyle(com,null).top,10)+40 && parseInt(getComputedStyle(ball,null).top,10)+20<=parseInt(getComputedStyle(com,null).top,10)+50){
bvX=-bvX;
bvY=-3;
cpplay=false;

}
if(parseInt(getComputedStyle(ball,null).top,10)+20>parseInt(getComputedStyle(com,null).top,10)+50 && parseInt(getComputedStyle(ball,null).top,10)+20<=parseInt(getComputedStyle(com,null).top,10)+60){
bvX=-bvX;
bvY=0;
cpplay=false;

}
if(parseInt(getComputedStyle(ball,null).top,10)+20>parseInt(getComputedStyle(com,null).top,10)+60 && parseInt(getComputedStyle(ball,null).top,10)+20<=parseInt(getComputedStyle(com,null).top,10)+70){
bvX=-bvX;
bvY=3;

cpplay=false;
}
if(parseInt(getComputedStyle(ball,null).top,10)+20>parseInt(getComputedStyle(com,null).top,10)+70 && parseInt(getComputedStyle(ball,null).top,10)<=parseInt(getComputedStyle(com,null).top,10)+parseInt(getComputedStyle(com,null).height,10)){
bvX=-bvX;
bvY=6;
cpplay=false;

}

}
if(parseInt(getComputedStyle(ball,null).left,10)+parseInt(getComputedStyle(ball,null).width,10)<parseInt(getComputedStyle(player,null).left,10)){
	goalfrom="cp";
	if(ia==0){
		document.getElementById('goal').style.display="block";
	goalCelebrate();
	ia++;
}
}
if(parseInt(getComputedStyle(ball,null).left,10)>parseInt(getComputedStyle(com,null).left,10)+parseInt(getComputedStyle(com,null).width,10)){

goalfrom="pl";
	if(ia==0){
		document.getElementById('goal').style.display="block";
	goalCelebrate();
	ia++;
}

}
requestAnimationFrame(ballMoving);
}
comMoves();
function comMoves(){
if(cpplay==true){
if(parseInt(getComputedStyle(ball,null).top,10)>parseInt(getComputedStyle(com,null).top,10)+(parseInt(getComputedStyle(com,null).height,10)/2)){

com.style.top=parseInt(getComputedStyle(com,null).top,10)+5+"px";


}else{
com.style.top=parseInt(getComputedStyle(com,null).top,10)-5+"px";


}
if(parseInt(getComputedStyle(com,null).top,10)<parseInt(getComputedStyle(screen,null).top,10)){
com.style.top=parseInt(getComputedStyle(com,null).top,10)+5+"px";
	
}
if(parseInt(getComputedStyle(com,null).top,10)+parseInt(getComputedStyle(com,null).height,10)>parseInt(getComputedStyle(screen,null).top,10)+parseInt(getComputedStyle(screen,null).height,10)){
com.style.top=parseInt(getComputedStyle(com,null).top,10)-5+"px";
	
}}
setTimeout(comMoves,22);

}
function goalCelebrate(){
var goal=document.getElementById('goal');
ip+=6;
goal.style.left=ip+"px";

if(ip<720){

requestAnimationFrame(goalCelebrate);

}else{

ip=-100;
ia=0;
ball.style="position:absolute;top:215px;350px;";
if(goalfrom=="cp"){
player.style="position:absolute;top:180px;left:50px;";	
bvX=-9;
bvY=0;

}
if(goalfrom=="pl"){


	com.style="position:absolute;top:180px;right:50px;";bvX=9;bvY=0;}
}

	}
	var ip=-100;
	var goalfrom;
	var ia=0;
	cpplay=false;