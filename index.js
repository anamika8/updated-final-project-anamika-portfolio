// Wrap every letter in a span
var textWrapper = document.querySelector('.ml16');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// Get all sections
var allSections = document.querySelectorAll("section");

anime.timeline({ loop: true })
    .add({
        targets: '.ml16 .letter',
        translateY: [-100, 0],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 30 * i
    }).add({
        targets: '.ml16',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

// Utility method to toggle display when switching between sections
const switchSection = (sectionId) => {
    allSections.forEach((section) => {
        if (section.id === sectionId) {
            section.style.display = "block";
        } else if (section.style.display === "block") {
            section.style.display = "none";
        }
    });
};