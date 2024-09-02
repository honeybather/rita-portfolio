document.addEventListener("DOMContentLoaded", () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/static/css/contact.css';  
  document.head.appendChild(link);

  const aboutSection = document.getElementById('contact');
  aboutSection.innerHTML = `
    <div class="contact-section-container" id="contact">
        <h1>Say hi</h1>
        <h2>Contact Me</h2>
    </head>
    <body>
   
    <div class="container">
      <form action="/submit_form" method="POST">
        <label for="fname"> Name:</label>
        <input type="text" id="fname" name="firstname">
    
        <label for="lname">Email:</label>
        <input type="text" id="lname" name="email">
    
        <label for="subject">Message:</label>
        <textarea id="subject" name="subject" style="height:200px"></textarea>
    
    <button>
      <div class="svg-wrapper-1">
        <div class="svg-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
            ></path>
          </svg>
        </div>
      </div>
      <span>Send</span>
    </button>

    `;
});