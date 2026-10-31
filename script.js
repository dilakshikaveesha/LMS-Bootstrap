
function showDetails(title, description) {
    document.getElementById("courseTitle").textContent = title;

    document.getElementById("courseDescription").textContent =
        description;

    document.getElementById("detailsModal").style.display = "flex";
}

function closeDetails() {
    document.getElementById("detailsModal").style.display = "none";
}

function sendMessage(event) {
    event.preventDefault();

    alert("Your message has been submitted successfully!");

    event.target.reset();
}
