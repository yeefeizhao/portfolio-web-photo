import React, { useEffect, useState } from "react";
import "./Home.css";
import WaveAnimation from "./WaveAnimation";

function Home() {
    const [currentWord, setCurrentWord] = useState("student");

    useEffect(() => {
        const words = ["photographer", "developer", "spikeballer", "student"];
        let index = 0;

        const interval = setInterval(() => {
            setCurrentWord(words[index]);
            index = (index + 1) % words.length;
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const handleNavigation = (e, sectionId) => {
        const section = document.getElementById(sectionId);
        e.preventDefault();
        section && section.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(sectionId, sectionId, "/");
    };

    return (
        <div className="home-container" id="home">
            <WaveAnimation />
            <div className="border">
                <div className="nav-left">
                    <button
                        className="nav-button"
                        onClick={(e) => handleNavigation(e, "home")}
                    >
                        Home
                    </button>
                    <button
                        className="nav-button"
                        onClick={(e) => handleNavigation(e, "website")}
                    >
                        Website
                    </button>
                </div>
                <div className="logo-container">
                    <svg
                        width="100"
                        height="50"
                        viewBox="0 0 100 50"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <text
                            x="30"
                            y="40"
                            fontSize="40"
                            fontFamily="Arial"
                            fill="#000"
                        >
                            YZ
                        </text>
                    </svg>
                </div>
                <div className="nav-right">
                    <button
                        className="nav-button"
                        onClick={(e) => handleNavigation(e, "gallery")}
                    >
                        Photo
                    </button>
                    <button
                        className="nav-button"
                        onClick={(e) => handleNavigation(e, "about")}
                    >
                        About
                    </button>
                </div>
                <div className="title-container">
                    <h1>Yi-Fei Zhao</h1>
                    <h1 style={{ display: "flex" }}>
                        is a&nbsp;
                        <span className="dynamic-word">{currentWord}</span>
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Home;
