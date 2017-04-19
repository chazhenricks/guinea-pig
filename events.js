var section = document.getElementsByClassName("article-section");
var outputTarget = document.getElementById("output-target");
var header = document.getElementById("page-title");

for (var i=0;i<section.length;i++){
    section.item(i).addEventListener("click", function(event){
        outputTarget.innerHTML = `You clicked on the ${event.target.innerHTML} section`;
    });
}

section.item(0).className = "bold";
section.item(4).className = "italics";


header.addEventListener("mouseover", function(event){
    outputTarget.innerHTML = `You hovered over the ${event.target.id}`
});

header.addEventListener("mouseout", function(event){
    outputTarget.innerHTML = `You left the ${event.target.id}`
});

var inputArea = document.getElementById("keypress-input");
inputArea.addEventListener("keyup", function(event){
    outputTarget.innerHTML = event.target.value;
});

var addColor = document.getElementById("add-color");
var makeLarge = document.getElementById("make-large");
var addBorder = document.getElementById("add-border");
var addRounding = document.getElementById("add-rounding");

addColor.addEventListener("click", function(event){
    outputTarget.classList.toggle("blue");
});

makeLarge.addEventListener("click", function(event){
    outputTarget.classList.toggle("hulk");
});

addBorder.addEventListener("click", function(event){
    outputTarget.classList.toggle("border");
});

addRounding.addEventListener("click", function(event){
    outputTarget.classList.toggle("rounded");
});
