import React from "react";
import { Helmet } from "react-helmet"; // install with: npm install react-helmet
import INFO from "../data/user";
import NavBar from "../components/common/navBar";

import "./styles/skills.css";

const Skills = () => {
  const { skillsData } = INFO;

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Skills | Indumathi Jami</title>
        <meta
          name="description"
          content="Explore the technical skills of Indumathi Jami, including React, Angular, Web Development, and more."
        />
        <meta name="keywords" content="React, Angular, JavaScript, Web Development, Skills, Portfolio" />
      </Helmet>

      {/* ✅ Semantic HTML */}
      <NavBar active="skills" />
      <main className="page-content">
        <section className="skills-section">
          <h1 className="skills-header">Skills</h1>

          {skillsData.intro && (
            <p className="skills-intro">{skillsData.intro}</p>
          )}

          <div className="skills-cards-container">
            {skillsData.skills.map((group) => (
              <article key={group.title} className="skills-card">
                <h2 className="skills-card-title">{group.title}</h2>

                <div className="skills-icons-row">
                  {group.items.map((item) => (
                    <div key={item.title} className="skills-icon-block">
                      <img
                        src={item.icon}
                        alt={`Icon representing ${item.title}`} // ✅ descriptive alt text
                        className="skills-icon-img"
                      />
                      <span className="skills-icon-label">{item.title}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

    </>
  );
};

export default Skills;
