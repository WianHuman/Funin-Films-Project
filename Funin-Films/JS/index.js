// Sign up/in (Index) js

$(document).ready(function (){

    $("#errortext1").hide()
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

var UsEr = [
    {
        username: "Test1",
        password: "12345"
    },
    {
        username: "Test2",
        password: "12345"
    }
]

function login () {

    var name = document.getElementById("user-name1").value;
    var password = document.getElementById("pass-word1").value;
    var usercheck = false


    //UsEr is an array for testing, to be replaced with an actual array

    for (let i = 0; i < UsEr.length; i++) {
        if (name == UsEr[i].username) {
            if (password == UsEr[i].password) {
                usercheck = true
            }
        }
    }

    if (usercheck) {

        var cuser = {
            username: name,
            password: password
        }

        var currentuser = JSON.stringify(cuser)
        sessionStorage.setItem("loggedin",currentuser)
        var saveduser = JSON.parse(sessionStorage.getItem("loggedin"))
        location.replace("Home page.html")
        // alert(saveduser.username)
        // !!!use saveduser.username to display current user's username on your page using js or jquery!!!
    }else {
        $("#errortext1").show()
        $("#errortext1").html("Incorrect Username or Password")
    }

}



// Home page js


// Movie library js


// Movie Watchlist js


// Single Movue js


// Additional all-page js

