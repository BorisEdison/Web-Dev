// $("h1").css("color","red")

$(document).ready(function() {
    $("h1").css("color","red")
})

// $("h1") -- document.querySelector("h1")

// $("button") -- document.querySelectorAll("button")


console.log($("h1").css("font-size"))

$("h1").addClass("big-title margin-50")

// $("h1").removeClass("big-title")

$("h1").text("Bye")

$("button").text("Don't click Me")

$("button").html("<em>Hey</em>")