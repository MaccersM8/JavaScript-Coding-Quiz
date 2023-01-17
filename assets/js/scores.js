// Creating A Function Which Runs When Highscores HTML Page Loads
document.addEventListener("DOMContentLoaded", function () {
    // Retrieving Local Storage Data For User Scores
    var HighScores = JSON.parse(localStorage.getItem("GamePerformance"));
    // Sorting The HighScores Array
    HighScores.sort();
    // Declaring A Variable Which Selects The "#highscores" ID On Highscores HTML Page
    var HighScoresListed = document.getElementById("highscores");
    //Creating A For Loop For The HighScores Array
    for (var i = 0; i < HighScores.length; i++) {
        // Creating A List Item For Score
        var LI = document.createElement("li");
        // Giving List Item Some Content
        LI.textContent = HighScores[i].PlayerID + " - " + HighScores[i].PlayerScore;
        // Appending Newly Created List Item To HighScores Section
        HighScoresListed.appendChild(LI);
    }
    // Creating A Function Which Runs When Clear Button Is Clicked
    document.getElementById("clear").addEventListener("click", function () {
        // Removing Local Storage Data
        localStorage.removeItem("GamePerformance");
        // Clearing HTML In High Scores Section
        HighScoresListed.innerHTML = "";
    });
});
