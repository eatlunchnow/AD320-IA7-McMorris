var colors = ["#ee0000", "#27408b"];
var i = 0;
var colorChange = document.getElementById("square");  

document.body.addEventListener("click", function(event){
    colorChange.style.backgroundColor = colors[i++];
    if (i >= colors.length){
        i = 0;
    }
});
