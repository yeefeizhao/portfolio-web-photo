import React from "react";
import "./Website.css";
import donamus from "./photos/donamus.png";
import empowered from "./photos/empowered.png";
import healthhero from "./photos/healthhero.png";

const Website = () => {
    const websitesData = [
        {
            id: 3,
            src: empowered,
            title: "EmpowerED Consulting",
            description: "Official club website for EmpowerED Consulting based out of NYU",
            tech: "React, CSS, firebase, nodemailer",
            link: "https://www.empowerednyu.org/",
        },
        {
            id: 2,
            src: donamus,
            title: "Project Donamus",
            description:
                "Making donations more accessible by centralizing donation requests into one site",
            tech: "React, CSS, firebase",
            link: "https://pantry-9ed2a.web.app/",
        },
        {
            id: 3,
            src: healthhero,
            title: "HealthCare Hero",
            description:
                "Providing diagnostic advice using user provided symptoms",
            tech: "HTML, CSS, JS, PHP",
            link: "https://healthcarehero.web.app/",
        },
    ];

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="websites-container" id="website">
            <div className="scrolling-title">
                <div className="title-track">
                    <span>PORTFOLIO</span>
                    <span>PORTFOLIO</span>
                    <span>PORTFOLIO</span>
                    <span>PORTFOLIO</span>
                    <span>PORTFOLIO</span>
                    <span>PORTFOLIO</span>
                    <span>PORTFOLIO</span>
                </div>
            </div>
            <div className="projects-container">
                {websitesData.map((website) => (
                    <div
                        className="project-el"
                        onClick={() => openInNewTab(website.link)}
                        key={website.id}
                    >
                        <div className="project-image">
                            <img src={website.src} alt={website.title} />
                        </div>
                        <div className="project-title"><h3>{website.title}</h3></div>
                        <div className="project-description">
                            <p>{website.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Website;
