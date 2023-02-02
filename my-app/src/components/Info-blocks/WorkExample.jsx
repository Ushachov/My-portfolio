import React from "react";
import Slider from "react-slick";
import {TittleInfoBlock} from "./TittleInfoBlock";


export const WorkExample = () => {
    const settings = {
        className: "center",
        centerMode: true,
        slidesToShow: 3,
        speed: 1000,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="work-example" id="work-example">
            <div className="container">
                <TittleInfoBlock>Work example</TittleInfoBlock>
                <div className="slider">
                        <Slider {...settings}>
                            <div>
                                <div className="slider-item">
                                    <h3>Hlegals</h3>
                                    <BtnGitHubLink link={"https://github.com/VanyaSO/hw17-ushachov-project"}/>
                                </div>
                            </div>
                            <div>
                                <div className="slider-item">
                                    <h3>Layout</h3>
                                    <BtnGitHubLink link={"https://github.com/VanyaSO/hw12_14_media-ushachov"}/>
                                </div>
                            </div>
                            <div>
                                <div className="slider-item">
                                    <h3>Timer</h3>
                                    <BtnGitHubLink link={"https://github.com/Ushachov/Timer-js"}/>
                                </div>
                            </div>
                            <div>
                                <div className="slider-item">
                                    <h3>Contact book</h3>
                                    <BtnGitHubLink link={"https://github.com/Ushachov/hw-41-ushachov-js"}/>
                                </div>
                            </div>
                        </Slider>
                </div>
            </div>
        </div>
    );
}

const BtnGitHubLink = ({link}) => {
    return(
        <>
            <a className="github-link" href={link}>
                <img src="./images/github-logo.png" alt=""/>
            </a>
        </>
    )
}