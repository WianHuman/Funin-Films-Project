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
    $(document).ready(function(){
        var movies = null;
        // API call for 20 movies
        let randomitems = Math.floor(Math.random()*500);
        let call = "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&page=" + randomitems;
        $.ajax({
            type: "GET",
            url: call,
            success: function(data){
                movies = data;
                console.log(data)
            }
        }).done(function(){
            for (let i = 0; i < 20; i++){
            $("#item" + i).attr("src", "https://image.tmdb.org/t/p/original/" + movies.results[i].poster_path);
            $("#info" + i).text(movies.results[i].release_date + " • ±120 min" + " • " + movies.results[i].original_language + " • " + Math.round(movies.results[i].vote_average));
            }
        });
        // API call for 5 movies
        for (let r = 1; r < 6; r++){
            let randomitems = Math.floor(Math.random()*200);
            let call = "https://api.themoviedb.org/3/movie/" + randomitems + "?api_key=8f58d34ff6d61c20b5d13e1290c1a937";
            $.ajax({
                type: "GET",
                url: call,
                success: function(data){
                    movies = data;
                    console.log(data)
                }
            }).done(function(){
                $("#item0" + r).attr("src", "https://image.tmdb.org/t/p/original/" + movies.poster_path);
                $("#info0" + r).text(movies.release_date + " • " + movies.runtime + " min" + " • " + movies.original_language + " • " + Math.round(movies.vote_average));
            });
        }
    });

    // Filter for all movies
        function gen(){
            $(document).ready(function(){
                var movies = null;

                // API call
                let randomitems = Math.floor(Math.random()*500);
                let call = "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&page=" + randomitems;
                $.ajax({
                    type: "GET",
                    url: call,
                    success: function(data){
                        movies = data;
                        console.log(data)
                    }
                }).done(function(){
                    for (let i = 0; i < 20; i++){
                    $("#item" + i).attr("src", "https://image.tmdb.org/t/p/original/" + movies.results[i].poster_path);
                    $("#info" + i).text(movies.results[i].release_date + " • ±120 min" + " • " + movies.results[i].original_language + " • " + Math.round(movies.results[i].vote_average));
                    }
                });

                for (let r = 1; r < 6; r++){
                    let randomitems = Math.floor(Math.random()*200);
                    let call = "https://api.themoviedb.org/3/movie/" + randomitems + "?api_key=8f58d34ff6d61c20b5d13e1290c1a937";
                    $.ajax({
                        type: "GET",
                        url: call,
                        success: function(data){
                        movies = data;
                        console.log(data)
                    }
                    }).done(function(){
                        $("#item0" + r).attr("src", "https://image.tmdb.org/t/p/original/" + movies.poster_path);
                        $("#info0" + r).text(movies.release_date + " • " + movies.runtime + " min" + " • " + movies.original_language + " • " + Math.round(movies.vote_average));
                    });
                }
            })
        }

    // Filter for genres
        function gen1(){
            $(document).ready(function(){
                var movies = null;
                const el = document.getElementById("tags");
            
                el.addEventListener('change', function handleChange(event){
                    if(event.target.value === 'action'){ // Action Movies
                        $.ajax({ // API call
                            type: "GET",
                            url: "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&with_genres=28&page=2",
                            success: function(data){
                                movies = data;
                                console.log(data)
                            }
                        }).done(function(){
                            for (let a = 0; a < 20; a++){
                            $("#item" + a).attr("src", "https://image.tmdb.org/t/p/original/" + movies.results[a].poster_path);
                            $("#info" + a).text(movies.results[a].release_date + " • ±120 min" + " • " + movies.results[a].original_language + " • " + Math.round(movies.results[a].vote_average));
                            }
                        });
                        $.ajax({ // API call
                            type: "GET",
                            url: "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&with_genres=28&page=4",
                            success: function(data){
                                movies = data;
                                console.log(data)
                            }
                        }).done(function(){
                            for (let g = 0; g < 6; g++){
                            $("#item0" + g).attr("src", "https://image.tmdb.org/t/p/original/" + movies.results[g].poster_path);
                            $("#info0" + g).text(movies.results[g].release_date + " • ±120 min" + " • " + movies.results[g].original_language + " • " + Math.round(movies.results[g].vote_average));
                            }
                        });
                    }else if(event.target.value === 'adventure'){ // Adventure Movies
                        $.ajax({ // API call
                            type: "GET",
                            url: "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&with_genres=12&page=2",
                            success: function(data){
                                movies = data;
                                console.log(data)
                            }
                        }).done(function(){
                            for (let a = 0; a < 20; a++){
                            $("#item" + a).attr("src", "https://image.tmdb.org/t/p/original/" + movies.results[a].poster_path);
                            $("#info" + i).text(movies.results[a].release_date + " • ±120 min" + " • " + movies.results[a].original_language + " • " + Math.round(movies.results[a].vote_average));
                            }
                        });
                        $.ajax({ // API call
                            type: "GET",
                            url: "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&with_genres=12&page=4",
                            success: function(data){
                                movies = data;
                                console.log(data)
                            }
                        }).done(function(){
                            for (let g = 0; g < 6; g++){
                            $("#item0" + g).attr("src", "https://image.tmdb.org/t/p/original/" + movies.results[g].poster_path);
                            $("#info0" + r).text(movies.results[g].release_date + " • ±120 min" + " • " + movies.results[g].original_language + " • " + Math.round(movies.results[g].vote_average));
                            }
                        });
                    }else if(event.target.value === 'fantasy'){ // Fantasy Movies
                        $.ajax({ // API call
                            type: "GET",
                            url: "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&with_genres=14&page=2",
                            success: function(data){
                                movies = data;
                                console.log(data)
                            }
                        }).done(function(){
                            for (let a = 0; a < 20; a++){
                            $("#item" + a).attr("src", "https://image.tmdb.org/t/p/original/" + movies.results[a].poster_path);
                            $("#info" + a).text(movies.results[a].release_date + " • ±120 min" + " • " + movies.results[a].original_language + " • " + Math.round(movies.results[a].vote_average));
                            }
                        });
                        $.ajax({ // API call
                            type: "GET",
                            url: "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&with_genres=14&page=4",
                            success: function(data){
                                movies = data;
                                console.log(data)
                            }
                        }).done(function(){
                            for (let g = 0; g < 6; g++){
                            $("#item0" + g).attr("src", "https://image.tmdb.org/t/p/original/" + movies.results[g].poster_path);
                            $("#info0" + g).text(movies.results[g].release_date + " • ±120 min" + " • " + movies.results[g].original_language + " • " + Math.round(movies.results[g].vote_average));
                            }
                        });
                    }else { // Comedy Movies
                        $.ajax({ // API call
                            type: "GET",
                            url: "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&with_genres=35&page=2",
                            success: function(data){
                                movies = data;
                                console.log(data)
                            }
                        }).done(function(){
                            for (let a = 0; a < 20; a++){
                            $("#item" + a).attr("src", "https://image.tmdb.org/t/p/original/" + movies.results[a].poster_path);
                            $("#info" + a).text(movies.results[a].release_date + " • ±120 min" + " • " + movies.results[a].original_language + " • " + Math.round(movies.results[a].vote_average));
                            }
                        });
                        $.ajax({ // API call
                            type: "GET",
                            url: "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&with_genres=35&page=4",
                            success: function(data){
                                movies = data;
                                console.log(data)
                            }
                        }).done(function(){
                            for (let g = 0; g < 6; g++){
                            $("#item0" + g).attr("src", "https://image.tmdb.org/t/p/original/" + movies.results[g].poster_path);
                            $("#info0" + g).text(movies.results[g].release_date + " • ±120 min" + " • " + movies.results[g].original_language + " • " + Math.round(movies.results[g].vote_average));
                            }
                        });
                    }
                });
            })
        }

    // Filter for Spesifis year
        function gen2(){
            $(document).ready(function(){
                var movies = null;
                const el = document.getElementById("stars");

                el.addEventListener('change', function handleChange(event){
                    if(event.target.value === '2018'){ // Movies in 2018
                        $.ajax({
                            type: "GET",
                            url: "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&primary-release_year=2018&page=8",
                            success: function(data){
                                movies = data;
                                console.log(data)
                            }
                        }).done(function(){
                            for (let a = 0; a < 20; a++){
                            $("#item" + a).attr("src", "https://image.tmdb.org/t/p/original/" + movies.results[a].poster_path);
                            $("#info" + a).text(movies.results[a].release_date + " • ±120 min" + " • " + movies.results[a].original_language + " • " + Math.round(movies.results[a].vote_average));
                            }
                        });
                        $.ajax({
                            type: "GET",
                            url: "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&rimary-release_year=2018&page=9",
                            success: function(data){
                                movies = data;
                                console.log(data)
                            }
                        }).done(function(){
                            for (let g = 0; g < 6; g++){
                            $("#item0" + g).attr("src", "https://image.tmdb.org/t/p/original/" + movies.results[g].poster_path);
                            $("#info0" + g).text(movies.results[g].release_date + " • ±120 min" + " • " + movies.results[g].original_language + " • " + Math.round(movies.results[g].vote_average));
                            }
                        });
                    }else if(event.target.value === '2019'){ // Movies in 2019
                        $.ajax({
                            type: "GET",
                            url: "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&rimary-release_year=2019&page=12",
                            success: function(data){
                                movies = data;
                                console.log(data)
                            }
                        }).done(function(){
                            for (let a = 0; a < 20; a++){
                            $("#item" + a).attr("src", "https://image.tmdb.org/t/p/original/" + movies.results[a].poster_path);
                            $("#info" + a).text(movies.results[a].release_date + " • ±120 min" + " • " + movies.results[a].original_language + " • " + Math.round(movies.results[a].vote_average));
                            }
                        });
                        $.ajax({
                            type: "GET",
                            url: "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&rimary-release_year=2019&page=13",
                            success: function(data){
                                movies = data;
                                console.log(data)
                            }
                        }).done(function(){
                            for (let g = 0; g < 6; g++){
                            $("#item0" + g).attr("src", "https://image.tmdb.org/t/p/original/" + movies.results[g].poster_path);
                            $("#info0" + g).text(movies.results[g].release_date + " • ±120 min" + " • " + movies.results[g].original_language + " • " + Math.round(movies.results[g].vote_average));
                            }
                        });
                    }else if(event.target.value === '2020'){ // Movies in 2020
                        $.ajax({
                            type: "GET",
                            url: "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&rimary-release_year=2020&page=20",
                            success: function(data){
                                movies = data;
                                console.log(data)
                            }
                        }).done(function(){
                            for (let a = 0; a < 20; a++){
                            $("#item" + a).attr("src", "https://image.tmdb.org/t/p/original/" + movies.results[a].poster_path);
                            $("#info" + a).text(movies.results[a].release_date + " • ±120 min" + " • " + movies.results[a].original_language + " • " + Math.round(movies.results[a].vote_average));
                            }
                        });
                        $.ajax({
                            type: "GET",
                            url: "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&rimary-release_year=2020&page=21",
                            success: function(data){
                                movies = data;
                                console.log(data)
                            }
                        }).done(function(){
                            for (let g = 0; g < 6; g++){
                            $("#item0" + g).attr("src", "https://image.tmdb.org/t/p/original/" + movies.results[g].poster_path);
                            $("#info0" + g).text(movies.results[g].release_date + " • ±120 min" + " • " + movies.results[g].original_language + " • " + Math.round(movies.results[g].vote_average));
                            }
                        });
                    }else if(event.target.value === '2021'){ // Movies in 2021
                        $.ajax({
                            type: "GET",
                            url: "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&rimary-release_year=2021&page=27",
                            success: function(data){
                                movies = data;
                                console.log(data)
                            }
                        }).done(function(){
                            for (let a = 0; a < 20; a++){
                            $("#item" + a).attr("src", "https://image.tmdb.org/t/p/original/" + movies.results[a].poster_path);
                            $("#info" + a).text(movies.results[a].release_date + " • ±120 min" + " • " + movies.results[a].original_language + " • " + Math.round(movies.results[a].vote_average));
                            }
                        });
                        $.ajax({
                            type: "GET",
                            url: "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&rimary-release_year=2021&page=28",
                            success: function(data){
                                movies = data;
                                console.log(data)
                            }
                        }).done(function(){
                            for (let g = 0; g < 6; g++){
                            $("#item0" + g).attr("src", "https://image.tmdb.org/t/p/original/" + movies.results[g].poster_path);
                            $("#info0" + g).text(movies.results[g].release_date + " • ±120 min" + " • " + movies.results[g].original_language + " • " + Math.round(movies.results[g].vote_average));
                            }
                        });
                    }else { // Movies in 2022
                        $.ajax({
                            type: "GET",
                            url: "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&rimary-release_year=2022&page=34",
                            success: function(data){
                                movies = data;
                                console.log(data)
                            }
                        }).done(function(){
                            for (let a = 0; a < 20; a++){
                            $("#item" + a).attr("src", "https://image.tmdb.org/t/p/original/" + movies.results[a].poster_path);
                            $("#info" + a).text(movies.results[a].release_date + " • ±120 min" + " • " + movies.results[a].original_language + " • " + Math.round(movies.results[a].vote_average));
                            }
                        });
                        $.ajax({
                            type: "GET",
                            url: "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&rimary-release_year=2022&page=35",
                            success: function(data){
                                movies = data;
                                console.log(data)
                            }
                        }).done(function(){
                            for (let g = 0; g < 6; g++){
                            $("#item0" + g).attr("src", "https://image.tmdb.org/t/p/original/" + movies.results[g].poster_path);
                            $("#info0" + g).text(movies.results[g].release_date + " • ±120 min" + " • " + movies.results[g].original_language + " • " + Math.round(movies.results[g].vote_average));
                            }
                        });
                    }
                });
            })
        }

    // Filter for IMDB Score
        function gen3(){
            $(document).ready(function(){
                var movies = null;
                const el = document.getElementById("score");

                el.addEventListener('change', function handleChange(event){
                    if(event.target.value === 'low'){ // Movies with rating 0-3
                        $.ajax({
                            type: "GET",
                            url: "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&sort_by=vote_average.desc&vote_count.gte=3",
                            success: function(data){
                                movies = data;
                                console.log(data)
                            }
                        }).done(function(){
                            for (let a = 0; a < 20; a++){
                            $("#item" + a).attr("src", "https://image.tmdb.org/t/p/original/" + movies.results[a].poster_path);
                            $("#info" + a).text(movies.results[a].release_date + " • ±120 min" + " • " + movies.results[a].original_language + " • " + Math.round(movies.results[a].vote_average));
                            }
                        });
                        $.ajax({
                            type: "GET",
                            url: "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&sort_by=vote_average.desc&vote_count.gte=3",
                            success: function(data){
                                movies = data;
                                console.log(data)
                            }
                        }).done(function(){
                            for (let g = 0; g < 6; g++){
                            $("#item0" + g).attr("src", "https://image.tmdb.org/t/p/original/" + movies.results[g].poster_path);
                            $("#info0" + g).text(movies.results[g].release_date + " • ±120 min" + " • " + movies.results[g].original_language + " • " + Math.round(movies.results[g].vote_average));
                            }
                        });
                    }else if(event.target.value === 'mid'){ // Movies with rating 4-6
                        $.ajax({
                            type: "GET",
                            url: "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&sort_by=vote_average.desc&vote_count.gte=6",
                            success: function(data){
                                movies = data;
                                console.log(data)
                            }
                        }).done(function(){
                            for (let a = 0; a < 20; a++){
                            $("#item" + a).attr("src", "https://image.tmdb.org/t/p/original/" + movies.results[a].poster_path);
                            $("#info" + a).text(movies.results[a].release_date + " • ±120 min" + " • " + movies.results[a].original_language + " • " + Math.round(movies.results[a].vote_average));
                            }
                        });
                        $.ajax({
                            type: "GET",
                            url: "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&sort_by=vote_average.desc&vote_count.gte=6",
                            success: function(data){
                                movies = data;
                                console.log(data)
                            }
                        }).done(function(){
                            for (let g = 0; g < 6; g++){
                            $("#item0" + g).attr("src", "https://image.tmdb.org/t/p/original/" + movies.results[g].poster_path);
                            $("#info0" + g).text(movies.results[g].release_date + " • ±120 min" + " • " + movies.results[g].original_language + " • " + Math.round(movies.results[g].vote_average));
                            }
                        });
                    }else{ // Movies with rating 7-10
                        $.ajax({
                            type: "GET",
                            url: "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&sort_by=vote_average.desc&vote_count.gte=10",
                            success: function(data){
                                movies = data;
                                console.log(data)
                            }
                        }).done(function(){
                            for (let a = 0; a < 20; a++){
                            $("#item" + a).attr("src", "https://image.tmdb.org/t/p/original/" + movies.results[a].poster_path);
                            $("#info" + a).text(movies.results[a].release_date + " • ±120 min" + " • " + movies.results[a].original_language + " • " + Math.round(movies.results[a].vote_average));
                            }
                        });
                        $.ajax({
                            type: "GET",
                            url: "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&sort_by=vote_average.desc&vote_count.gte=10",
                            success: function(data){
                                movies = data;
                                console.log(data)
                            }
                        }).done(function(){
                            for (let g = 0; g < 6; g++){
                            $("#item0" + g).attr("src", "https://image.tmdb.org/t/p/original/" + movies.results[g].poster_path);
                            $("#info0" + g).text(movies.results[g].release_date + " • ±120 min" + " • " + movies.results[g].original_language + " • " + Math.round(movies.results[g].vote_average));
                            }
                        });
                    }
                });
            })
        }

// Movie Watchlist js


// Single Movue js


// Additional all-page js

