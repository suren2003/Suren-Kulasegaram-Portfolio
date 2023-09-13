document.addEventListener("DOMContentLoaded", function() {
    const modalButtons = document.querySelectorAll('[id^="openModal"]');
    const closeModalBtn = document.getElementById("closeModalBtn");
    const modal = document.getElementById("myModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalContent = document.getElementById("modalContent");

    modalButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Set different content based on the button clicked
            if (button.id === "openModal1") {
                modalTitle.textContent = "General Information";
                modalContent.innerHTML = '';
                //type out the content in html, then copy and paste it here
            } else if (button.id === "openModal2") {
                modalTitle.innerHTML = "Education";
                modalContent.innerHTML = "This is the content of Education";
            } else if (button.id === "openModal3") {
                modalTitle.innerHTML = "Skills";
                modalContent.innerHTML = "This is the content of Skills";
            } else if (button.id === "openModal4") {
                modalTitle.innerHTML = "Experience";
                modalContent.innerHTML = "This is the content of Experience";
            }

            modal.style.display = "block";
        });
    });

    closeModalBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
