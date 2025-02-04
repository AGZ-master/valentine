document.addEventListener("DOMContentLoaded", function() {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");

    yesButton.addEventListener("click", function() {
        window.location.href = "reallllly.html"; // Redirect to the new page
    });

    noButton.addEventListener("mouseover", function() {
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

        noButton.style.left = x + "px";
        noButton.style.top = y + "px";
    });
});
