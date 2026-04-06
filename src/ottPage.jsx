import { useEffect, useState } from "react";
import "./ottPage.css";

export default function OttPage() {

    // 도구, 환경
    const icons = [
        { name: 'HTML', src: './img/html-icon.png' },
        { name: 'CSS', src: './img/css-icon.png' },
        { name: 'Java Script', src: './img/JavaScript-icon.png' },
        { name: 'React', src: './img/ReactVite-icon.svg' },
        { name: 'VisualStudio', src: './img/VisualStudio-icon.png' },
        { name: 'Illustrator', src: './img/Illustrator-icon.png' },
        { name: 'Photoshop', src: './img/Photoshop-icon.png' },
        { name: 'figma', src: './img/figma-icon.png' }

    ]

    const partSummary = {
        front: {
            title: '프론트엔드',
            desc: [
                'TOP 10 콘텐츠를 메인에 노출하여 인기 작품을 한눈에 확인할 수 있으며, 10초마다 setInterval로 자동 슬라이드되는 동적 배너 구현 (cleanup으로 메모리 누수 방지)',
                'TMDB API를 커스텀 훅(useOttData)으로 분리해 영화·드라마 12개 카테고리를 장르·국가·키워드 파라미터로 페이지별 fetch 처리',
                '장르별 콘텐츠 슬라이드 구현 및 Context API로 슬라이드 위치 상태를 전역 관리',
                '모두보기 클릭 시 모달로 해당 장르의 전체 작품을 표시하며, 토글로 추가 페이지 데이터를 펼쳐볼 수 있도록 처리'
            ],
            pills: [ 'TMDB API 연동', 'TOP 10 자동 재생 배너', '장르별 분류', '모달 탐색']
        }
    };

    return (
        <div className="container">
            <div className="detail_info">
                <h2>OTT 미니 프로젝트</h2>
                <p className="info_comment ott">
                    <span>TMDB API 연동</span>을 통해 실시간 콘텐츠 데이터를 동적으로 구현한 4인 팀 프로젝트로<br />
                    로그인부터 콘텐츠 상세 페이지까지 완성도 높은 <span>프론트엔드 OTT 웹 서비스</span>를 구축했습니다.
                </p>

                <div className="info_table_ott">
                    {/* 왼쪽 */}
                    <div className="overlay">
                        <img src="./img/ottScreen.png" alt="ott" />
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
                                    <tr><td>2025.11.10 - 11.13</td></tr>
                                </tbody>
                            </table>
                        </div>
                        {/* </div> */}
                        <div className="info_charang">
                            <h5>OTT 프로젝트</h5>
                            <h2>프로젝트 링크 이동하기</h2>
                            <div className="link_buttons">
                                <a href="https://heayeon6239.github.io/ott_project2025/" target="_blank" rel="noreferrer" className="link_btn ott">OTT</a>
                            </div>
                        </div>

                        <div className="info_charang">
                            {/* 일반 사용자 카드 */}
                            <div className="account_card">
                                <div className="info_row">
                                    <span className="label">ID</span>
                                    <span className="value">1jo</span>
                                </div>
                                <div className="info_row">
                                    <span className="label">PW</span>
                                    <span className="value">1111</span>
                                </div>
                            </div>
                        </div>

                        <div className="info_itemcard">
                            <h5>협업도구</h5>
                            <h2>프로젝트 관련 링크</h2>
                            <div className="link_buttons">
                                <a href="https://github.com/heayeon6239/ott_project2025" target="_blank" rel="noreferrer" className="link_btn git">GitHub</a>
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
                        <h6>상세</h6>
                        <p>
                            React와 Context API를 활용해 OTT 웹 서비스의 메인 및 콘텐츠 페이지를 구현했습니다.<br />
                            표준 Fetch API를 활용하여 TMDB(Open Movie Database) API를 JSON 형식으로 연동해
                            영화·드라마 데이터를 동적으로 표시했고 <br/>
                            로그인과 모달을 이용한 상세정보 확인 등의 기능을 통해 실제 OTT 웹 사이트와 유사한 사용자 경험을 제공하여
                            GitHub Pages에 배포했습니다.
                        </p>
                    </div>
                </div>

                {/* 프로젝트 기능 설명 섹션 */}
                <div className="info_project">
                    <p className="info_project_sub">프로젝트 기능</p>
                    <h1>기능별 기여도</h1>
                    <div className="box">
                        {/* <h6>{partSummary.front.title}</h6> */}
                        <div className="box_desc_list">
                            {partSummary.front.desc.map((item, i) => (
                                <div key={i} className="box_desc_item">
                                    <span className="box_desc_dot"></span>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                        <div className="minibox">
                            {partSummary.front.pills.map((pill, i) => (
                                <span key={i}>{pill}</span>
                            ))}
                        </div>
                    </div>
                    <div className="info_project_flex">

                        {/* 랭킹 */}
                        <div className="function_card">
                            <div className="card_img_box">
                                <img src="img/ottScreen01.png" alt="랭킹" />
                            </div>
                            <div className="card_text_area">
                                <h2>TOP 10 콘텐츠</h2>
                                <p className="write">
                                    메인페이지에서 인터벌 로직을 적용한 자동 재생 배너를 통해<br />
                                    현재 TOP 10 콘텐츠의 순위와 정보를 바로 파악할 수 있습니다.
                                </p>
                            </div>
                        </div>

                        {/* 카테고리별 추천*/}
                        <div className="function_card">
                            <div className="card_img_box">
                                <img src="img/ottScreen03.png" alt="카테고리" />
                            </div>
                            <div className="card_text_area">
                                <h2>장르별 작품</h2>
                                <p className="write">
                                    TMDB API 데이터를 장르별로 분류한<br />
                                    각 작품들을 슬라이드를 통해 쉽게 확인할 수 있으며,<br />
                                    모두보기 클릭시 해당 장르의 모든 콘텐츠를 한눈에 볼 수 있습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}