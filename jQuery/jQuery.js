let cssStyles = {
    color: "yellow",
    background: "gray",
    border: "3px solid red" 
}
let cssStyles2 = {
    color: "blue",
    background: "black",
    border: "3px solid yellow" 
}
let cssStyles3 = {
    color: "cyan",
    background: "gray",
    border: "3px solid blue" 
}

$("h1").css(cssStyles);
$("p").css(cssStyles2);
$("ul").css(cssStyles3);

//attr method
$("img").attr("style","border: 3px solid red; border-radius:15px;");

//val method
$(".button1").click(function(){
    alert("Hello "+$("#text").val());
});

//addClass method
$(".button2").click(function(){
    $("h2").addClass("cssStyles4");
});

//removeClass method
$(".button3").click(function(){
    $("h2").removeClass("cssStyles4");
});

//toggleClass method // this class add and remove class both in one
$(".button4").click(function(){
    $("h2").toggleClass("cssStyles4");
});



