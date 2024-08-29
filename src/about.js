document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.getElementById('about');
    aboutSection.innerHTML = `
    
    <div class="about-section-container" id="about">
    <h2>About Me</h2>
    <p>My name is Rita, I’m an 18-year-old aspiring software engineer from Montreal. I recently completed the Accelerated Software Engineering Program at Hackbright Academy in August 2024. In just seven months, I’ve gained experience in:</p>
    <ul>
        <li>Programming Languages: Python, JavaScript</li>
        <li>Web Technologies: HTML, CSS, Flask, jQuery, Bootstrap, Jinja</li>
        <li>Tools & Platforms: Git, GitHub, Command Line</li>
        <li>Database & Data Handling: SQL, PostgreSQL, AJAX, JSON</li>
        <li>Development Methodologies: Agile/Scrum</li>
    </ul>
    <p>Inspired by my family, I began this journey into software development, and it has sparked a deep passion for creating and enhancing applications that connect people. I’m excited to tackle new challenges and continue growing as a web developer.</p>
    <a href="/static/documents/Rita_Resume.pdf" class="resume-download">2024 CV - Resume</a>

    <!-- Hobbies Section
    <div class="hobbies-container">
        <h3>My Hobbies</h3>
        <img src="/static/images/gifs/boxing.gif" alt="Boxing GIF">
        <img src="/static/images/gifs/biking.gif" alt="Biking GIF">
        <img src="/static/images/gifs/hiking.gif" alt="Hiking GIF">
        <img src="/static/images/gifs/gym.gif" alt="Gym GIF">
    </div>
</div> -->
        
    `;
});