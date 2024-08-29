document.addEventListener("DOMContentLoaded", () => {
    const homeSection = document.getElementById('home');
    homeSection.innerHTML = `
        <div class="profile-section-container">
            <div class="profile-text">
                <h1>Hi, I’m Rita Galkov</h1>
                <h2>Passionate Coder, Turning Ideas into Reality</h2>
                <a href="#contact" class="connect-button">Let’s Connect</a>
            </div>
            <div class="profile-picture">
                <div class="profile-section">
                    <img src="/static/images/profile.png" alt="Profile Picture" class="original">
                    <img src="/static/images/puppet.png" alt="Replacement Picture" class="replacement">
                </div>
            </div>
            <div class="scrolldown" style="--color: #d2b1f6">
                <div class="chevrons">
                    <div class="chevrondown"></div>
                    <div class="chevrondown"></div>
                </div>
            </div>
        </div>
    `;
});