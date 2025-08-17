const INFO = {
    main: {
        title: "Reactfolio by indumathi",
        name: "Indumathi Jami",
        email: "jamiindumathi02@gmail.com",
        logo: "../logo.png",
    },

    socials: {
        github: "https://github.com/Indumathi02-jami/",
        linkedin: "https://www.linkedin.com/feed/",
        instagram: "https://instagram.com/",
    },

    homepage: {
        title: "Full-stack web developer",
        description:
            "I am a frontend developer with expertise in React.js. I have experience in building scalable and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.",
    },

    about: {
        title: "I’m Indumathi Jami. I live in Andhra Pradesh, India, where I design the future.",
        description:
            "I've worked on a basic and medium level projects over the past 2 years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
    },

    projects: [
    {
        title: "Amazon Clone",
        description:
            "A fully responsive Amazon Clone built using HTML, CSS, and JavaScript. This project replicates the core features of the Amazon homepage, including product listings, navigation bar, and a shopping cart. It demonstrates strong skills in layout design, DOM manipulation, and responsive web development.",
        logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
        linkText: "View Project",
        link: "https://indumathi02-jami.github.io/Amazon-clone-using-html-CSS-JS/#",
    },

    
    {
        title: "E-commerce Website",
        description:
            "A fully responsive E-commerce website built with React.js. This project features a modern user interface, product listings, and a shopping cart, all optimized for various screen sizes. The application focuses on frontend development and does not include a backend, making it ideal for showcasing React skills and responsive design.",
        logo:"https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
        linkText: "View Project",
        link: "https://github.com/Indumathi02-jami/e-commerce-react",
    },

    {
            title: "Python mini-projects",
            description:
                "A collection of Python mini-projects including Hangman Game, Address Validation, Bank Management, Cafe Management, QR Code Generator, Task Management, Quiz Application, and Shopping Cart. Each project demonstrates practical problem-solving and Python programming skills.",
            logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
            linkText: "View Project",
            link: "https://github.com/Indumathi02-jami/PythonMiniProjects",
        },

        {
            title: "JavaScript mini-projects",
            description:
                "A collection of JavaScript mini-projects including Age Calculator, Background Video, Dark & Light Mode, Number to Roman Converter, Quiz, Restaurant AI, Calculator, Image Slider, Mini Calendar, Music Webpage, Notes App, Popup, and Stopwatch. These projects showcase practical JavaScript skills and creative UI solutions.",
            logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
            linkText: "View Project",
            link: "https://github.com/Indumathi02-jami/Simple_JS_Projrcts",
        },

        {
            title: "PortFolio",
            description:
                "A personal portfolio website built using React.js to showcase my projects, skills, and experience. The site features a modern, responsive design and easy navigation, allowing visitors to explore my work and connect with me. This project highlights my frontend development skills and attention to user experience.",
            logo: process.env.PUBLIC_URL + "/OIP.jpeg",
            linkText: "View Project",
            link: "https://github.com/Indumathi02-jami/FURTURE_FS_01",
        },
    ],

    skillsData: {
        intro: "Here are some of the technologies and tools I work with:",
        skills: [
            {
                title: "Frontend",
                items: [
                    { title: "React", icon: process.env.PUBLIC_URL + "/OIP.jpeg" },
                    { title: "JavaScript", icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png" },
                ],
            },
            {
                title: "Backend",
                items: [
                    { title: "Node.js", icon: process.env.PUBLIC_URL + "/nodejs.png" },
                    { title: "SQL", icon: process.env.PUBLIC_URL + "/542135.jpg" },
                ],
            },
            {
                title: "Tools",
                items: [
                    { title: "Git", icon: process.env.PUBLIC_URL + "/git.png" },
                    { title: "Figma", icon: process.env.PUBLIC_URL + "/figma.png" },
                ],
            }
        ],
    },
};

export default INFO;