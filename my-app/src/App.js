import React from "react";
import './index.css';
import "./main.css"
import {Header} from "./components/Default/Header";
import {AboutMe} from "./components/Info-blocks/AboutMe";
import {Skills} from "./components/Info-blocks/Skills/Skills";
import {Education} from "./components/Info-blocks/Education/Education";
import {Experience} from "./components/Info-blocks/Experience"
import {ScrollToTop} from "./components/Default/ScrollToTop";
import {WorkExample} from "./components/Info-blocks/WorkExample";
import {Footer} from "./components/Default/Footer";

function App() {

    return (
        <>
            <header>
                <Header/>
            </header>
            <main>
                <AboutMe/>
                <Skills/>
                <Education/>
                <Experience/>
                <WorkExample/>
                <ScrollToTop/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
}

export default App;
