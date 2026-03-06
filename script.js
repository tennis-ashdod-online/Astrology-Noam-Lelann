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

// אנימציה לגלילה של כרטיסי קורסים
const cards = document.querySelectorAll('.course-card');

function revealCards() {
    const windowHeight = window.innerHeight;
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < windowHeight - 50) {
            card.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealCards);
window.addEventListener('load', revealCards);