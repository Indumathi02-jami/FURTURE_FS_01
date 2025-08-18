# 🌐 React Portfolio

This is a personal portfolio website built using **React.js**, designed to showcase my skills, projects, and provide a way to get in touch through a fully functional contact form powered by **EmailJS**.

## 🚀 Features

- **Home** – A brief introduction and welcome message.
- **About** – A personal overview of who I am and what I do.
- **Skills** – A list of technical skills and tools I work with.
- **Projects** – A showcase of selected personal and professional projects.
- **Contact** – A contact form that allows visitors to send messages directly to my email using EmailJS.

## 📬 Contact Form

The contact form uses [EmailJS](https://www.emailjs.com/) to send emails without the need for a backend server. Simply fill out the form and your message will be delivered straight to my inbox.

## 🛠️ Tech Stack

- React.js
- HTML5
- CSS3 / SCSS / Tailwind (whichever you used)
- JavaScript (ES6+)
- EmailJS (for sending emails from the contact form)

## 📁 Folder Structure (Simplified)

/src
/components
- Home.jsx
- About.jsx
- Skills.jsx
- Projects.jsx
- Contact.jsx
/assets
- (images, icons, etc.)
App.js
index.js

step-1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-portfolio.git
   cd react-portfolio
step-2: Install dependencies:
npm install

step--3: Create a .env file for your EmailJS credentials (optional, if you want to keep them secret):
Copy code
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_USER_ID=your_user_id


step-4:Start the development server:
npm start

📤 Deploy
You can deploy the site using:

GitHub Pages

Netlify

Vercel



Feel free to contribute or reach out with suggestions!
