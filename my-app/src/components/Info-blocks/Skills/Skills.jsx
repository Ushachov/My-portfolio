import React from "react";
import {motion} from "framer-motion";
import {MSkill} from "./Skill";
import {TittleInfoBlock} from "../TittleInfoBlock";

export const Skills = () => {

    return(
      <motion.div
          initial="hidden"
          whileInView="visible"
          className="skills dark"
          id="skills"
      >
          <div className="container">
              <TittleInfoBlock>Skills</TittleInfoBlock>
              <div className="skills-content">
                  <MSkill customC={1} image={"./images/skills/html-logo.png"} name={"HTML"} description={"Опыт работы 4/5"}/>
                  <MSkill customC={2} image={"./images/skills/css-logo.png"} name={"CSS"} description={"Опыт работы 4/5"}/>
                  <MSkill customC={3} image={"./images/skills/sass-logo.png"} name={"Sass"} description={"Опыт работы 4/5"}/>
                  <MSkill customC={4} image={"./images/skills/js-logo.png"} name={"JS"} description={"Опыт работы 3/5"}/>
                  <MSkill customC={5} image={"./images/skills/bootstrap-logo.png"} name={"Bootstrap"} description={"Опыт работы 4/5"}/>
                  <MSkill customC={6} image={"./images/skills/react-logo.png"} name={"React"} description={"Изучаю 3/5"}/>
                  {/*<MSkill customC={7} image={"./images/skills/redux-logo.png"} name={"Redux"} description={"Изучаю 2/5"}/>*/}
                  <MSkill customC={8} image={"./images/skills/git-logo.png"} name={"Git"} description={"Изучаю 3/5"}/>
                  <MSkill customC={9} image={"./images/skills/figma-logo.png"} name={"Figma"} description={"Опыт работы 4/5"}/>
                  <MSkill customC={10} image={"./images/skills/ps-logo.png"} name={"Photoshop"} description={"Опыт работы 2/5"}/>
                  <MSkill customC={11} image={"./images/skills/tilda-logo.png"} name={"Tilda"} description={"Опыт работы 2/5"}/>
                  <MSkill customC={12} image={"./images/skills/cs-cart-logo.png"} name={"Cs-cart"} description={"Опыт работы 3/5"}/>
              </div>
          </div>
      </motion.div>
    )
}