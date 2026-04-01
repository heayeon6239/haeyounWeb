import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
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
        { name: 'Anaconda', src: './img/Anaconda-icon.png' },
        { name: 'Matplotlib', src: './img/Matplotlib-icon.png' },
        { name: 'Seaborn', src: './img/Seaborn-icon.png' },

    ]

    // 디자인
    const designs = [
        { name: 'Illustrator', src: './img/Illustrator-icon.png' },
        { name: 'Photoshop', src: './img/Photoshop-icon.png' },
        // { name: 'Indesign', src: './img/Indesign-icon.png' },
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
                        <div className="card_header">
                            <div className="profile_img">
                                <img src="/img/profile_img.png" alt="프로필사진"></img>
                            </div>
                            <h4>정해연</h4>
                            <p>2000.11.24</p>
                            <p>heayeon1124@naver.com</p>
                            <p className="description">"UXUI디자인과 풀스텍개발을 할 수 있습니다."</p>
                        </div>
                        <div className="card_bottom_grid">
                            <div className="info_box">
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
                            <div className="info_box">
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
                                Spring Boot와 MyBatis 기반의 REST API를 구축하여
                                MySQL 데이터를 실시간으로 연동한 렌터카 관리 시스템을 Cloudtype에 배포
                            </p>
                            <Link to={'/Detail'} className="detailPage">
                                더 알아보기<i className="bi bi-arrow-right-short"></i>
                            </Link>
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
                            <Link to={'/Detail'} className="detailPage">
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
                                조별 프로젝트를 통해 OTT 웹 서비스의 메인 화면 및 콘텐츠 페이지를 기획하고,
                                HTML5 시멘틱 마크업을 활용하여 전체 페이지 구조를 설계
                            </p>
                            <Link to={'/Detail'} className="detailPage">
                                더 알아보기<i className="bi bi-arrow-right-short"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}