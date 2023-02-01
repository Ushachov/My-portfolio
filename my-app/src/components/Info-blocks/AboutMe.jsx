import React from "react";
import data from "../../personal-data.json";
import {motion} from "framer-motion";

export const AboutMe = () => {
    const {photo, firstName, lastName, age, position, city, number, telegram, email} = data;

    const textAnimation1 = {
        hidden: {
            x: -100,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 },
        }),
    }



    return(
        <motion.div
            initial="hidden"
            whileInView="visible"
            className="about-me"
            viewport={{once:true}}
            id="about-me">

            <div className="container">
                <div className="about-me-content">
                    <div className="about-me-item">
                        <img src={photo} alt="my photo"/>
                    </div>

                    <div className="about-me-item">
                        <div className="name-position">
                            <h3>
                                {firstName} {lastName}
                            </h3>
                            <i className="position">{position}</i>
                        </div>
                        <div className="information">
                            <motion.p custom={2} variants={textAnimation1}>Age: <i>{age}</i></motion.p>
                            <motion.p custom={4} variants={textAnimation1}>City: <i>{city}</i></motion.p>
                            <motion.p custom={6} variants={textAnimation1}>Number: <i>{number}</i></motion.p>
                            <motion.p custom={5} variants={textAnimation1}>Telegram: <i>{telegram}</i></motion.p>
                            <motion.p custom={3} variants={textAnimation1}>Email: <i>{email}</i></motion.p>
                        </div>
                        <div className="links">
                            <a  target="_blank" href="https://t.me/VanyaSOmil">
                                <img src="./images/about-me/tg-icon.png" alt=""/>
                            </a>

                            <a target="_blank" href="https://www.instagram.com/ushachov.v/">
                                <img src="./images/about-me/inst-icon.webp" alt=""/>
                            </a>

                            <a target="_blank" href="mailto:ushachovg324@gmail.com">
                                <img src="./images/about-me/email-icon.png" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </motion.div>
    )
}