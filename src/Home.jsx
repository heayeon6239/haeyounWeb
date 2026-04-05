import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Home.css";

export default function Home() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 부드럽게 쓰윽 올라가게 함
        });
    };

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

    // 언어
    const lans = [
        { name: 'HTML', src: './img/html-icon.png' },
        { name: 'CSS', src: './img/css-icon.png' },
        { name: 'Java Script', src: './img/JavaScript-icon.png' },
        { name: 'React', src: './img/ReactVite-icon.svg' },
        { name: 'SpringBoot', src: './img/SpringBoot-icon.png' },
        { name: 'JAVA', src: './img/JAVA-icon.png' },
        { name: 'MySQL', src: './img/MySQL-icon.svg' },
        { name: 'Python', src: './img/python-icon.webp' }
    ]

    // 도구, 환경
    const icons = [
        { name: 'MyBatis', src: './img/MyBatis-icon.png' },
        { name: 'Jupyter', src: './img/Jupyter-icon.png' },
        { name: 'Pandas', src: './img/Pandas-icon.png' },
        { name: 'ApacheTomcat', src: './img/ApacheTomcat-icon.png' },
        { name: 'Lombok', src: './img/Lombok-icon.png' },
        { name: 'Eclipse', src: './img/Eclipse-icon.png' },
        { name: 'Gradle', src: './img/Gradle-icon.png' },
        { name: 'VisualStudio', src: './img/VisualStudio-icon.png' },
        { name: 'Anaconda', src: './img/Anaconda-icon.jpg' },
        { name: 'Matplotlib', src: './img/Matplotlib-icon.svg' },
        { name: 'Seaborn', src: './img/Seaborn-icon.png' },

    ]

    // 디자인
    const designs = [
        { name: 'Illustrator', src: './img/Illustrator-icon.png' },
        { name: 'Photoshop', src: './img/Photoshop-icon.png' },
        { name: 'figma', src: './img/figma-icon.png' }
    ]

    // 카테고리 클릭
    const [type, setType] = useState(0);

    const show = () => {
        if (type === 0) {
            return { title: '언어', tool: lans }
        } else if (type === 1) {
            return { title: '도구 및 환경', tool: icons }
        }
        else {
            return { title: '디자인', tool: designs }
        }
    }

    const now = show();

    return (
        <div className="container">

            {/* 타이틀*/}
            <section className="section00">
                <h1 className="title">Design Sensibility,<br />Driven by Code.</h1>
                <p className="comment">디자인의 감각을 코드로 구현하는 개발자 정해연입니다.</p>
            </section>

            {/* 프로필 섹션 */}
            <section className="section01" id="profile">
                <div className="inner">
                    <h2 className="section-title" style={{ color: "#fefefe" }}>프로필</h2>

                    <div className="profile_main_card">

                        {/* 상단 프로필 헤더 */}
                        <div className="card_header">
                            <div className="profile_img">
                                <img src="./img/profile_img.png" alt="프로필사진" />
                            </div>
                            <h4>정해연</h4>
                            <p>2000.11.24</p>
                            <p>heayeon1124@naver.com</p>
                            <p className="description">"UXUI디자인과 풀스텍개발을 할 수 있습니다."</p>
                        </div>

                        {/* 헤더 구분선 */}
                        <div className="card_divider" />

                        {/* 타임라인 2열 */}
                        <div className="card_bottom_grid">

                            {/* 학력 */}
                            <div className="tl_group">
                                <div className="tl_group_header">
                                    {/* <div className="tl_group_line" /> */}
                                    <span className="tag_label">학력</span>
                                    <div className="tl_group_line" />
                                </div>

                                <div className="item tl_item">
                                    <div className="tl_dot_col">
                                        <div className="tl_dot" />
                                        <div className="tl_connector" />
                                    </div>
                                    <div className="tl_content">
                                        <span className="date">2020.03 - 2026.02</span>
                                        <p className="main_txt">건국대학교 리빙디자인학과</p>
                                        <p className="sub_txt">학사 졸업</p>
                                    </div>
                                </div>

                                <div className="item tl_item">
                                    <div className="tl_dot_col">
                                        <div className="tl_dot" />
                                    </div>
                                    <div className="tl_content">
                                        <span className="date">2016.03 - 2019.02</span>
                                        <p className="main_txt">서울여자고등학교</p>
                                        <p className="sub_txt">졸업</p>
                                    </div>
                                </div>
                            </div>

                            {/* 교육 */}
                            <div className="tl_group">
                                <div className="tl_group_header">
                                    {/* <div className="tl_group_line" /> */}
                                    <span className="tag_label">교육</span>
                                    <div className="tl_group_line" />
                                </div>

                                <div className="item tl_item">
                                    <div className="tl_dot_col">
                                        <div className="tl_dot" />
                                    </div>
                                    <div className="tl_content">
                                        <span className="date">2025.08 - 2026.04</span>
                                        <p className="main_txt">그린컴퓨터아카데미</p>
                                        <p className="sub_txt">
                                            UIUX프론트,백엔드(Java,Spring),Data분석(Python)<br />
                                            SW개발자 (참여기업프로젝트 참여) 양성과정
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* 기술 스택 및 도구 */}
            <section className="section03" id="tool">
                <div className="inner">
                    <h2 className="section-title">기술 스택 및 도구</h2>
                    <h5 className="section_comment">아이디어를 현실로 구현하는 <span>기술</span>과 <span>도구</span>들입니다.</h5>
                    <div className="select">
                        {/* 활성화된 위치를 표시할 진짜 '알약' */}
                        <div className={`slider pos-${type}`}></div>
                        <button type="button" className={type === 0 ? 'active' : ''} onClick={() => setType(0)}>언어</button>
                        <button type="button" className={type === 1 ? 'active' : ''} onClick={() => setType(1)}>도구 및 환경</button>
                        <button type="button" className={type === 2 ? 'active' : ''} onClick={() => setType(2)}>디자인</button>
                    </div>
                    {/* 전체 기술 스택 영역 */}
                    <div className="stack_grid">
                        <div className="tool_box" key={type}>
                            <div className="icon_list">
                                {now.tool.map((n, index) => (
                                    <div className="stack_item" key={index}>
                                        <img src={n.src} alt={n.name} />
                                        <p>{n.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 프로젝트 */}
            <section className="section02" id="project">
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
                                Java 기반의 Spring Boot 프레임워크와 MyBatis(Persistence Framework)를 활용한 백엔드 서버를 구축하고 
                                MySQL DBMS를 실시간으로 연동한 렌터카 관리 시스템을 Cloudtype에 배포
                            </p>
                            <Link to={'/charang'} className="detailPage" onClick={scrollToTop}>
                                더 알아보기<i className="bi bi-arrow-right-short"></i>
                            </Link>
                        </div>
                    </div>
                    {/* OTT 프로젝트 */}
                    <div className="card02">
                        <div className="project-info">
                            <h3>OTT 프로젝트</h3>
                            <p>
                                React와 Context API를 활용해 OTT 웹 서비스의 메인 및 콘텐츠 페이지를 구현하고,
                                표준 Fetch API를 활용하여 TMDB(Open Movie Database) API 데이터를 실시간으로 연동해
                                영화 · 드라마 데이터를 동적으로 표시하여 GitHub Pages에 배포
                            </p>
                            <Link to={'/ott'} className="detailPage" onClick={scrollToTop}>
                                더 알아보기<i className="bi bi-arrow-right-short"></i>
                            </Link>
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
                                HTML5, CSS3, JavaScript를 활용해 영화관 메인 페이지와 예매 화면을
                                구현하고, 시멘틱 마크업과 CSS 레이아웃으로 웹 표준에 맞게 구조를 설계하여
                                실제 영화 예매 사이트와 유사한 사용자 경험을 제공한 프로젝트
                            </p>
                            <Link to={'/mega'} className="detailPage" onClick={scrollToTop}>
                                더 알아보기<i className="bi bi-arrow-right-short"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}