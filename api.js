document.addEventListener("DOMContentLoaded", function() {

    let searchButton = document.getElementById("searchButton");
    let movieInput = document.getElementById("movieInput");
    let results = document.getElementById("results");

    searchButton.addEventListener("click", function() {

        let title = movieInput.value;

        if (title === "") {
            results.innerHTML = "<p>Please enter a movie or show title.</p>";
            return;
        }

        results.innerHTML = "<p>Loading...</p>";

        fetch("https://v2.sg.media-imdb.com/suggestion/" + title.charAt(0).toLowerCase() + "/" + encodeURIComponent(title) + ".json")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {

                results.innerHTML = "";

                if (!data.d || data.d.length === 0) {
                    results.innerHTML = "<p>No movies or shows found.</p>";
                    return;
                }

                let movies = data.d.slice(0, 5);

                for (let i = 0; i < movies.length; i++) {
                    let movie = movies[i];

                    let div = document.createElement("div");

                    let movieTitle = movie.l || "Unknown Title";
                    let year = movie.y || "Unknown Year";
                    let actors = movie.s || "Unknown Cast";
                    let poster = movie.i ? movie.i.imageUrl : "";

                    div.innerHTML =
                        "<h2>" + movieTitle + "</h2>" +
                        "<p><strong>Year:</strong> " + year + "</p>" +
                        "<p><strong>Cast:</strong> " + actors + "</p>";

                    if (poster !== "") {
                        div.innerHTML += "<img src='" + poster + "' alt='Movie poster'>";
                    }

                    results.appendChild(div);
                }

            })
            .catch(function(error) {
                console.log(error);
                results.innerHTML = "<p>Something went wrong with the API request.</p>";
            });

    });

});