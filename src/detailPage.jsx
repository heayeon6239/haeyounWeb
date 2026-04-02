import { useEffect, useState } from "react";
import "./detailPage.css";

export default function DetailPage() {

    // 도구, 환경
    const icons = [
        { name: 'HTML', src: './img/html-icon.png' },
        { name: 'CSS', src: './img/css-icon.png' },
        { name: 'Java Script', src: './img/JavaScript-icon.png' },
        { name: 'React', src: './img/ReactVite-icon.svg' },
        { name: 'SpringBoot', src: './img/SpringBoot-icon.png' },
        { name: 'JAVA', src: './img/JAVA-icon.png' },
        { name: 'MySQL', src: './img/MySQL-icon.svg' },
        { name: 'Python', src: './img/python-icon.webp' },
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
        { name: 'Illustrator', src: './img/Illustrator-icon.png' },
        { name: 'Photoshop', src: './img/Photoshop-icon.png' },
        { name: 'figma', src: './img/figma-icon.png' }

    ]

    // 현재 보여줄 카드의 인덱스 (0: 예약, 1: 관리자, 2: 로그인)
    const [currentStep, setCurrentStep] = useState(0);

    // 카드 데이터 배열화
    const projectFunctions = [
        {
            title: "예약 시스템",
            img: "img/GIF/reservation.gif",
            desc: "실시간 차량 가용 상태를 확인하고, 단 3번의 클릭만으로 신속한 예약이 가능합니다."
        },
        {
            title: "관리자 대시보드",
            img: "img/GIF/admin.gif",
            desc: "차량 상태 및 예약 현황을 한눈에 파악하며, 데이터 시각화를 통해 효율적인 운영을 돕습니다."
        },
        {
            title: "로그인",
            img: "img/GIF/login.gif",
            desc: "사용자 인증 및 보안을 강화하여 안전한 서비스 이용 환경을 제공합니다."
        }
    ];

    const handleNext = () => {
        setCurrentStep((prev) => (prev === projectFunctions.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentStep((prev) => (prev === 0 ? projectFunctions.length - 1 : prev - 1));
    };

    return (
        <div className="container">
            <div className="detail_info">
                <h2>렌트카 웹사이트 개발</h2>
                <p className="info_comment">
                    4인의 팀원과 함께 기획부터 배포까지 완수한 <span>풀스택 렌트카 예약 웹사이트</span>로<br />
                    사용자 중심의 UI와 안정적인 데이터 처리 로직을 구현했습니다.
                </p>

                <div className="info_table">
                    {/* 왼쪽 */}
                    <div className="overlay">
                        <img src="/img/fullSize02.png" alt="차랑차랑" />
                    </div>

                    {/* 오른쪽 */}
                    <div className="info_grid">
                        {/* <div className="top"> */}

                        <div className="info_itemcard">
                            <h2>참여 인원</h2>
                            <span className="value_sub">팀 프로젝트(4인)</span>
                        </div>

                        <div className="info_itemcard">
                            <h2>프로젝트 기간</h2>
                            <table className="period_table">
                                <tbody>
                                    <tr><th>프론트엔드</th><td>2025.12.01 - 12.31</td></tr>
                                    <tr><th>백엔드</th><td>2026.02.05 - 03.05</td></tr>
                                    <tr><th>데이터 시각화</th><td>2026.03.25 - 03.27</td></tr>
                                </tbody>
                            </table>
                        </div>
                        {/* </div> */}
                        <div className="info_charang">
                            <h5>차량차랑</h5>
                            <h2>프로젝트 링크 이동하기</h2>
                            <div className="link_buttons">
                                <a href="https://port-0-charang2026-mma8g0s58d0aa22f.sel3.cloudtype.app/" target="_blank" rel="noreferrer" className="link_btn site">차랑차랑</a>
                            </div>
                        </div>

                        <div className="info_itemcard">
                            <h5>협업도구</h5>
                            <h2>프로젝트 관련 링크</h2>
                            <div className="link_buttons">

                                <a href="https://github.com/jaykim1993/charang2026" target="_blank" rel="noreferrer" className="link_btn git">GitHub</a>

                                <a href="https://10-32.notion.site/IMS-Backend-2fd7d4eb06e9806f9e3ed6c8303000d9" target="_blank" rel="noreferrer" className="link_btn notion">Notion</a>
                                <a href="https://canva.link/kvjo5ei84vzqik3" target="_blank" rel="noreferrer" className="link_btn notion">PPT</a>
                            </div>
                        </div>

                        <div className="info_itemcard">
                            <h2>기술 스택 및 도구</h2>
                            <div className="stack_images">
                                {icons.map((n, index) => (
                                    <div className="stack_unit" key={index}>
                                        <div className="stack_item">
                                            <img src={n.src} alt={n.name} />
                                        </div>
                                        <p className="stack_name">{n.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                {/* 상세 설명 섹션 */}
                <div className="info_content">
                    <div className="front">
                        <h6>프론트엔드</h6>
                        <p>
                            와이어프레임을 기반으로 HTML5, CSS3, JavaScript 및 React(Vite)를 활용하여 메인 화면, 목록, 상세 화면 등 UI 컴포넌트를 구현<br /><br />
                            PHP와 MySQL을 연동하여 회원가입 및 로그인 기능을 개발하고, 데이터베이스 기반 사용자 인증 흐름을 적용<br /><br />
                            UI 중심의 Management System 웹 애플리케이션을 팀 프로젝트 형태로 설계·구현·배포하는 웹 서비스 개발
                        </p>
                    </div>
                    <div className="back">
                        <h6>백엔드</h6>
                        <p>
                            Spring Boot와 MyBatis를 활용한 백엔드 서버를 구축하고 MySQL 데이터베이스와 연동하여, 회원관리 및 데이터 처리 기능을 REST API 기반으로 구현<br /><br />
                            Axios 기반 API 통신을 적용하여 React 프론트엔드와 Spring Boot 백엔드 간 데이터 연동 기능을 구현<br /><br />
                            완성된 프로젝트는 Cloudtype 클라우드 환경에 배포하여 실제 웹 서비스 형태로 실행
                        </p>
                    </div>
                </div>

                {/* 프로젝트 기능 설명 섹션 */}
                <div className="info_project_slider">
                    <p className="info_project_sub">프로젝트 기능</p>
                    <h1>기능별 기여도</h1>
                    <div className="slider_wrapper">
                        {/* 이전 버튼*/}
                        <button className="slider_btn prev" onClick={handlePrev}>&lt;</button>

                        <div className="function_card">
                            <div className="card_img_box">
                                <img
                                    src={projectFunctions[currentStep].img}
                                    alt={projectFunctions[currentStep].title}
                                    key={currentStep}
                                />
                            </div>

                            <div className="card_text_area">
                                <h2>{projectFunctions[currentStep].title}</h2>
                                <p className="write">
                                    {projectFunctions[currentStep].desc}
                                </p>

                                <div className="step_dots">
                                    {projectFunctions.map((_, i) => (
                                        <span key={i} className={`dot ${i === currentStep ? 'active' : ''}`}></span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 다음 버튼: wrapper 안으로 이동 */}
                        <button className="slider_btn next" onClick={handleNext}>&gt;</button>
                    </div>
                </div>
            </div>
        </div>
    );
}