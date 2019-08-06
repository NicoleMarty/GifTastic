// Array of things
var hipsterThings = ["beards", "vintage", "pabst-blue-ribbon", "indie-rock", "unicycle", "gentrification"];
// Generic function for capturing the movie name from the data-attribute
function alertNewHipsterThing() {
    var newHipsterThing = $(this).attr("data-name");

    alert(newHipsterThing);
}

// On click event for things buttons
$("button").on("click", function() {
    var hipsterThings = $(this).attr("data-hipsterThings");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        hipsterThings + "&api_key=lunA3lE4OLv8yrxJ6Ppj3KF3bl4ZjFq9&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            var hipsterThingsDiv = $("<div>");
            var p = $("<p>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var hipsterThingsImage = $("<img>");
            hipsterThingsImage.attr("src", results[i].images.fixed_height.url);
            hipsterThingsDiv.append(p);
            hipsterThingsDiv.append(hipsterThingsImage);
            $("#gifs-appear-here").prepend(hipsterThingsDiv);
        };
    });
});

$("#add-hipsterThing").on("click", function(event) {
    event.preventDefault();
    var newHipsterThing = $("#hipster-input").val().trim();
    alert(newHipsterThing);
});