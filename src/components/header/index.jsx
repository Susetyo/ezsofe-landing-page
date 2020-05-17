import React from "react";
import "./header.css";

const Header = () => {
    const onClickHamburger = () => {
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");
        navLinks.classList.toggle("open");
        links.forEach((link) => {
            link.classList.toggle("fade");
        });
    };

    const onMoveTo = (to) => {
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");
        navLinks.classList.toggle("open");
        links.forEach((link) => {
            link.classList.toggle("fade");
        });

        window.fullpage_api.moveTo(2);
    };

    return (
        <nav>
            <div className="hamburger" onClick={onClickHamburger}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="container-nav-links">
                <div className="logo">
                    <h1>EZSOFE</h1>
                </div>
                <ul className="nav-links">
                    <li onClick={onMoveTo}>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Works</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
