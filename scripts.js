function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}

function openModal(src) {
    document.getElementById("imgModal").style.display = "block";
    document.getElementById("modalImg").src = src;
}
function closeModal() {
    document.getElementById("imgModal").style.display = "none";
}

// Optional: Close modal when clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById("imgModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

function toggleDarkMode() {
    const body = document.body;
    const icon = document.getElementById('darkModeIcon');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        icon.textContent = "☀️"; // Light mode icon
    } else {
        icon.textContent = "🌙"; // Dark mode icon
    }
}
