/*document.querySelectorAll(".nav-link").forEach(item => {
    item.addEventListener("click", function() {
        document.querySelectorAll(".nav-link").forEach(link => link.classList.remove("active"));
        this.classList.add("active");
    });
});*/
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    // Function to remove active class from all links and add to current
    function setActiveLink(id) {
        navLinks.forEach(link => link.classList.remove("active"));
        let activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (activeLink) {
            activeLink.classList.add("active");
        }
    }

    // Click event for navigation links
    navLinks.forEach(item => {
        item.addEventListener("click", function() {
            setActiveLink(this.getAttribute("href").substring(1)); // Remove #
        });
    });

    // IntersectionObserver to detect which section is in viewport
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveLink(entry.target.id);
            }
        });
    }, {
        root: null,
        threshold: 0.5  // Adjust visibility threshold
    });

    sections.forEach(section => observer.observe(section));
});

