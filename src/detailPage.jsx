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
            type: "프론트엔드",
            title: "달력(FullCalendar API) 연동",
            img: "img/home01.png",
            desc: `FullCalendar API를 연동하여 날짜와 시간대 범위를 쉽게 선택할 수 있도록 UI를 구현했습니다.
                    커스텀 스타일을 적용하고, 선택한 날짜와 시간대를 String 타입으로 추출해 예약 데이터로 넘길 수 있도록 처리했습니다.`
        },
        {
            type: "백엔드 - 관리자페이지",
            title: "차량관리(CRUD)",
            img: "img/GIF/managerGIF/carDel.gif",
            desc: `모델명·차량번호 등 검색 타입을 지정해 차량을 쉽게 조회할 수 있고, 필드명 클릭으로 오름차순/내림차순 정렬을 지원합니다.
                차량 클릭 시 상세정보를 확인할 수 있으며, 실시간 예약 여부를 체크하여 예약이 없는 차량만 삭제할 수 있습니다.`
        },
        {
            type: "백엔드 - 관리자페이지",
            title: "회원관리(CRUD)",
            img: "img/GIF/managerGIF/userSearch.gif",
            desc: `회원 ID·이름으로 검색 타입을 지정해 회원을 쉽게 조회할 수 있고, 필드명 클릭으로 오름차순/내림차순 정렬을 지원합니다. 
                 회원 클릭 시 상세정보를 확인할 수 있으며, 실시간 예약 여부를 체크하여 예약이 없는 회원만 삭제할 수 있습니다.`,
        },
        {
            type: "백엔드 - 관리자페이지",
            title: "예약관리(CRUD)",
            img: "img/GIF/managerGIF/reservationSearch.gif",
            desc: `예약코드·예약자 이름 등 검색 타입을 지정해 예약을 쉽게 조회할 수 있고, 필드명 클릭으로 오름차순/내림차순 정렬을 지원합니다. 
                 예약 클릭 시 예약코드, 예약자, 예약차량 등의 상세정보를 한눈에 확인할 수 있습니다.
                 실시간 예약 여부를 체크할 수 있으며, 모든 예약은 삭제할 수 있습니다.`,
        },
        {
            type: "백엔드 - 관리자페이지",
            title: "관리자 대시보드",
            img: "img/GIF/admin.gif",
            desc: "차량 상태 및 예약 현황을 한눈에 파악하며, 데이터 시각화를 통해 효율적인 운영을 돕습니다."
        },
        {
            type: "데이터 시각화",
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

    const partSummary = {
        front: {
            title: '프론트엔드',
            desc: 'React(Vite) 기반 메인 홈 레이아웃 구성 및 API 연동',
            pills: ['신규/인기차량', 'FullCalendar API 연동', '최근 본 차량']
        },
        back: {
            title: '백엔드',
            desc: 'PHP + MySQL 기반 인증 및 예약 API 설계',
            pills: ['차량/회원/예약 관리', 'CRUD', '검색']
        },
        data: {
            title: '데이터 시각화',
            desc: '예약 현황·이용률 차트 및 관리자 대시보드 구현',
            pills: ['가입자수 그래프', '차종별 예약횟수']
        },
    };

    return (
        <div className="container">
            <div className="detail_info">
                <h2>렌트카 웹사이트 개발</h2>
                <p className="info_comment detail">
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
                            <div className="links">
                                <div className="link_buttons">
                                    <a href="https://charang2025.mycafe24.com/" target="_blank" rel="noreferrer" className="link_btn charang">프론트엔드&nbsp;차랑차랑</a>
                                </div>
                                <div className="link_buttons">
                                    <a href="https://port-0-charang2026-mma8g0s58d0aa22f.sel3.cloudtype.app/" target="_blank" rel="noreferrer" className="link_btn charang">백엔드&nbsp;차랑차랑</a>
                                </div>
                            </div>
                        </div>
                        <div className="idpw">
                            <div className="info_charang">
                                {/* 일반 사용자 카드 */}
                                <div className="account_card">
                                    <div className="info_row">
                                        <span className="label">ID</span>
                                        <span className="value">test</span>
                                    </div>
                                    <div className="info_row">
                                        <span className="label">PW</span>
                                        <span className="value">1234</span>
                                    </div>
                                </div>
                            </div>
                            <div className="info_charang">
                                {/* 관리자 카드 */}
                                <div className="account_card">
                                    <div className="info_row">
                                        <span className="label">ID</span>
                                        <span className="value">admin</span>
                                    </div>
                                    <div className="info_row">
                                        <span className="label">PW</span>
                                        <span className="value">1234</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="info_itemcard">
                            <h5>아카이브</h5>
                            <h2>프로젝트 관련 링크</h2>
                            <div className="link_buttons">

                                <a href="https://github.com/jaykim1993/charang2026" target="_blank" rel="noreferrer" className="link_btn git">GitHub</a>

                                <a href="https://10-32.notion.site/IMS-Backend-2fd7d4eb06e9806f9e3ed6c8303000d9" target="_blank" rel="noreferrer" className="link_btn notion">Notion</a>
                                <a href="https://canva.link/tl4obp4pys7te6h" target="_blank" rel="noreferrer" className="link_btn notion">PPT</a>
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
                    <div className="detail_content">
                        <h6>프론트엔드</h6>
                        <p>
                            와이어프레임을 기반으로 HTML5, CSS3, JavaScript 및 React(Vite)를 활용하여 메인 화면, 목록, 상세 화면 등 UI 컴포넌트를 구현했습니다.<br />
                            PHP와 MySQL을 연동하여 회원가입 및 로그인 기능을 개발하고, 데이터베이스 기반 사용자 인증 흐름을 적용하였습니다.<br />
                            UI 중심의 Management System 웹 애플리케이션을 팀 프로젝트 형태로 설계·구현·배포(cafe24)하는 웹 서비스 개발입니다.
                        </p>
                    </div>
                    <div className="detail_content">
                        <h6>백엔드 고도화</h6>
                        <p>
                            Java 기반의 Spring Boot 프레임워크와 MyBatis(Persistence Framework)를 활용한 백엔드 서버를 구축하고 MySQL DBMS를 연동하여 ..
                            회원관리 및 데이터 처리 기능을 REST API 기반으로 구현<br />
                            Axios 기반 API 통신을 적용하여 React 프론트엔드와 Spring Boot 백엔드 간 데이터 연동 기능을 구현<br />
                            완성된 프로젝트는 Cloudtype 클라우드 환경에 배포하여 실제 웹 서비스 형태로 실행
                        </p>
                    </div>
                    <div className="detail_content">
                        <h6>데이터 시각화</h6>
                        <p>
                            기존 시스템의 비즈니스 로직을 분석하여 Python(Pandas)으로 대량의 더미데이터를 설계하고,
                            Matplotlib/Seaborn을 활용한 통계 대시보드를 관리자 메뉴에 통합 구현. 데이터 수집, 정제,
                            시각화 및 서비스 반영으로 이어지는 Full-Stack 데이터 파이프라인 역량 함양에 집중.
                        </p>
                    </div>
                </div>

                {/* 프로젝트 기능 설명 섹션 */}
                <div className="info_project_slider">
                    <p className="info_project_sub">프로젝트 기능</p>
                    <h1>기능별 기여도</h1>
                    <div className="impact">
                        <div className="box">
                            <h6>{partSummary.front.title}</h6>
                            <p>{partSummary.front.desc}</p>
                            <div className="minibox">
                                {partSummary.front.pills.map((pill, i) => (
                                    <span key={i}>{pill}</span>
                                ))}
                            </div>
                        </div>
                        <div className="box">
                            <h6>{partSummary.back.title}</h6>
                            <p>{partSummary.back.desc}</p>
                            <div className="minibox">
                                {partSummary.back.pills.map((pill, i) => (
                                    <span key={i}>{pill}</span>
                                ))}
                            </div>
                        </div>
                        <div className="box">
                            <h6>{partSummary.data.title}</h6>
                            <p>{partSummary.data.desc}</p>
                            <div className="minibox">
                                {partSummary.data.pills.map((pill, i) => (
                                    <span key={i}>{pill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
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
                                <h4>{projectFunctions[currentStep].type}</h4>
                                <h1>{projectFunctions[currentStep].title}</h1>
                                <p className="write" style={{ whiteSpace: 'pre-line', lineHeight: 1.8 }}>
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