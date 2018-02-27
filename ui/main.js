console.log('Loaded!');

var element = document.getElementById("main-text");

element.innerHTML=('New text');

var img=document.getElementById('madi');
var marginleft=0;
function moveRight (){
    marginleft=1+marginleft;
    img.style.marginleft=marginleft+'px';
    
}
img.onclick =function(){
    var interval = setInterval(moveRight,50);
};