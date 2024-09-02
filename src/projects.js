document.addEventListener("DOMContentLoaded", () => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/static/css/projects.css';  
    document.head.appendChild(link);

    const aboutSection = document.getElementById('projects');
    aboutSection.innerHTML = `
    <!-- Projects Section -->
    <div class="projects-section-container" id="projects">
        <h2>Projects</h2>
        <div class="project-container">
            <!-- ThrillTribe Project Card -->
            <div class="project-card">
                <img src="/static/images/ThrillTribe.png" alt="ThrillTribe Project Image">
                <h3>ThrillTribe</h3>
                <p>Let thrill seekers discover, create, and participate in various activities and events around the world.</p>
                <a href="https://github.com/honeybather/ThrillTribe" class="project-link">View Project</a>
                <a href="https://www.youtube.com/watch?v=7cF6lmCqVc8" class="project-video">View Demo</a>
                <p>Technologies Used:</p>
                <ul>
                    <li>Backend: Flask, SQLAlchemy</li>
                    <li>Frontend: HTML, CSS, JavaScript</li>
                    <li>Database: PostgreSQL</li>
                </ul>
            </div>
            <!-- Portfolio Project Card -->
            <div class="project-card">
                <img src="/static/images/Portfolio.png" alt="Portfolio Project Image">
                <h3>Portfolio 2024</h3>
                <p>My Portfolio website you're probably looking at right now.</p>
                <a href="https://github.com/honeybather/rita-portfolio" class="project-link">View Project</a>
            </div>
        </div>
    </div>
    `;
});