import {TittleInfoBlock} from "./TittleInfoBlock"

export const Experience = () => {

    return(
        <div className="experience dark" id="experience">
            <div className="container">
                <TittleInfoBlock>Experience</TittleInfoBlock>
                <div className="experience-content">
                    <h3 className="experience-title">ARMAR Solutions</h3>

                    <div className="company">
                        <article className="company-description">
                            <p>
                                <b>CEO & Founder ARMAR Solutions</b> - міжнародний ІТ-холдинг
                                з офісами в Україні, Великій Британії та Казахстані.
                                У команді понад 70 співробітників.
                            </p>
                            <p>До складу холдингу входить digital-агентство повного циклу,
                                яке спеціалізується на запуску маркетплейсів та цифрових
                                екосистем по всьому світу... <a href="https://armar.solutions/about">Подробнее</a>
                            </p>
                        </article>

                        <div className="company-img">
                            <img src="./images/armar-banner.png" alt=""/>
                        </div>
                    </div>

                    <div className="my-experience">
                        <h3 className="my-position">Junior Front-end developer</h3>
                        <p className="my-time-work">Февраль 2022 - Настоящие время</p>
                    </div>
                </div>
            </div>
        </div>
    )
}