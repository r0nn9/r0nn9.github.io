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

        fetch("https://imdb.iamidiotareyoutoo.com/search?q=" + encodeURIComponent(title))
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {

                console.log(data);

                results.innerHTML = "";

                if (!data.description || data.description.length === 0) {
                    results.innerHTML = "<p>No movies or shows found.</p>";
                    return;
                }

                let movies = data.description.slice(0, 5);

                for (let i = 0; i < movies.length; i++) {
                    let movie = movies[i];

                    let div = document.createElement("div");

                    let movieTitle = movie["#TITLE"] || "Unknown Title";
                    let year = movie["#YEAR"] || "Unknown Year";
                    let actors = movie["#ACTORS"] || "Unknown Actors";
                    let imdbID = movie["#IMDB_ID"] || "";
                    let poster = movie["#IMG_POSTER"] || "";

                    div.innerHTML =
                        "<h2>" + movieTitle + "</h2>" +
                        "<p><strong>Year:</strong> " + year + "</p>" +
                        "<p><strong>Actors:</strong> " + actors + "</p>";

                    if (imdbID !== "") {
                        div.innerHTML +=
                            "<p><strong>IMDb ID:</strong> " + imdbID + "</p>";
                    }

                    if (poster !== "") {
                        div.innerHTML +=
                            "<img src='" + poster + "' alt='" + movieTitle + " poster'>";
                    }

                    results.appendChild(div);
                }

            })
            .catch(function(error) {
                console.log(error);
                results.innerHTML = "<p>Something went wrong with the movie API request.</p>";
            });

    });

});