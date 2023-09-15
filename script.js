document.addEventListener("DOMContentLoaded", function() {    
    // OPENING MODALS IN ABOUT ME SECTION
    const modalButtons = document.querySelectorAll('[id^="openModal"]');
    const closeModalBtn = document.getElementById("closeModalBtn");
    const modal = document.getElementById("myModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalContent = document.getElementById("modalContent");

    modalButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            // Prevent the click event from propagating to the modal
            event.stopPropagation();

            if (button.id === "openModal1") {
                modalTitle.textContent = "Contact & Resume";
                modalContent.innerHTML = '\
                    <ul>\
                        <li>Suren Kulasegaram</li>\
                        <li>surenkulasegaram@gmail.com</li>\
                        <ul id="socials">\
                            <li>\
                                <a href="https://www.linkedin.com/in/suren-kulasegaram/" target="_blank">\
                                    <img src="assets/LinkedInLogo.png" alt="LinkedIn Logo" class="logos">\
                                </a>\
                            </li>\
                            <li>\
                                <a href="https://github.com/suren2003" target="_blank">\
                                    <img src="assets/GitHubLogo.png" alt="GitHub Logo" class="logos">\
                                </a>\
                            </li>\
                            <li>\
                                <a href="assets/Resume_Suren_Kulasegaram.pdf" target="_blank">\
                                    Resume\
                                </a>\
                            </li>\
                        </ul>\
                    </ul>';
                //type out the content in HTML, then copy and paste it here
            } else if (button.id === "openModal2") {
                modalTitle.innerHTML = "Education";
                modalContent.innerHTML = '\
                    <ul>\
                        <li>3rd Year Computer Systems Engineering</li>\
                        <li>Carleton University</li>\
                        <li><b>GPA</b>: 4.0/4.0</li>\
                        <li>Expected Graduation: April 2026</li>\
                    </ul>';
            } else if (button.id === "openModal3") {
                modalTitle.innerHTML = "Skills";
                modalContent.innerHTML = '\
                    <ul>\
                        <li>\
                            <b>Languages:</b>\
                            <ul class="languages-list">\
                                <li class="languages-item">Python</li>\
                                <li class="languages-item">JavaScript</li>\
                                <li class="languages-item">C</li>\
                                <li class="languages-item">PHP</li>\
                                <li class="languages-item">Java</li>\
                                <li class="languages-item">HTML</li>\
                                <li class="languages-item">CSS</li>\
                                <li class="languages-item">SQL</li>\
                            </ul>\
                        </li>\
                        <li>\
                            <b>Tools/Frameworks:</b>\
                            <ul class="tools-list">\
                                <li class="tools-item">Node.js</li>\
                                <li class="tools-item">MochaJS</li>\
                                <li class="tools-item">Git</li>\
                                <li class="tools-item">Postman</li>\
                                <li class="tools-item">OpenStack</li>\
                            </ul>\
                        </li>\
                        <li>\
                            <b>Soft Skills:</b>\
                            <ul class="softSkill-list">\
                                <li class="softSkill-item">Communication</li>\
                                <li class="softSkill-item">Teamwork</li>\
                                <li class="softSkill-item">Adaptability</li>\
                                <li class="softSkill-item">Time Management</li>\
                                <li class="softSkill-item">Problem Solving</li>\
                                <li class="softSkill-item">English</li>\
                                <li class="softSkill-item">French</li>\
                                <li class="softSkill-item">Tamil</li>\
                            </ul>\
                        </li>\
                    </ul>';
            } else if (button.id === "openModal4") {
                modalTitle.innerHTML = "Experience";
                modalContent.innerHTML = '\
                    <div class="experience-list">\
                        <div class="experience-item">\
                            <div class="experience-header">\
                                <b>Software Test Specialist Co-Op</b>\
                                <span class="dropdown-icon">+</span>\
                            </div>\
                            <div class="experience-content">\
                                test content\
                            </div>\
                        </div>\
                    </div>';
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

    // OPENING THE DROPDOWN IN EXPERIENCE MODAL
    function handleExperienceItemClick(event) {
        if (event.target.classList.contains('dropdown-icon')) {
            const header = event.target.parentElement; // Get the parent header element
            const content = header.nextElementSibling;

            // Toggle the display of the content
            content.style.display = content.style.display === 'block' ? 'none' : 'block';

            // Toggle the plus sign to a minus sign or vice versa
            const dropdownIcon = event.target;
            dropdownIcon.textContent = content.style.display === 'block' ? '-' : '+';
        }
    }

    // Add a click event listener to the document to handle dynamically added elements
    document.addEventListener('click', handleExperienceItemClick);
    
});
