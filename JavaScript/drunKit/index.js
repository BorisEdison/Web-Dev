
var numberOfDrums = document.querySelectorAll(".drum").length
for (var i = 0; i < numberOfDrums ; i++){
    document.querySelectorAll(".drun")[i].addEventListener("click", function(){
        alert("I got clicked!")
    
    })
}