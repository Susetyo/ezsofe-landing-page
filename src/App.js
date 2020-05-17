import React from "react";
import logo from "./logo.svg";
import circles from "./circles.svg";
import "./App.css";
import ReactFullpage from "@fullpage/react-fullpage";
import Header from "./components/header";
import Home from "./components/home";

function App() {
    return (
        <>
            <Header />
            <ReactFullpage
                //fullpage options
                licenseKey={"YOUR_KEY_HERE"}
                navigation
                scrollingSpeed={1000} /* Options here */
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <Home />

                            <div className="section">
                                <p>Section 2</p>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </>
    );
}

export default App;
