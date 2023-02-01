import {motion} from "framer-motion";
import {forwardRef} from "react";

export const EducationСard = forwardRef(({customC,photo, name, data, link, classImg}, ref) => {

    const EducAnimation = {
        hidden: {
            opacity: 0,
        },
        visible: custom => ({
            opacity: 1,
            transition: { delay: custom * 0.7 },
        }),
    }

    return(
        <motion.div
            className="education-item dark"
            custom={customC}
            variants={EducAnimation}
            viewport={{once:true}}
            ref={ref}>

            <img className={classImg} src={photo} alt=""/>

            <div className="education-item-info">
                <h3>{name}</h3>
                <p>{data}</p>
                {link ?
                    <a href={link}
                       target="_blank"
                       className="certificate-link">Сертификат</a>
                    : null
                }
            </div>
        </motion.div>
    )
})

export const MEducationСard = motion(EducationСard);
