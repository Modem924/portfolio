import React, { useEffect } from "react";
import profileImage from "../util/profile.jpg";
import MainPage from './MainPage';

const Navigationbar = () => {
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

    const menuData = ["Intro", "Skills", "Projects"];

    const handleNavClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="layout">
            <div className="container">
                <nav className="nav">
                    <img src={profileImage} alt="Profile" className="profile-img" />
                    {menuData.map((data, idx) => (
                        <button
                            key={idx}
                            className="nav-link"
                            onClick={() => handleNavClick(data)}
                        >
                            {data}
                        </button>
                    ))}
                    <div className="info-box">
                        <p className="contact-title">Contact Me</p>
                        <div className="info-text">
                            <p>송동하 (Dongha Song)</p>
                            <p>010-5745-7173</p>
                            <p>gch04912@gmail.com</p>
                            <p className="github-title">
                                <a href="https://github.com/Modem924" target="_blank" rel="noopener noreferrer">
                                    Github
                                </a>
                            </p>
                        </div>
                    </div>
                </nav>
            </div>
            <MainPage />
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');

                .layout {
                    display: flex;
                    height: 100vh;
                }

                .container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 25%;
                    background-color: #f4f4f4;
                    padding-top: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
                    z-index: 1000;
                }

                .nav {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .profile-img {
                    width: 300px;
                    height: 300px;
                    border-radius: 50%;
                    object-fit: cover;
                    margin-bottom: 20px;
                }

                .info-box {
                    width: 80%;
                    margin-top: 20px;
                    padding: 20px;
                    border: 2px solid #0F1447;
                    border-radius: 15px;
                    background-color: transparent;
                    color: #0F1447;
                    text-align: center;
                }

                .contact-title {
                    font-size: 25px;
                    font-weight: bold;
                    margin-top: 0px;
                    margin-bottom: 15px;
                }

                .info-text p {
                    margin: 5px 0;
                    font-size: 20px;
                }

                .nav-link {
                    font-family: 'Jersey 10', sans-serif;
                    display: block;
                    width: 100%;
                    text-align: center;
                    margin: 10px 0;
                    padding: 10px;
                    background-color: #0F1447;
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                    transition: background-color 0.3s ease;
                    font-size: 40px;
                    cursor: pointer;
                }

                .nav-link:hover {
                    background-color: #EB2FA6;
                }
            `}</style>
        </div>
    );
};

export default Navigationbar;
