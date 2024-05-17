

const body = document.querySelector("body");

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "fas fa-heart";
    heart.style.left = (Math.random() * 100)+"vw";
    heart.style.animationDuration = (Math.random()*3)+2+"s"
    body.appendChild(heart);
}
setInterval(createHeart,100);
setInterval(function name(params) {
    var heartArr = document.querySelectorAll(".fa-heart")
    if (heartArr.length > 200) {
       heartArr[0].remove()
    }
    //console.log(heartArr);
},100)

window.onload = function() {
var context = new AudioContext();
}
document.getElementById('click').onclick=function(){
    // Remove any element-specific value, falling back to stylesheets
    document.getElementById('gombalan').style.display='block';
    document.getElementById('asek').style.display='block';
  };

