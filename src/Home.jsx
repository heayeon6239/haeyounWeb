import { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // 다크모드 스위칭 함수
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    // body 태그에 dark 클래스 적용/해제
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDarkMode]);

    // body 태그에 strawberry 클래스 적용/해제
    // useEffect(() => {
    //     if (isDarkMode) {
    //         // CSS에 작성하신 .strawberry 스타일을 불러오기 위해 이름을 맞춥니다.
    //         document.body.classList.add("strawberry");
    //     } else {
    //         document.body.classList.remove("strawberry");
    //     }
    // }, [isDarkMode]);

    return (
        <div className="container">
            {/* 헤더 */}
            <header className="header">
                <div className="logo">&lt; HAE YOUN / &gt;</div>
                <div className="navi">
                    <a href="#">Projects</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    {/* 다크모드 토글 스위치 */}
                    <button className="dark-toggle" onClick={toggleDarkMode}>
                        {isDarkMode ? (
                            <i className="bi bi-sun-fill"></i> // 해 아이콘
                        ) : (
                            <i className="bi bi-moon-fill"></i> // 달 아이콘
                        )}
                    </button>
                </div>
            </header>

            {/* 타이틀*/}
            <section className="section00">
                <h1 className="title">Design Sensibility,<br />Driven by Code.</h1>
                <p className="comment">디자인의 감각을 코드로 구현하는 개발자 정해연입니다.</p>
            </section>

            {/* 프로필 섹션 */}
            <section className="section01">
                <div className="inner">
                    <h2 className="section-title">프로필</h2>
                    <div className="profile_main_card">
                        <div className="card_header">
                            <div className="profile_img"></div>
                            <h4>정해연</h4>
                            <p>2000.11.24 / heayeon1124@naver.com</p>
                            <p className="description">"UXUI디자인과 풀스텍개발을 할 수 있습니다."</p>
                        </div>
                        <div className="card_bottom_grid">
                            <div className="info_box pain">
                                <span className="tag_label">학력</span>
                                <div className="item_list">
                                    <div className="item">
                                        <span className="date">2020.03 - 2026.02</span>
                                        <p>대학교 전공</p>
                                    </div>
                                    <div className="item">
                                        <span className="date">2016.03 - 2019.02</span>
                                        <p>고등학교</p>
                                    </div>
                                </div>
                            </div>
                            <div className="info_box needs">
                                <span className="tag_label">교육</span>
                                <div className="item_list">
                                    <div className="item">
                                        <span className="date">2025.08 - 2026.04</span>
                                        <p className="main_txt">그린컴퓨터아카데미</p>
                                        <p className="sub_txt">UIUX 프론트/백엔드 SW개발자 양성과정 (Java, Spring, React)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 기술 스택 및 도구 */}
            <section className="section03">
                <div className="inner">
                    <h2 className="section-title">기술 스택 및 도구</h2>

                    {/* 전체 기술 스택 영역 */}
                    <div className="stack_grid">

                        {/* 1. 프론트엔드 */}
                        <div className="tool_box">
                            <div className="cate_header">
                                <span className="cate_label">프론트엔드</span>
                            </div>

                            <div className="icon_list">
                                {/* React */}
                                <div className="stack_item">
                                    <img src="/img/react.png" alt="React" />
                                    <p>React</p>
                                </div>
                                {/* Vite */}
                                <div className="stack_item">
                                    <img src="/img/vite.png" alt="Vite" />
                                    <p>Vite</p>
                                </div>
                                {/* HTML5 */}
                                <div className="stack_item">
                                    <img src="/img/html5.png" alt="HTML5" />
                                    <p>HTML5</p>
                                </div>
                                {/* CSS3 */}
                                <div className="stack_item">
                                    <img src="/img/css3.png" alt="CSS3" />
                                    <p>CSS3</p>
                                </div>
                                {/* JavaScript */}
                                <div className="stack_item">
                                    <img src="/img/javascript.png" alt="JavaScript" />
                                    <p>JavaScript</p>
                                </div>
                            </div>
                        </div>

                        {/* 2. 백엔드 */}
                        <div className="tool_box">
                            <div className="cate_header">
                                <span className="cate_label">백엔드</span>
                            </div>

                            <div className="icon_list">
                                {/* Java */}
                                <div className="stack_item">
                                    <img src="/img/java.png" alt="Java" />
                                    <p>Java</p>
                                </div>
                                {/* Spring Boot */}
                                <div className="stack_item">
                                    <img src="/img/springboot.png" alt="Spring Boot" />
                                    <p>Spring Boot</p>
                                </div>
                                {/* MyBatis */}
                                <div className="stack_item">
                                    <img src="/img/mybatis.png" alt="MyBatis" />
                                    <p>MyBatis</p>
                                </div>
                                {/* MySQL */}
                                <div className="stack_item">
                                    <img src="/img/mysql.png" alt="MySQL" />
                                    <p>MySQL</p>
                                </div>
                            </div>
                        </div>

                        {/* 3. 도구 및 협업 (예시) */}
                        <div className="tool_box">
                            <div className="cate_header">
                                <span className="cate_label">도구 및 디자인</span>
                            </div>

                            <div className="icon_list">
                                {/* Git */}
                                <div className="stack_item">
                                    <img src="/img/git.png" alt="Git" />
                                    <p>Git</p>
                                </div>
                                {/* Figma */}
                                <div className="stack_item">
                                    <img src="/img/figma.png" alt="Figma" />
                                    <p>Figma</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 프로젝트 */}
            <section className="section02">
                <div className="project">
                    <h1 className="section-title">프로젝트</h1>
                    {/* 렌트카 웹사이트 개발 */}
                    <div className="card01">
                        <div className="project-img">
                            <img className="charang" src="/img/charang3.png" alt="렌트카 프로젝트" />
                        </div>
                        <div className="project-info">
                            <h3>렌트카 웹사이트 개발</h3>
                            <p>조별 프로젝트로 와이어프레임 설계를 바탕으로 React(Vite) UI를 구현하고,
                                Spring Boot와 MyBatis 기반의 REST API를 구축하여
                                MySQL 데이터를 실시간으로 연동한 렌터카 관리 시스템을 Cloudtype에 배포
                            </p>
                            <span>
                                더 알아보기<i className="bi bi-arrow-right-short"></i>
                            </span>
                        </div>
                    </div>
                    {/* OTT 프로젝트 */}
                    <div className="card02">
                        <div className="project-info">
                            <h3>OTT 프로젝트</h3>
                            <p>
                                조별 프로젝트를 통해 OTT 웹 서비스의 메인 화면 및 콘텐츠 페이지를 기획하고,
                                HTML5 시멘틱 마크업을 활용하여 전체 페이지 구조를 설계
                            </p>
                            <span>
                                더 알아보기<i className="bi bi-arrow-right-short"></i>
                            </span>
                        </div>
                        <div className="project-img">
                            <img className="ott" src="/img/ott.png" alt="ott 프로젝트" />
                        </div>
                    </div>
                    {/* 영화관 프로젝트 */}
                    <div className="card03">
                        <div className="project-img">
                            <img className="movie" src="/img/movie.png" alt="영화관 프로젝트" />
                        </div>
                        <div className="project-info">
                            <h3>영화관 메인 및 <br /> 예매 웹페이지 구현</h3>
                            <p>
                                조별 프로젝트를 통해 OTT 웹 서비스의 메인 화면 및 콘텐츠 페이지를 기획하고,
                                HTML5 시멘틱 마크업을 활용하여 전체 페이지 구조를 설계
                            </p>
                            <span>
                                더 알아보기<i className="bi bi-arrow-right-short"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p>© 2026 JUNG HAE YOUN_PROFILE</p>
            </footer>
        </div>
    );
}