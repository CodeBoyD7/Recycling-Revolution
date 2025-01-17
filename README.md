# Recycling-Revolution

## Introduction

### Overview of the Project
This project is designed to promote the importance of plastic recycling through an interactive and user-friendly web application. The website includes various features aimed at raising awareness and encouraging active participation in recycling initiatives, such as:

- **Interactive visualization of recycling statistics**
- **Survey section** to collect data on public awareness and habits related to plastic recycling
- **Donation form** to support recycling programs
- **User login system** for personalized interactions
- **"Chat with Us" feature** for direct engagement and feedback

### Long-Term Goal
The project aims to integrate database connectivity to manage user accounts, store survey results, track donations, and provide a more personalized experience for visitors.

---

## Explanation of Each Section

### Navbar (Navigation)
- A navigation bar at the top of the page allows users to easily access different sections, such as **"Why Recycle"**, **"Survey"**, **"Donate"**, and **"Contact Us"**.
- On smaller screens, a **hamburger menu** appears for accessible navigation.

### Slideshow (Header)
- A slideshow featuring images related to plastic waste and recycling efforts highlights the urgency of recycling. 
- Designed to attract attention and keep users engaged.

### Content Sections
- **Importance Section**: Educates users on the environmental benefits of recycling plastic.
- **Process Section**: Explains the step-by-step process and benefits of plastic recycling.
- **Survey Section**: Encourages users to participate in surveys to gather data on public recycling habits.

### Recycling Chart
- A dynamic chart created using **Chart.js** visualizes recycling data, such as the volume of recycled plastic (e.g., bottles, bags, wrappers).

### Contact Form
- Users can submit inquiries or suggestions through the contact form.
- Future updates will include database connectivity to store form responses and enable follow-ups.

---

## Updated Features for the Future

### 1. Database Connectivity
- **User Login System**: Store user details and preferences for tracking recycling efforts, survey responses, and donation history.
- **Survey Data Storage**: Connect surveys to a database for response storage and analysis.
- **Donation Tracking**: Securely store donation data in the database and provide users with receipts and history tracking.

### 2. More Surveys
- Additional surveys to capture data on sustainable living, preferred recycling methods, and awareness of plastic-free alternatives.

### 3. Donations
- Add a section where users can contribute funds to recycling programs, awareness campaigns, and plastic collection efforts.
- Include features for tracking donations and receiving updates on their impact.

### 4. Live Chat Feature
- Enable real-time communication with representatives for questions, feedback, and suggestions.
- Collect user feedback for continuous improvement.

---

## HTML/CSS Code

### HTML Code
```html
<!-- Navbar Section -->
<nav class="navbar">
  <div class="logo">
    <img src="logo.png" alt="Recycling Logo">
    <span>Plastic Recycling</span>
  </div>
  <ul class="nav-links">
    <li><a href="#why-recycle">Why Recycle</a></li>
    <li><a href="#survey">Survey</a></li>
    <li><a href="#donate">Donate</a></li>
    <li><a href="#contact">Contact Us</a></li>
  </ul>
  <div class="hamburger" onclick="toggleMenu()">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </div>
</nav>

<!-- Contact Form Section -->
<section id="contact">
  <h2>Contact Us</h2>
  <form id="contactForm" method="POST" action="submitForm.php">
    <label for="name">Your Name</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Your Email</label>
    <input type="email" id="email" name="email" required>

    <label for="message">Your Message</label>
    <textarea id="message" name="message" required></textarea>

    <button type="submit">Submit</button>
  </form>
</section>
