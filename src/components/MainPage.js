import React, { useEffect } from "react";
import profileImage from "../util/profile2.jpg";
import demoVideo from "../util/시연영상.mp4";
import atmain from "../util/atlascraft_main.png";
import atedit from "../util/atlascraft_main.png";
import gameimg from "../util/ilovecursor_full.png"
import elderask from "../util/elderask.png"
import { ReactTyped as Typed } from 'react-typed';

const MainPage = () => {
    useEffect(() => {
        const handleScroll = (event) => {
            event.preventDefault();
            const deltaY = event.deltaY;
            const sections = document.querySelectorAll(".section");
            const currentSectionIndex = [...sections].findIndex(
                (section) => section.getBoundingClientRect().top >= 0
            );

            // Find the index of the last section
            const lastSectionIndex = sections.length - 1;

            // Prevent scrolling past the last section
            if (currentSectionIndex === lastSectionIndex) {
                if (deltaY > 0) {
                    // If scrolling down and on the last section, do nothing
                    return;
                }
            }

            if (deltaY > 0 && currentSectionIndex < lastSectionIndex) {
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
                <h1 className="section-title">소개</h1>
                <div className="intro-content">
                    <img src={profileImage} className="profile-img2" alt="Profile" />
                    <div className="text-content">
                        <div className="self-introduction">
                            <Typed strings={["끊임없이 발전해 나아가자!!!", "포기하지말고 도전하자!!!", "뒤쳐지지 말자!!!"]} typeSpeed={30} backSpeed={30} loop />
                            <p>- Korean Advanced Preparatory Academy 졸업 (2014.03 - 2017.06)</p>
                            <p>- Stony Brook University 졸업 (2017.08 - 2023.08)</p>
                            <p>- KT AIVLE SCHOOL 5기 수료 (2024.02 - 2024.08)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section Skills" id="Skills">
                <h1 className="section-title">Skills</h1>
                <div className="skills-container">
                    <div className="card frontend">
                        <h2 className="card-title">Frontend</h2>
                        <ul>
                            <li>React</li>
                            <li>Django</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                    <div className="card backend">
                        <h2 className="card-title">Backend</h2>
                        <ul>
                            <li>Express</li>
                            <li>Spring Boot</li>
                            <h2 className="card-title">DataBase</h2>
                            <li>MongoDB</li>
                            <li>MySQL</li>
                        </ul>
                    </div>
                    <div className="card data-science">
                        <h2 className="card-title">Data Science</h2>
                        <ul>
                            <li>*Python을 활용*</li>
                            <li>데이터 시각화</li>
                            <li>데이터 분석</li>
                            <li>머신러닝</li>
                            <li>딥러닝</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="section Projects" id="Projects">
                <h1 className="section-title">DSTJ</h1>
                <div className="project-content">
                    <video className="project-video" controls>
                        <source src={demoVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="project-description">
                        <p className="description">
                            학원과 같은 사업체에서 활용 가능한 ERP 개발. 또한 인공지능을 활용한 얼굴인식 출석체크와 개인 리포트를 만들어주는 웹 서비스.
                        </p>
                        <p className="tech">
                            <strong>기술:</strong> React, Spring Boot, Face-api (얼굴인식), AWS, MySQL
                        </p>
                        <a href="https://github.com/Modem924/frontend" className="github-link" target="_blank" rel="noopener noreferrer">
                            깃허브 링크
                        </a><br></br>
                        <a href="http://fasthrm.s3-website.ap-northeast-2.amazonaws.com/" className="github-link" target="_blank" rel="noopener noreferrer">
                            웹 URL
                        </a>
                    </div>
                </div>
            </div>
            <div className="section Projects" id="Projects">
                <h1 className="section-title">AtlasCraft</h1>
                <div className="project-content">
                    <img src={atmain} className="project-img" alt="DSTJ" />
                    <div className="project-description">
                        <p className="description">
                            지도의 편집을 가능하게 해주고 저장을 할 수 있도록 하게 해주는 웹서비스. 사용자는 로그인하여 본인이 제작 혹은 수정한 지도를 업로드하여 공유할 수 있고 다른 사람들과 공유, 댓글, 좋아요 기능을 사용할 수 있다.
                        </p>
                        <p className="tech">
                            <strong>기술:</strong> React, Express, Cypress(front-end testing), Render, MongoDB
                        </p>
                        <a href="https://github.com/AtlasCraft" className="github-link" target="_blank" rel="noopener noreferrer">
                            깃허브 링크
                        </a><br></br>
                        <a href="https://atlascraft.onrender.com/" className="github-link" target="_blank" rel="noopener noreferrer">
                            웹 URL
                        </a>
                    </div>
                </div>
            </div>
            <div className="section Projects" id="Projects">
                <h1 className="section-title">I LOVE CURSOR!!!</h1>
                <div className="project-content">
                    <img src={gameimg} className="project-img" alt="DSTJ" />
                    <div className="project-description">
                        <p className="description">
                            간단한 웹 2D 게임 입니다. 스페이스 혹은 W 키를 이용해서 점프를 할 수 있고 점프 방향은 커서를 따라가기에 커서를 사용해 플레이어의 위치를 움직여야 합니다.
                        </p>
                        <p className="tech">
                            <strong>기술:</strong> Typescript, WebGLShader, Firebase for hosting
                            <br></br>
                            <strong>툴:</strong> Piskel, Tiled, Sound maker tools
                        </p>
                        <a href="https://github.com/Modem924/ILoveCursor" className="github-link" target="_blank" rel="noopener noreferrer">
                            깃허브 링크
                        </a><br></br>
                        <a href="https://lovecursor-2daf0.web.app/" className="github-link" target="_blank" rel="noopener noreferrer">
                            게임 URL
                        </a>
                    </div>
                </div>
            </div>
            <div className="section Projects" id="Elderask">
                <h1 className="section-title">Elderask</h1>
                <div className="project-content">
                    <img src={elderask} className="project-img" alt="Elderask" />
                    <div className="project-description">
                        <p className="description">
                            코로나 시절 때 만들 었던 마스크 수량 알림이 및 배달 서비스를 제공하는 마스크 어플 입니다. 마스크 수량 부족 문제에 가장 큰 타격을 입은 노년층을 위하여 앱을 통해 마스크 수량을 확인하고 구매하기 쉽도록 하여 주기 위한 웹앱 서비스 입니다.
                        </p>
                        <p className="tech">
                            <strong>기술:</strong> Html, Css, Figma
                        </p>
                        <a href="https://github.com/Modem924/Elderask__Mask-for-the-Elders" className="github-link" target="_blank" rel="noopener noreferrer">
                            깃허브 링크
                        </a>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Jersey+10&family=Nanum+Pen+Script&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Gugi&family=Jersey+10&family=Nanum+Pen+Script&display=swap');
                .nanum-pen-script-regular {
                    font-family: "Nanum Pen Script", cursive;
                    font-weight: 400;
                    font-style: normal;
                }
                .gugi-regular {
                    font-family: "Gugi", sans-serif;
                    font-weight: 400;
                    font-style: normal;
                }

                .main_container {
                    flex: 1;
                    margin-left: 25%;
                    overflow-y: auto;
                    scroll-snap-type: y mandatory;
                    height: 100vh; /* Add this to ensure full viewport height */
                }

                .section {
                    height: 100vh;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    scroll-snap-align: start;
                    font-size: 60px;
                    background-color: #ffffff;
                    border-bottom: 1px solid #ddd;
                }

                .section-title {
                    position: absolute;
                    top: 15%;
                    left: 0;
                    right: 0;
                    text-align: center;
                    font-family: "Gugi", sans-serif;
                    font-size: 60px;
                    margin: 0;
                }

                .Intro {
                    background-color: #f8b400;
                    padding: 20px;
                    box-sizing: border-box;
                }

                .intro-content {
                    display: flex;
                    align-items: center;
                    gap: 50px;
                }

                .profile-img2 {
                    width: 300px;
                    height: auto;
                    border-radius: 10px;
                    object-fit: cover;
                }

                .text-content {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .self-introduction {
                    font-family: "Nanum Pen Script", cursive;
                    background-color: rgba(255, 255, 255, 0.8);
                    padding: 20px;
                    border-radius: 10px;
                    font-size: 30px;
                    line-height: 1.5;
                    max-width: 500px;
                }

                .Skills {
                    background-color: #28a745;
                    padding: 20px;
                    box-sizing: border-box;
                }

                .skills-container {
                    display: flex;
                    justify-content: space-around;
                    align-items: flex-start;
                    gap: 30px;
                    flex-wrap: wrap;
                }

                .card {
                    background-color: #ffffff;
                    border: 1px solid #ddd;
                    border-radius: 10px;
                    padding: 20px;
                    width: 250px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    text-align: center;
                }

                .card-title {
                    font-family: "Gugi", sans-serif;
                    font-size: 2.3rem;
                    margin-bottom: 10px;
                }

                .card ul {
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                }

                .card ul li {
                    font-family: "Nanum Pen Script", cursive;
                    font-size: 2rem;
                    margin-bottom: 10px;
                }

                .Projects {
                    background-color: #17a2b8;
                }

                .project-content {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 20px;
                }

                .project-img {
                    width: 700px;
                    height: auto;
                    border-radius: 10px;
                    object-fit: cover;
                    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2) 80%, rgba(0, 0, 0, 0) 100%);
                    background-position: left;
                    background-size: cover;
                }

                .project-video {
                    width: 700px;
                    height: auto;
                    border-radius: 10px;
                }

                .project-description {
                    max-width: 600px;
                    text-align: left;
                    font-family: "Nanum Pen Script", cursive;
                    font-size: 1.2rem;
                    color: #fff;
                }

                .project-title {
                    font-family: "Gugi", sans-serif;
                    font-size: 2.5rem;
                    margin-bottom: 10px;
                }

                .description {
                    margin-bottom: 20px;
                    font-size: 30px;
                }

                .tech {
                    margin-bottom: 20px;
                    font-size: 25px;
                }

                .github-link {
                    font-size: 25px;
                    color: #eb2fa6;
                    text-decoration: underline;
                }

                .github-link:hover {
                    color: #fff;
                }
            `}</style>
        </div>
    );
};

export default MainPage;
