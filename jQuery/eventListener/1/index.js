$("h1").click(function() {
    $("h1").css("color,purple")
});

$("button").click(function() {
    $("h1").css("color","purple")
})

$("input").keypress(function(event){
    console.log(event.key);
})