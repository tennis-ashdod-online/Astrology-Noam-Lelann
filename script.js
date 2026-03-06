// לחצן נגישות
document.getElementById("accessibilityButton").addEventListener("click", function() {
    if(document.body.style.backgroundColor !== "black") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "#f5f3f7";
        document.body.style.color = "#333";
    }
});