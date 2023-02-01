import React, {forwardRef} from "react";
import {motion} from "framer-motion";

export const Skill = forwardRef(({image, name, description, customC}, ref) => {

    const skillAnimation = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.1 },
        }),
    }

    return(
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true}}
            className="skill-item"
            custom={customC}
            variants={skillAnimation}
            ref={ref}>
            <img className="image-skill" src={image} alt={name}/>
            <div>
                <h1>{name ? name : "Lorem"}</h1>
                <p>{description ? description : "Lorem ipsum dolor"}</p>
            </div>
        </motion.div>
    )
})

export const MSkill = motion(Skill);


