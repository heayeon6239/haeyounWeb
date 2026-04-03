import { useEffect, useState } from "react";
import "./mega.css";

export default function Mega() {

    // 도구, 환경
    const icons = [
        { name: 'HTML', src: './img/html-icon.png' },
        { name: 'CSS', src: './img/css-icon.png' },
        { name: 'Java Script', src: './img/JavaScript-icon.png' },
        { name: 'VisualStudio', src: './img/VisualStudio-icon.png' }
    ]

    return (
        <div className="container">
            <div className="detail_info">
                <h2>MEGABOX <br /> 메인/예매 사이트</h2>
                <p className="info_comment mega">
                    HTML5, CSS3, Java Script를 활용해 영화관 메인 페이지와 예매 화면을 구현하고,<br />
                    <span>시멘틱 마크업</span>과 <span>CSS 레이아웃</span>으로 웹 표준에 맞게 구조를 설계하여<br />
                    실제 영화 예매 사이트와 유사한 사용자 경험을 제공했습니다.
                </p>

                <div className="info_table_mega">
                    {/* 왼쪽 */}
                    <div className="overlay">
                        <img src="/img/megaScreen.png" alt="메가박스" />
                    </div>

                    {/* 오른쪽 */}
                    <div className="info_grid">
                        {/* <div className="top"> */}

                        <div className="info_itemcard">
                            <h2>참여 인원</h2>
                            <span className="value_sub">팀 프로젝트(2인)</span>
                        </div>

                        <div className="info_itemcard">
                            <h2>프로젝트 기간</h2>
                            <table className="period_table">
                                <tbody>
                                    <tr><td>2025.10.15 - 10.17</td></tr>
                                </tbody>
                            </table>
                        </div>
                        {/* </div> */}
                        <div className="info_charang">
                            <h5>MEGABOX 메인/예매 사이트</h5>
                            <h2>프로젝트 링크 이동하기</h2>
                            <div className="link_buttons">
                                <a href="https://heayeon6239.github.io/megacompelete/" target="_blank" rel="noreferrer" className="link_btn site">MEGABOX</a>
                            </div>
                        </div>

                        <div className="info_itemcard">
                            <h5>협업도구</h5>
                            <h2>프로젝트 관련 링크</h2>
                            <div className="link_buttons">
                                <a href="https://github.com/heayeon6239/megacompelete" target="_blank" rel="noreferrer" className="link_btn git">GitHub</a>
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
                <div className="info_content_ott">
                    <div className="front">
                        <h2>상세설명</h2>
                        <p>
                            JavaScript를 사용하여 영화 선택 및 페이지 전환과 같은 사용자 이벤트를 처리하고,
                            동적인 UI 요소를 구현하여 실제 영화 예매 사이트와 유사한 사용자 경험을 제공합니다.
                            HTML5, CSS3, JavaScript를 활용해 영화관 메인 페이지와 상단 네비게이션 메뉴의 빠른 예매 화면을
                            구현하고, 시멘틱 마크업과 CSS 레이아웃으로 웹 표준에 맞게 구조를 설계했습니다.
                        </p>
                    </div>
                </div>

                {/* 프로젝트 기능 설명 섹션 */}
                <div className="info_project">
                    <p className="info_project_sub">프로젝트 기능</p>
                    <h1>기능별 기여도</h1>
                    <div className="info_project_flex">

                        {/* 메인 */}
                        <div className="function_card">
                            <div className="card_img_box">
                                <img src="img/mega01.png" alt="메인" className="mega_img" />
                            </div>
                            <div className="card_text_area">
                                <h2>메인 홈 구성</h2>
                                <p className="write">
                                    호버 효과를 활용한 오버레이 레이아웃을 구현하여<br />
                                    해당 영화의 상세 줄거리와 관람 평점을 확인할 수 있습니다.
                                </p>
                            </div>
                        </div>

                        {/* 슬라이드 */}
                        <div className="function_card">
                            <div className="card_img_box">
                                <img src="img/mega02.png" alt="슬라이드" className="mega_img" />
                            </div>
                            <div className="card_text_area">
                                <h2>자동 재생 배너</h2>
                                <p className="write">
                                    setInterval 로직을 활용한 실시간 자동 재생 배너를 통해<br />
                                    다양한 혜택 정보를 제공합니다.
                                </p>
                            </div>
                        </div>

                        {/* 예매 */}
                        <div className="function_card">
                            <div className="card_img_box">
                                <img src="img/mega03.png" alt="예매" className="mega_img" />
                            </div>
                            <div className="card_text_area">
                                <h2>예약 인원 선택</h2>
                                <p className="write">
                                    인원 선택 로직을 통해 실시간 예매 인원을 확인할 수 있으며<br />
                                    경로 및 우대 조건 선택 시 안내 모달을 활용하여 정보를 전달합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}