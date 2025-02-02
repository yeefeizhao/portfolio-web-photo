import React, { useEffect } from "react";
import "./Gallery.css";

//spikeball
import spike1 from "./photos/resized/ZVE04273.jpg";
import spike2 from "./photos/resized/ZVE04315.jpg";
import spike3 from "./photos/resized/ZVE04334.jpg";
import spike4 from "./photos/resized/ZVE04376.jpg";

//pca field day
import field1 from "./photos/resized/ZVE04583.jpg";
import field2 from "./photos/resized/ZVE04514.jpg";
import field3 from "./photos/resized/ZVE04993.jpg";
import field4 from "./photos/resized/ZVE05029.jpg";

//Yanlai Dance @ Erie Playhouse
import dance1 from "./photos/resized/ZVE00632.jpg";
import dance2 from "./photos/resized/ZVE00617.jpg";

//Misc
import misc1 from "./photos/resized/ZVE00427.jpg";
import misc2 from "./photos/resized/ZVE00519.jpg";
import misc3 from "./photos/resized/ZVE00157.jpg";
import misc4 from "./photos/resized/ZVE00246.jpg";

function Gallery() {
    const spikeData = [
        {
            id: 1,
            src: spike1,
            alt: "spikeball",
            description: "Unbreakable Defense.",
        },
        {
            id: 2,
            src: spike2,
            alt: "spikeball",
            description: "Whammo.",
        },
        {
            id: 3,
            src: spike3,
            alt: "spikeball",
            description: "Pinpoint.",
        },
        {
            id: 4,
            src: spike4,
            alt: "spikeball",
            description: "Diving Save.",
        },
    ];

    const fieldData = [
        {
            id: 1,
            src: field1,
            alt: "pcafieldday",
            description: "Capture the Flag.",
        },
        {
            id: 2,
            src: field2,
            alt: "pcafieldday",
            description: "Sponge Race.",
        },
        {
            id: 3,
            src: field3,
            alt: "pcafieldday",
            description: "Father's Day Tug of War.",
        },
        {
            id: 4,
            src: field4,
            alt: "pcafieldday",
            description: "Water Balloon Fight.",
        },
    ];

    const danceData = [
        {
            id: 1,
            src: dance1,
            alt: "yanlaidanceacademy",
            description: "Legend of the White Snake.",
        },
        {
            id: 2,
            src: dance2,
            alt: "yanlaidanceacademy",
            description: "Traditional Chinese Dance.",
        },
    ];

    const miscData = [
        {
            id: 1,
            src: misc1,
            alt: "pcamiscday",
            description: "Date Night.",
        },
        {
            id: 2,
            src: misc2,
            alt: "pcamiscday",
            description: "Evening Walk.",
        },
        {
            id: 3,
            src: misc3,
            alt: "pcamiscday",
            description: "Fish Out of Water.",
        },
        {
            id: 4,
            src: misc4,
            alt: "pcafieldday",
            description: "Dusk.",
        },
    ];

    useEffect(() => {
        const photos = document.querySelectorAll(".photo-item");
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );
        photos.forEach((photo) => observer.observe(photo));
    }, []);


    return (
        <div className="gallery-container" id="gallery">
            <span className="gallery-main-title">Gallery</span>
            <div className="gallery-el el-left">
                <div className="gallery-title t-left">
                    <h1>PCA Field Day</h1>
                    <p>06.16.2024 • South Park, PA</p>
                    <div className="vl"></div>
                </div>
                {/* FIELD DAY */}
                <div className="gallery-photos">
                    <div className="photos-grid">
                        {fieldData.map((photo) => (
                            <div className="photo-item" key={photo.id}>
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    className="photo-image"
                                />
                                <div className="viewfinder">
                                    <div className="viewfinder-info">
                                        <p>{photo.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="gallery-el el-right">
                <div className="gallery-title t-right">
                    <h1>Spikeball Tournament</h1>
                    <p>Blueberry Hill Park, PA • 06.15.2024</p>
                    <div className="vl"></div>
                </div>
                {/* SPIKE */}
                <div className="gallery-photos">
                    <div className="photos-grid">
                        {spikeData.map((photo) => (
                            <div className="photo-item" key={photo.id}>
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    className="photo-image"
                                />
                                <div className="viewfinder">
                                    <div className="viewfinder-info">
                                        <p>{photo.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="gallery-el el-left">
                <div className="gallery-title t-left">
                    <h1>Yanlai Dance Academy</h1>
                    <p>03.22.2024 • Erie Playhouse, PA</p>
                    <div className="vl"></div>
                </div>
                {/* DANCE */}
                <div className="gallery-photos">
                    <div className="photos-grid">
                        {danceData.map((photo) => (
                            <div className="photo-item" key={photo.id}>
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    className="photo-image"
                                />
                                <div className="viewfinder">
                                    <div className="viewfinder-info">
                                        <p>{photo.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="gallery-el el-right">
                <div className="gallery-title t-right">
                    <h1>Miscellaneous</h1>
                    <p>NYC & PGH • 2024</p>
                    <div className="vl"></div>
                </div>
                {/* MISC */}
                <div className="gallery-photos">
                    <div className="photos-grid">
                        {miscData.map((photo) => (
                            <div className="photo-item" key={photo.id}>
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    className="photo-image"
                                />
                                <div className="viewfinder">
                                    <div className="viewfinder-info">
                                        <p>{photo.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
