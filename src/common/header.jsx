import "./header.css";

export default function Header() {

    return (
        < header className = "header" >
        <div className="logo">&lt; HAE YOUN / &gt;</div>
        <div className="navi">
            <a href="#profile">Profile</a>
            <a href="#tool">Tool</a>
            <a href="#project">Projects</a>
            <a href="#">Contact</a>
        </div>
    </header >
    )


}