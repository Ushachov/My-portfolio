import React, {useState} from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export const Header = () => {

    const [stateMenu, setStateMenu] = useState(false)

    const showMenuHandler = () =>{
        setStateMenu(!stateMenu);
    }

    return(
        <div className="header dark">
            <div className="container">
                <div className="header-content">
                    <div onClick={showMenuHandler} className="bnt-menu-mob">
                        {stateMenu ? <AiOutlineClose/> : <AiOutlineMenu /> }
                    </div>
                    <nav className={stateMenu ? "dark nav-bar nav-bar-mob" : "nav-bar"}>
                        <ul onClick={showMenuHandler}>
                            <li><a href="#about-me">About me</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#education">Education</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#work-example">Work-example</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}