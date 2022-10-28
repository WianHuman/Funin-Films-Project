// Sign up/in (Index) js

$(document).ready(function (){

    $(".Signupblock").hide()
    $(".Signinblock").show()

    $("#signup1").click(function (){
        $(".Signupblock").show()
        $(".Signinblock").hide()
        $("#signup1").css({
            "background-color":"#82dcdd",
        })
        $("#signin1").css({
            "background-color":"#03787a"
        })
    })

    $("#signin1").click(function (){
        $(".Signupblock").hide()
        $(".Signinblock").show()
        $("#signup1").css({
            "background-color":"#03787a",
        })
        $("#signin1").css({
            "background-color":"#82dcdd"
        })
    })

})





// Home page js
// Movie library js
// Movie Watchlist js
// Single Movue js
// Additional all-page js