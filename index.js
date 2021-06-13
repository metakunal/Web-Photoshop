
document.querySelector(".btn1").addEventListener("click",function(){
    document.querySelector(".image").classList.add("blur");
    setTimeout(function(){ 
        document.querySelector(".image").classList.remove("blur");
     }, 1000);
});
//Brightness

document.querySelector(".btn2").addEventListener("click",function(){
    document.querySelector(".image").classList.add("brightness");
    setTimeout(function(){ 
        document.querySelector(".image").classList.remove("brightness");
     }, 1000);
});

//Contrast
document.querySelector(".btn3").addEventListener("click",function(){
    document.querySelector(".image").classList.add("contrast");
    setTimeout(function(){ 
        document.querySelector(".image").classList.remove("contrast");
     }, 1000);
});

// drop-shadow
document.querySelector(".btn4").addEventListener("click",function(){
    document.querySelector(".image").classList.add("drop-shadow");
    setTimeout(function(){ 
        document.querySelector(".image").classList.remove("drop-shadow");
     }, 1000);
});
// grayscale
document.querySelector(".btn5").addEventListener("click",function(){
    document.querySelector(".image").classList.add("grayscale");
    setTimeout(function(){ 
        document.querySelector(".image").classList.remove("grayscale");
     }, 1000);
});
// hue-rotate
document.querySelector(".btn6").addEventListener("click",function(){
    document.querySelector(".image").classList.add("hue-rotate");
    setTimeout(function(){ 
        document.querySelector(".image").classList.remove("hue-rotate");
     }, 1000);
});
// invert
document.querySelector(".btn7").addEventListener("click",function(){
    document.querySelector(".image").classList.add("invert");
    setTimeout(function(){ 
        document.querySelector(".image").classList.remove("invert");
     }, 1000);
});
// opacity
document.querySelector(".btn8").addEventListener("click",function(){
    document.querySelector(".image").classList.add("opacity");
    setTimeout(function(){ 
        document.querySelector(".image").classList.remove("opacity");
     }, 1000);
});
// saturate
document.querySelector(".btn9").addEventListener("click",function(){
    document.querySelector(".image").classList.add("saturate");
    setTimeout(function(){ 
        document.querySelector(".image").classList.remove("saturate");
     }, 1000);
});
// sepia
document.querySelector(".btn10").addEventListener("click",function(){
    document.querySelector(".image").classList.add("sepia");
    setTimeout(function(){ 
        document.querySelector(".image").classList.remove("sepia");
     }, 1000);
});