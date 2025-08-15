import React from "react";
import INFO from "../data/user";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import "./styles/skills.css"; // Create this file for custom styles if needed

const Skills = () => {
    const { skillsData } = INFO;

    return (
        <React.Fragment>
            <NavBar active="skills" />
            <div className="page-content">
                <div className="skills-section">
                    <h2 className="skills-header">Skills</h2>
                    {skillsData.intro && (
                        <p className="skills-intro">{skillsData.intro}</p>
                    )}
                    {skillsData.skills.map((group) => (
                        <div key={group.title} className="skills-group">
                            <h3>{group.title}</h3>
                            <div className="skills-items">
                                {group.items.map((item) => (
                                    <div key={item.title} className="skill-item">
										<img
                                            src={item.icon}
                                            alt={item.title}
                                            className="skill-icon"
                                        />
                                        <span>{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <Footer />
            </div>
        </React.Fragment>
    );
};

export default Skills;