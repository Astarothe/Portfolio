import React from "react";
import s from "./Skills.module.scss"
import {Title} from "../../../common/Title/Title";
import {useSelector} from "react-redux";
import {AppType} from "../../../bll/store";
import {SkillType} from "../../../bll/skillReducer";
import {Fade, Flip, Slide} from "react-awesome-reveal";

export const Skills = () => {
    const skills = useSelector<AppType, SkillType[]>(state => state.skills)
    const skillList = skills.map((t, i) =>
        <Fade key={i} triggerOnce={true} direction={i % 2 === 0 ? "left" : "left"}
              duration={1000 + (i * i)} className={s.wrapperFade}
              delay={25 * i}>
            <Slide triggerOnce={true} direction={i % 2 === 0 ? "left" : "up"} duration={1000 + (i * i)}
                   delay={25 * i}>
                <Flip duration={3000} delay={(i * 10)} direction={"vertical"} triggerOnce={true}>
                    <li className={s.item}>
                        <div>
                            {t.img === "JS" || t.img === "TS"
                                ? <p>{t.img}</p>
                                : <img src={t.img} alt={t.name}/>}
                        </div>
                        <p>{t.name}</p>
                    </li>
                </Flip>
            </Slide>
        </Fade>
    )
    return (
        <div className={s.wrapper}>
            <Title center={true}>My skills</Title>
            <ul className={s.list}>
                {skillList}
            </ul>
        </div>
    )
}