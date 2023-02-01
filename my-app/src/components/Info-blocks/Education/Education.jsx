import {motion} from "framer-motion";
import {TittleInfoBlock} from "../TittleInfoBlock";
import {MEducationСard} from "./EducationСard";

export const Education = () => {

    return(
        <motion.div
            initial="hidden"
            whileInView="visible"
            className="education"
            viewport={{once:true}}
            id="education">
            <div className="container">
                <TittleInfoBlock>Education</TittleInfoBlock>
                <div className="education-content">
                    <MEducationСard customC={1}
                                    photo={"./images/education/step.png"}
                                    name={"Акамения ШАГ(до ВУЗ подготовка)"}
                                    data={"Сентябрь 2019 - Июль 2021"}/>
                    <MEducationСard customC={2}
                                    photo={"./images/education/hillel.jpg"}
                                    name={"Front-end Basic"}
                                    data={"Август 2021 – Ноябрь 2021"}
                                    link={"https://certificate.ithillel.ua/view/57731942"}/>
                    <MEducationСard customC={3}
                                    photo={"./images/education/hillel.jpg"}
                                    name={"Front-end Pro"}
                                    data={"Февраль 2022 - Октябрь 2022"}
                                    link={"https://certificate.ithillel.ua/view/96771540"}/>
                    <MEducationСard customC={4}
                                    photo={"./images/education/mgu.png"}
                                    name={"Компьютерная инженерия"}
                                    data={"Сентябрь 2021 - Май 2025"}
                                    classImg={"max-width"}/>
                </div>
            </div>
        </motion.div>
    )
}