document.addEventListener("DOMContentLoaded", function() {

    let searchButton = document.getElementById("searchButton");
    let movieInput = document.getElementById("movieInput");
    let results = document.getElementById("results");

    searchButton.addEventListener("click", function() {

        let title = movieInput.value;

        results.innerHTML = "<p>Loading...</p>";

        fetch("https://search.imdbot.workers.dev/?q=" + encodeURIComponent(title))
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {

                results.innerHTML = "";

                if (!data.description || data.description.length === 0) {
                    results.innerHTML = "<p>No movies or shows found.</p>";
                    return;
                }

                let movies = data.description.slice(0, 5);

                for (let i = 0; i < movies.length; i++) {
                    let movie = movies[i];

                    let div = document.createElement("div");

                    let movieTitle = movie["#TITLE"] ? movie["#TITLE"] : "Unknown Title";
                    let year = movie["#YEAR"] ? movie["#YEAR"] : "Unknown Year";
                    let actors = movie["#ACTORS"] ? movie["#ACTORS"] : "Unknown Actors";
                    let poster = movie["#IMG_POSTER"] ? movie["#IMG_POSTER"] : "";

                    div.innerHTML =
                        "<h2>" + movieTitle + "</h2>" +
                        "<p><strong>Year:</strong> " + year + "</p>" +
                        "<p><strong>Actors:</strong> " + actors + "</p>";

                    if (poster !== "") {
                        div.innerHTML += "<img src='" + poster + "' alt='" + movieTitle + " poster'>";
                    }

                    results.appendChild(div);
                }

            });

    });

});