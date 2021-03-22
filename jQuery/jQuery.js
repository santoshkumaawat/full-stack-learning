let cssStyles = {
    color: "yellow",
    background: "gray",
    border: "3px solid red"
}
let cssStyles2 = {
    color: "red",
    background: "yellow",
    border: "3px solid green",
    height: "25px"
}
let cssStyles3 = {
    color: "cyan",
    background: "gray",
    border: "3px solid blue"
}

$("h1").css(cssStyles);
$("#para1").css(cssStyles2);
$("ul").css(cssStyles3);

//attr method
$("img").attr("style", "border: 3px solid red; border-radius:15px;");

//val method
$(".button1").click(function() {
    alert("Hello " + $("#text").val());
});

//addClass method
$(".button2").click(function() {
    $("h2").addClass("cssStyles4");
});

//removeClass method
$(".button3").click(function() {
    $("h2").removeClass("cssStyles4");
});

//toggleClass method // this method add and remove class both in one
$(".button4").click(function() {
    $("h2").toggleClass("cssStyles4");
});

//jQuery effects
//hide
$("#hide").click(function() {
    $("#para2").hide();
});
//show
$("#show").click(function() {
    $("#para2").show();
});
//toggle
$("#toggle").click(function() {
    $("#para2").toggle();
});
//fadeOut
$("#fadeOut").click(function() {
    $("#heading1").fadeOut("slow");
});
$("#fadeIn").click(function() {
    $("#heading1").fadeIn("slow");
});