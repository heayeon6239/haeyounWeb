import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import "./header.css";

export default function Header() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 부드럽게 쓰윽 올라가게 함
        });
    };

    return (
        < header className="header" >
            <Link to={'/'} className="logo" onClick={scrollToTop} >&lt; HAE YOUN / &gt;</Link>
            <div className="navi">
                <HashLink smooth to="/#profile">Profile</HashLink>
                <HashLink smooth to="/#tool">Tool</HashLink>
                <HashLink smooth to="/#project">Projects</HashLink>
                {/* <a href="#">Contact</a> */}
            </div>
        </header >
    )


}