document.addEventListener("DOMContentLoaded", () => {
    const projectsSection = document.getElementById('projects');
    projectsSection.innerHTML = `

    <!-- Projects Section -->
    <div class="projects-section-container" id="projects">
        <h2>Projects</h2>
        <div class="project-container">
            <div class="project-card">
                <img src="/static/images/projects/ThrillTribe.png">
                <h3>My first proud project </h3>
                <p>Let thrill seakers discover, create, and participate in various activities and events around the world. </p>
                <a href="https://github.com/honeybather/ThrillTribe" class="project-link">View Project</a>
                <a href="https://www.youtube.com/watch?v=7cF6lmCqVc8 " class="project-video">View Demo</a>
                <p> Technologies Used
                    Backend 🛠️: Flask, SQLAlchemy
                    Frontend 🎨: HTML, CSS, JavaScript
                    Database 🗄️: PostgreSQL </p>
                    <h3>Portfolio 2024</h3>
                    <p>My Portfolio website your probarly looking at right now. </p>
                    <a href="https://github.com/honeybather/rita-portfolio" class="project-link">View Project</a>
                
                <p>More to come soon!</p>

    `;
});