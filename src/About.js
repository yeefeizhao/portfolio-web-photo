import React from "react";
import "./About.css"; // Separate CSS file for styling
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"; // Social icons
import headshot from "./photos/headshot.jpg";

const About = () => {
    return (
        <div className="about-container" id="about">
            <div className="about-content">
                <img src={headshot} alt="Yi-Fei Zhao" className="about-photo" />
                <p className="about-description">
                    {/* Replace with your description */}
                    Hello! I'm Yi-Fei Zhao, a passionate photographer, student,
                    and spikeballer. I love capturing moments and creating
                    meaningful experiences through code.
                </p>
                <div className="about-contact-info">
                    <div className="about-social-icons">
                        <a
                            href="https://github.com/yeefeizhao"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub size={30} />
                        </a>
                        <a
                            href="https://linkedin.com/in/yi-fei-zhao"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin size={30} />
                        </a>
                        <a
                            href="https://instagram.com/yfz.raw"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram size={30} />
                        </a>
                    </div>
                    <p className="about-email">
                        <a href="mailto:yi-fei.zhao@stern.nyu.edu">
                            yi-fei.zhao@stern.nyu.edu
                        </a>
                    </p>
                </div>
                <p className="about-rights">
                    © 2024 Yi-Fei Zhao. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default About;
