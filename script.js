// לחצן נגישות - לדוגמה: מחליף צבעי רקע לעיניים רגישות
document.getElementById("accessibilityButton").addEventListener("click", function() {
    if(document.body.style.backgroundColor !== "black") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "#f9f5f1";
        document.body.style.color = "#333";
    }
});