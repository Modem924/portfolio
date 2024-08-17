import React from "react";

const MainPage = () => {
    const OnClickMenu = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        let menuData = (e.target , HTMLAnchorElement).hash;
        const IdMatchedPage = document.querySelector(menuData);
        IdMatchedPage?.scrollIntoView({ behavior: "smooth" });
    };
    
    const menuData = ["소개", "기술", "프로젝트"];
    
    return (
        <>
            <nav>
                {menuData.map((data, idx) => (
                    <a href={`#${data}`} onClick={OnClickMenu} key={idx} style={{ marginRight: "10px", cursor: "pointer" }}>
                        {data}
                    </a>
                ))}
            </nav>
            
            {/* Sections to Scroll To */}
            <section id="소개" style={{ height: "100vh", padding: "20px", border: "1px solid black" }}>
                <h2>소개 Section</h2>
                <p>This is the 소개 section.</p>
            </section>
            
            <section id="기술" style={{ height: "100vh", padding: "20px", border: "1px solid black" }}>
                <h2>기술 Section</h2>
                <p>This is the 기술 section.</p>
            </section>
            
            <section id="프로젝트" style={{ height: "100vh", padding: "20px", border: "1px solid black" }}>
                <h2>프로젝트 Section</h2>
                <p>This is the 프로젝트 section.</p>
            </section>
        </>
    );
};

export default MainPage;
