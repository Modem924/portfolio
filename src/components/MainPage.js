import React, { useEffect } from "react";

const MainPage = () => {
    useEffect(() => {
        const handleScroll = (event) => {
            event.preventDefault();
            const deltaY = event.deltaY;
            const sections = document.querySelectorAll(".section");
            const currentSectionIndex = [...sections].findIndex(
                (section) => section.getBoundingClientRect().top >= 0
            );

            if (deltaY > 0 && currentSectionIndex < sections.length - 1) {
                sections[currentSectionIndex + 1].scrollIntoView({ behavior: "smooth" });
            } else if (deltaY < 0 && currentSectionIndex > 0) {
                sections[currentSectionIndex - 1].scrollIntoView({ behavior: "smooth" });
            }
        };

        window.addEventListener("wheel", handleScroll, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, []);

    return (
        <div className="main_container">
            <div className="section Intro" id="Intro">
                <h1 className = "Intro_header">송동하의 포트폴리오</h1>
                <p></p>
            </div>
            <div className="section Skills" id="Skills">
                <h3>Skills</h3>
            </div>
            <div className="section Projects" id="Projects">
                <h3>Projects</h3>
            </div>
            <style jsx>{`
                .main_container {
                    height: 100vh;
                    overflow-y: auto;
                    scroll-snap-type: y mandatory;
                }

                .section {
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    scroll-snap-align: start;
                    font-size: 2rem;
                    background-color: white;
                    border-bottom: 1px solid #ddd;
                }

                .Intro {
                    background-color: #f8b400;
                }

                .Intro_header{

                }

                .Skills {
                    background-color: #28a745;
                }

                .Projects {
                    background-color: #17a2b8;
                }
            `}</style>
        </div>
    );
};

export default MainPage;
