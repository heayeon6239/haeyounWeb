import { useEffect, useState } from "react";
import "./detailPage.css";

export default function DetailPage() {
    return (
        <div className="container">
            <div className="detail_info">
                <h2>렌트카 웹사이트 개발</h2>
                <p className="info_comment">
                    4인의 팀원과 함께 기획부터 배포까지 완수한 <span>풀스택 렌트카 예약 웹사이트</span>로<br />
                    사용자 중심의 UI와 안정적인 데이터 처리 로직을 구현했습니다.
                </p>

                <div className="info_table">
                    <div className="info_grid">
                        {/* 카드 1: 참여 인원 */}
                        <div className="info_item card">
                            <span className="label">참여 인원</span>
                            <div className="value_container">
                                <span className="value_main">4인</span>
                                <span className="value_sub">팀 프로젝트</span>
                            </div>
                        </div>

                        {/* 카드 2: 프로젝트 기간 */}
                        <div className="info_item card">
                            <span className="label">프로젝트 기간</span>
                            <table className="period_table">
                                <tbody>
                                    <tr>
                                        <th>프론트엔드</th>
                                        <td>2025년 12월 01일 - 12월 31일</td>
                                    </tr>
                                    <tr>
                                        <th>백엔드</th>
                                        <td>2026년 02월 05일 - 03월 05일</td>
                                    </tr>
                                    <tr>
                                        <th>데이터 시각화</th>
                                        <td>2026년 03월 25일 - 03월 27일</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* 카드 3: 기술 스택 및 도구 */}
                        <div className="info_item card full_width">
                            <span className="label">기술 스택 및 도구</span>
                            <div className="stack_images">
                                <img src="./img/html-icon.png" alt="HTML" />
                                <img src="./img/css-icon.png" alt="CSS" />
                                <img src="./img/JavaScript-icon.png" alt="JS" />
                                <img src="./img/ReactVite-icon.svg" alt="React" />
                                <img src="./img/SpringBoot-icon.png" alt="Spring" />
                                <img src="./img/MySQL-icon.svg" alt="MySQL" />
                                <img src="./img/JAVA-icon.png" alt="Java" />
                                <img src="./img/python-icon.webp" alt="Python" />
                            </div>
                        </div>

                        {/* 카드 4: 링크 모음 */}
                        <div className="info_item card full_width">
                            <span className="label">프로젝트 관련 링크</span>
                            <div className="link_buttons">
                                <a href="홈페이지주소" target="_blank" rel="noreferrer" className="link_btn site">차랑차랑</a>
                                <a href="깃허브주소" target="_blank" rel="noreferrer" className="link_btn git">GitHub</a>
                                <a href="노션주소" target="_blank" rel="noreferrer" className="link_btn notion">Notion</a>
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
            </div>
        </div>
    );
}