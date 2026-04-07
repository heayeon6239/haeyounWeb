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
            title: "데이터 시각화(월별 가입자 수)",
            img: "img/data01.png",
            desc: `월별 매출액 추이를 꺾은선 그래프로 시각화하여 성수기·비수기 매출의 흐름을 파악할 수 있습니다.
                7, 12월은 피크, 2, 9월은 저조한 패턴이 반복되며 2026년도부터 전반적인 회복이 확인됩니다.
                성수기의 차량·인력 선제 대응과 비수기의 프로모션·장기 대여 이벤트 기획에 활용될 수 있다는 분석이 가능합니다.`
        },
        {
            type: "백엔드 - 관리자페이지",
            title: "데이터 시각화(차종별 예약횟수)",
            img: "img/data02.png",
            desc: `차량과 예약 테이블을 join한 결과물로 예약 건수 상위 9개 모델을 가로 막대 그래프로 시각화하여 인기 차종 순위를 한눈에 확인할 수 있습니다.
                상위 9개의 모델의 예약 건수 차이를 한눈에 파악할 수 있으며 인기 모델 우선 확보와 프로모션 전략에 대한 분석이 가능합니다.`
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
            desc: [
                '홈 화면 레이아웃과 조건 필터링을 통한 신규·인기차량 큐레이션 구성',
                'FullCalendar API를 활용한 듀얼 캘린더 커스터마이징 및 선택한 날짜와 시간 값 예약 페이지로 전달',
                'Context를 활용한 공통 데이터 관리로 중복 API 호출 최소화'
            ],
            pills: ['홈 화면 레이아웃', '신규·인기차량 큐레이션', 'FullCalendar API 연동', '데이터 중복 관리']
        },
        back: {
            title: '백엔드 고도화',
            desc: [
                'MySQL DBMS를 연동하여 관리자 페이지 CRUD 기능 구현',
                '다중 테이블 조인을 통해 통합 정보를 제공 및 실시간으로 예약 상태와 삭제 가능 여부 확인 가능',
                'MyBatis XML의 <choose><when> 동적 쿼리를 활용한 검색·정렬 기능을 통해 쉽고 빠른 정보 탐색 가능'
            ],
            pills: ['관리자 페이지', '차량·회원·예약 CRUD', '검색', '정렬', '다중 테이블 조인', '실시간 예약 상태']
        },
        data: {
            title: '데이터 시각화',
            desc: [
                '다량의 더미데이터 설계',
                'Python(Pandas)으로 데이터 정제 후 조인을 통한 예약 현황·이용률 차트 및 관리자 대시보드 구현',
                '그래프를 통한 데이터 분석'
            ],
            pills: ['가입자수 그래프', '차종별 예약횟수', '그래프 분석']
        },
    };

    const ProjectSlider = ({ projectFunctions, partSummary }) => {
        const [currentStep, setCurrentStep] = useState(0);

        const handlePrev = () => {
            setCurrentStep((prev) => (prev === 0 ? projectFunctions.length - 1 : prev - 1));
        };

        const handleNext = () => {
            setCurrentStep((prev) => (prev === projectFunctions.length - 1 ? 0 : prev + 1));
        };
    }

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
                        <img src="./img/fullSize02.png" alt="차랑차랑" />
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
                            UI 중심의 Management System 웹 애플리케이션을 팀 프로젝트 형태로 설계·구현·배포(cafe24)하는 웹 서비스를 개발했습니다.
                        </p>
                    </div>
                    <div className="detail_content">
                        <h6>백엔드 고도화</h6>
                        <p>
                            Java 기반의 Spring Boot 프레임워크와 MyBatis(Persistence Framework)를 활용한 백엔드 서버를 구축했습니다.<br />
                            MySQL DBMS를 연동하여 차량·회원·예약관리 및 데이터 처리 기능을 REST API 기반으로 구현했습니다.<br />
                            Axios 기반 API 통신을 적용하여 React 프론트엔드와 Spring Boot 백엔드 간 데이터 연동이 가능하며<br />
                            완성된 프로젝트는 Cloudtype 클라우드 환경에 배포하여 실제 웹 서비스 형태로 실행할 수 있습니다.<br/>
                            GitHub에서 팀원별 브랜치를 분리하고 Pull Request를 통해 코드 리뷰 후 main 브랜치에 병합하는 협업 방식을 적용했습니다.
                        </p>
                    </div>
                    <div className="detail_content">
                        <h6>데이터 시각화</h6>
                        <p>
                            기존 시스템의 비즈니스 로직을 분석하여 Python(Pandas)으로 대량의 더미데이터를 설계하였으며 불필요한 데이터를 정제하였습니다.<br />
                            Matplotlib/Seaborn을 활용한 데이터 시각화 결과물을 관리자 페이지의 통계 대시보드에서 확인할 수 있습니다.
                        </p>
                    </div>
                </div>

                <section className="info_project_slider">
                    <div className="inner">
                        <p className="info_project_sub">프로젝트 기능</p>
                        <h1 className="section_main_title">기능별 기여도</h1>

                        {/* 상단 기여도 박스 영역 */}
                        <div className="impact">
                            {Object.values(partSummary).map((part, index) => (
                                <div key={index} className="box">
                                    <h6>{part.title}</h6>
                                    <div className="box_desc_list">
                                        {part.desc.map((item, i) => (
                                            <div key={i} className="box_desc_item">
                                                <span className="box_desc_dot"></span>
                                                <p>{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="minibox">
                                        {part.pills.map((pill, i) => (
                                            <span key={i}>{pill}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* 애플 스타일 가로 슬라이더 영역 */}
                        <div className="slider_viewport">
                            <div
                                className="slider_track"
                                style={{
                                    // 중앙 정렬을 위한 계산: (카드너비 80% + 간격 30px) 만큼 이동
                                    transform: `translateX(calc(-${currentStep * 100}% - ${currentStep * 30}px))`
                                }}
                            >
                                {projectFunctions.map((item, i) => (
                                    <div
                                        key={i}
                                        className={`function_card ${i === currentStep ? 'active' : ''}`}
                                        onClick={() => setCurrentStep(i)}
                                    >
                                        <div className="card_img_box">
                                            <img src={item.img} alt={item.title} />
                                        </div>
                                        <div className="card_text_area">
                                            <h4>{item.type}</h4>
                                            <h1 className="card_title">{item.title}</h1>
                                            <p className="card_desc">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* 하단 페이지네이션 점 */}
                            <div className="slider_nav_dots">
                                {projectFunctions.map((_, i) => (
                                    <button
                                        key={i}
                                        className={`nav_dot ${i === currentStep ? 'active' : ''}`}
                                        onClick={() => setCurrentStep(i)}
                                    />
                                ))}
                            </div>
                            {/* 슬라이더 컨트롤 버튼 */}
                            <button className="slider_btn prev" onClick={(e) => { e.stopPropagation(); handlePrev(); }}>&lt;</button>
                            <button className="slider_btn next" onClick={(e) => { e.stopPropagation(); handleNext(); }}>&gt;</button>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}