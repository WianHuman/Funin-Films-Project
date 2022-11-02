// Sign up/in (Index) js

$(document).ready(function(){

    $("#errortext1").hide()
    $(".Signupblock").hide()
    $(".Signinblock").show()

    $("#signup1").click(function(){
        $(".Signupblock").show()
        $(".Signinblock").hide()
        $("#signup1").css({
            "background-color":"#82dcdd",
        })
        $("#signin1").css({
            "background-color":"#03787a"
        })
    })

    $("#signin1").click(function(){
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
        username: "Wian Human",
        password: "221286"
    },
    {
        username: "Marine Du Plessis",
        password: "221326"
    },
    {
        username: "Kyle Shilubane",
        password: "221282"
    },
    {
        username: "Cailyn Borman",
        password: "123456"
    },
    {
        username: "Animie van Rooyen",
        password: "123456"
    }
]

function login () {

    var name = document.getElementById("user-name1").value;
    var password = document.getElementById("pass-word1").value;
    var usercheck = false

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
        // to display username on page use var saveduser = JSON.parse(sessionStorage.getItem("loggedin"))
        // use saveduser.username to display current user's username on your page using js or jquery!!!
    }else {
        $("#errortext1").show()
        $("#errortext1").html("Incorrect Username or Password")
    }

}



// Home page js
    // API Newly released Movies
        $(document).ready(function(){
            var Movie = null;
            let call = "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&primary_release_year=2020&page=2";
            $.ajax({
                type: "GET",
                url: call,
                success: function(data){
                    Movie = data;
                    console.log(data)
                }
            }).done(function(){
                for( let t = 0; t < 15; t++){
                    $("#slide" + t).attr("src", "https://image.tmdb.org/t/p/original/" + Movie.results[t].backdrop_path);
                    $("#title" + t).text(Movie.results[t].title);
                    $("#overview" + t).text(Movie.results[t].overview);
                    $("#rating" + t).text("Viewer rating: " + Math.round(Movie.results[t].vote_average));
                    $("#wl" + t).click(function (){
                        var mid = Movie.results[t].id
                        var currentid = JSON.stringify(mid)
                        sessionStorage.setItem("savedmovie",currentid)
                    })
                    $("#pl" + t).click(function (){
                        var mid = Movie.results[t].id
                        var currentid = JSON.stringify(mid)
                        sessionStorage.setItem("currentmovie",currentid)
                        location.replace("Single Movie Page.html")
                        // alert(currentid)
                    })
                }
                
            })
        });


    // API Popular Movies
        $(document).ready(function(){
            var Movie = null;
            $.ajax({
                type: "GET",
                url: "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&sort_by=popularity.desc",
                success: function(data){
                    Movie = data;
                    // console.log(data)
                }
            }).done(function(){
                for( let h = 0; h < 4; h++){
                    $("#pic" + h).attr("src", "https://image.tmdb.org/t/p/original/" + Movie.results[h].poster_path);
                    $("#more" + h).text(Movie.results[h].release_date + " • ±120 min" + " • " + Movie.results[h].original_language + " • " + Math.round(Movie.results[h].vote_average));
                    $("#wlr" + h).click(function (){
                        var mid = Movie.results[h].id
                        var currentid = JSON.stringify(mid)
                        sessionStorage.setItem("savedmovie1",currentid)
                        // alert(currentid)
                    })
                    $("#smr" + h).click(function (){
                        var mid = Movie.results[h].id
                        var currentid = JSON.stringify(mid)
                        sessionStorage.setItem("currentmovie",currentid)
                        location.replace("Single Movie Page.html")
                    })
                }
            })
        });

    // API Top Rated Movies
        $(document).ready(function(){
            var Movie = null;
            $.ajax({
                type: "GET",
                url:  "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&certification=R&sort_by=vote_average.desc&page=3",
                success: function(data){
                    Movie = data;
                    // console.log(data)
                }
            }).done(function(){
                for( let b = 12; b < 19; b++){
                    $("#picr" + b).attr("src", "https://image.tmdb.org/t/p/original/" + Movie.results[b].poster_path);
                    $("#morer" + b).text(Movie.results[b].release_date + " • ±120 min" + " • " + Movie.results[b].original_language + " • " + Math.round(Movie.results[b].vote_average));
                    $("#wlp" + b).click(function (){
                        var mid = Movie.results[b].id
                        var currentid = JSON.stringify(mid)
                        sessionStorage.setItem("savedmovie2",currentid)
                        // alert(currentid)
                    })
                    $("#smp" + b).click(function (){
                        var mid =  Movie.results[b].id
                        var currentid = JSON.stringify(mid)
                        sessionStorage.setItem("currentmovie",currentid)
                        location.replace("Single Movie Page.html")
                    })
                }
            })
        });

    // JS for adding username to page
    $(document).ready(function (){
        var saveduser = JSON.parse(sessionStorage.getItem("loggedin"))
        $("#welcome").text("Welcome " + saveduser.username)
        $("#signeduser").html("<p style = " + "margin = 0;>" + saveduser.username + "</p>")
    })


// Movie library js
    $(document).ready(function(){
        var movies = null;
        // API call for 20 movies
        $.ajax({
            type: "GET",
            url: "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&page=1",
            success: function(data){
                movies = data;
                console.log(data)
            }
        }).done(function(){
            for (let i = 0; i < 20; i++){
            $("#item" + i).attr("src", "https://image.tmdb.org/t/p/original/" + movies.results[i].poster_path);
            $("#info" + i).text(movies.results[i].release_date + " • ±120 min" + " • " + movies.results[i].original_language + " • " + Math.round(movies.results[i].vote_average));
            $("#wll" + i).click(function (){
                var mid = movies.results[i].id
                var currentid = JSON.stringify(mid)
                // sessionStorage.setItem("savedmovie3",currentid)
                alert(currentid)
            })
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
                $("#wll0" + r).click(function (){
                    var mid = movies.id
                    var currentid = JSON.stringify(mid)
                    sessionStorage.setItem("savedmovie4",currentid)
                    // alert(currentid)
                })
            });
        }    
    });

    // Filter for all movies
        function gen(){
            $(document).ready(function(){
                var movies = null;

                // API call
                let randomitems = Math.floor(Math.random()*500);
                let call = "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&page=1";
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

    // Filter for Specific year
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

    $(document).ready(function (){
        // Display selected Movie
        var savedmovieid = JSON.parse(sessionStorage.getItem("savedmovie"))
        
        let call = "https://api.themoviedb.org/3/movie/" + savedmovieid + "?api_key=8f58d34ff6d61c20b5d13e1290c1a937";
        $.ajax({
            type: "GET",
            url: call,
            success: function(data){
                movies = data;
                console.log(data)
            }
        }).done(function (){
            $("#wlmv1").text(movies.title)
            $("#wlmv0").attr("src", "https://image.tmdb.org/t/p/original/" + movies.poster_path);
            $("#wlmv2").text(movies.release_date + " • " + movies.runtime + " min" + " • " + movies.original_language + " • " + Math.round(movies.vote_average));
        });

        var savedmovieid1 = JSON.parse(sessionStorage.getItem("savedmovie1"))
        
        let call1 = "https://api.themoviedb.org/3/movie/" + savedmovieid1 + "?api_key=8f58d34ff6d61c20b5d13e1290c1a937";
        $.ajax({
            type: "GET",
            url: call1,
            success: function(data){
                movies1 = data;
                console.log(data)
            }
        }).done(function (){
            $("#wlm3").text(movies1.title)
            $("#wlm4").attr("src", "https://image.tmdb.org/t/p/original/" + movies1.poster_path);
            $("#wlm5").text(movies1.release_date + " • " + movies1.runtime + " min" + " • " + movies1.original_language + " • " + Math.round(movies1.vote_average));
        });

        var savedmovieid2 = JSON.parse(sessionStorage.getItem("savedmovie2"))
        
        let call2 = "https://api.themoviedb.org/3/movie/" + savedmovieid2 + "?api_key=8f58d34ff6d61c20b5d13e1290c1a937";
        $.ajax({
            type: "GET",
            url: call2,
            success: function(data){
                movies2 = data;
                console.log(data)
            }
        }).done(function (){
            $("#wlm6").text(movies2.title)
            $("#wlm7").attr("src", "https://image.tmdb.org/t/p/original/" + movies2.poster_path);
            $("#wlm8").text(movies2.release_date + " • " + movies2.runtime + " min" + " • " + movies2.original_language + " • " + Math.round(movies2.vote_average));
        });

        var savedmovieid3 = JSON.parse(sessionStorage.getItem("savedmovie3"))
        
        let call3 = "https://api.themoviedb.org/3/movie/" + savedmovieid3 + "?api_key=8f58d34ff6d61c20b5d13e1290c1a937";
        $.ajax({
            type: "GET",
            url: call3,
            success: function(data){
                movies3 = data;
                console.log(data)
            }
        }).done(function (){
            $("#wlm9").text(movies3.title)
            $("#wlm10").attr("src", "https://image.tmdb.org/t/p/original/" + movies3.poster_path);
            $("#wlm11").text(movies3.release_date + " • ±120 min" + " • " + movies3.original_language + " • " + Math.round(movies3.vote_average));
        });

        var savedmovieid4 = JSON.parse(sessionStorage.getItem("savedmovie4"))
        
        let call4 = "https://api.themoviedb.org/3/movie/" + savedmovieid4 + "?api_key=8f58d34ff6d61c20b5d13e1290c1a937";
        $.ajax({
            type: "GET",
            url: call4,
            success: function(data){
                movies4 = data;
                console.log(data)
            }
        }).done(function (){
            $("#wlm9").text(movies4.title)
            $("#wlm10").attr("src", "https://image.tmdb.org/t/p/original/" + movies4.poster_path);
            $("#wlm11").text(movies4.release_date + " • ±120 min" + " • " + movies4.original_language + " • " + Math.round(movies4.vote_average));
        });
        
    });

    $("#d1").click(function(){
        $(this).closest('#box01').empty();
    });

    $("#d2").click(function(){
        $(this).closest('#box02').empty();
    });

    $("#d3").click(function(){
        $(this).closest('#box03').empty();
    });

    $("#d4").click(function(){
        $(this).closest('#box04').empty();
    });

// Single Movie js

$(document).ready(function (){
    var mvid = JSON.parse(sessionStorage.getItem("currentmovie"))
    // alert(mvid)

    let spcall = "https://api.themoviedb.org/3/movie/" + mvid + "?api_key=8f58d34ff6d61c20b5d13e1290c1a937";
    $.ajax({
        type: "GET",
        url: spcall,
        success: function(data){
            spmovie = data
        }
    }).done(function (){
        console.log(spmovie)
        $("#smdesc").text(spmovie.overview)
        $("#smtitle").text(spmovie.title)
        $("#sminfo").text(spmovie.release_date + " • " + spmovie.runtime + " min" + " • " + spmovie.original_language + " • " + Math.round(spmovie.vote_average))
        $(".white_box").css({
            "box-shadow": "0 4px 8px 0 rgba(0,0,0,0.2);",
            "background-image":"url(https://image.tmdb.org/t/p/original/" + spmovie.backdrop_path +")",
            "background-size":"cover"
        })
        $("#smrating").text("Viewer rating: "+ Math.round(spmovie.vote_average))
        $("#smgenre").text("Genre: " + spmovie.genres[0].name)

        var movies = null;
        $.ajax({
            type: "GET",
            url: "https://api.themoviedb.org/3/discover/movie?api_key=8f58d34ff6d61c20b5d13e1290c1a937&page=1",
            success: function(data){
                movies = data;
                console.log(data)
            }
        }).done(function(){
            for (let i = 0; i < 3; i++) {
                $("#mlt" + i).css({
                    "background-image":"url(https://image.tmdb.org/t/p/original/" + movies.results[i].poster_path +")",
                    "background-size":"cover"
                })
                
            }
        })
    })
})

