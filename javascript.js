// Array of things
var hipsterThings = ["beards", "vintage", "pabst-blue-ribbon", "indie-rock", "unicycle", "gentrification"];

// On click event for things buttons
$("button").on("click", function() {
    var hipsterThings = $(this).attr("data-hipsterThings");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        hipsterThings + "&api_key=lunA3lE4OLv8yrxJ6Ppj3KF3bl4ZjFq9&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        // Step 1: Run this file, click a button, and see what the response object looks like in the browser's console.
        // Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.

        console.log(response);

        // Step 2: since the image information is inside of the data key,
        // make a variable named results and set it equal to response.data

        // =============== var results = response.data; ==================
        var results = response.data;

        // ========================

        for (var i = 0; i < results.length; i++) {

            // Step 3: uncomment the for loop above and the closing curly bracket below.
            // Make a div with jQuery and store it in a variable named animalDiv.
            var hipsterThingsDiv = $("<div>");
            // Make a paragraph tag with jQuery and store it in a variable named p.
            var p = $("<p>");
            // Set the inner text of the paragraph to the rating of the image in results[i].
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            // Make an image tag with jQuery and store it in a variable named animalImage.
            var hipsterThingsImage = $("<img>");
            // Set the image's src to results[i]'s fixed_height.url.
            hipsterThingsImage.attr("src", results[i].images.fixed_height.url);
            // Append the p variable to the animalDiv variable.
            hipsterThingsDiv.append(p);
            // Append the animalImage variable to the animalDiv variable.
            hipsterThingsDiv.append(hipsterThingsImage);
            // Prepend the animalDiv variable to the element with an id of gifs-appear-here.
            $("#gifs-appear-here").prepend(hipsterThingsDiv);

            // ============= put step 3 in between these dashes ======================

            // ==================================
        }

    });
});