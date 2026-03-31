import { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
    return (

        <div className="container">
            {/* 헤더 */}
            <header className="header">
                <div className="logo">JUNG HAE YOUN</div>
                <div className="navi">
                    <a href="#">Projects</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
            </header>

            {/* 타이틀 */}
            <section className="section00">
                <h1 className="title">
                    Design Sensibility,<br />
                    Driven by Code.
                </h1>
                <p className="comment">디자인의 감각을 코드로 구현하는 개발자 정해연입니다.</p>
            </section>

            {/* 프로필*/}
            <section className="section01">
                <div className="profile">
                    <h1>프로필</h1>
                    <div className="profile01">
                        <h3>학력</h3>
                        <div className="edu">
                            <p className="year">2020년 03월-2026년 02월</p>
                            <p className="school">대학교</p>
                            <p className="school">리빙디자인 전공</p>
                        </div>
                        <div className="edu">
                            <p className="year">2016년 03월-2019년 02월</p>
                            <p className="school">고등학교</p>
                        </div>
                    </div>
                    <div className="profile02">
                        <h3>교육</h3>
                        <div className="edu">
                            <p className="year">2025년 08월-2026년 04월</p>
                            <p className="school">그린컴퓨터아카데미</p>
                            <p className="school_info">
                                UIUX프론트,백엔드(Java,Spring),Data분석(Python)SW개발자 (참여기업프로젝트 참여) 양성과정
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 프로젝트 */}
            <section className="section02">
                <div className="project">
                    <h1>프로젝트</h1>
                    {/* 렌트카 웹사이트 개발 */}
                    <div className="card01">
                        <div className="project-img">
                            {/* 이미지 */}
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
                            <h3>OTT Project</h3>
                            <p>
                                조별 프로젝트를 통해 OTT 웹 서비스의 메인 화면 및 콘텐츠 페이지를 기획하고,
                                HTML5 시멘틱 마크업을 활용하여 전체 페이지 구조를 설계
                            </p>
                            <span>
                                더 알아보기<i className="bi bi-arrow-right-short"></i>
                            </span>
                        </div>
                        <div className="project-img">
                            {/* 이미지 */}
                        </div>
                    </div>
                    {/* 영화관 프로젝트 */}
                    <div className="card03">
                        <div className="project-img">
                            {/* 이미지 */}
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
    )
}