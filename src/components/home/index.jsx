import React from "react";
import "./home.css";

const Home = () => {
    const [welcome, setWelcome] = React.useState(".welcome");
    const [welcomeText, setWelcomeText] = React.useState("WELCOME TO");
    let [i, setI] = React.useState(0);
    React.useEffect(() => {
        const typeWriter = () => {
            if (i < welcomeText.length) {
                document.querySelector(welcome).innerHTML += welcomeText.charAt(
                    i
                );
                setI((i += 1));
                setTimeout(typeWriter, 50);
            }
        };

        typeWriter();
    }, []);

    const [company, setCompany] = React.useState(".name-company");
    const [companyText, setCompanyText] = React.useState("EZSOFE");
    let [j, setJ] = React.useState(0);
    React.useEffect(() => {
        const typeWriter = () => {
            if (j < companyText.length) {
                document.querySelector(company).innerHTML += companyText.charAt(
                    j
                );
                setI((j += 1));
                setTimeout(typeWriter, 50);
            }
        };

        typeWriter();
    }, []);

    const [slogan, setSlogan] = React.useState(".slogan");
    const [sloganText, setSloganText] = React.useState(
        "OPTIMIZING YOUR CAPABILITIES"
    );
    let [z, setZ] = React.useState(0);
    React.useEffect(() => {
        const typeWriter = () => {
            if (z < sloganText.length) {
                document.querySelector(slogan).innerHTML += sloganText.charAt(
                    z
                );
                setZ((z += 1));
                setTimeout(typeWriter, 50);
            }
        };

        typeWriter();
    }, []);

    return (
        <div className="section home">
            <div className="container-home">
                <div className="welcome"></div>
                <div className="name-company"></div>
                <hr />
                <div className="slogan"></div>
            </div>
        </div>
    );
};

export default Home;
