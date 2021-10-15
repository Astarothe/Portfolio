import React from "react";
import {Title} from "../../../common/Title/Title";
import s from "./Experience.module.scss"
import {Education} from "./Education/Education";
import {Fade} from "react-awesome-reveal";
import {useSelector} from "react-redux";
import {AppType} from "../../../bll/store";
import {EducationType} from "../../../bll/educationReducer";

export const Experience = () => {
    const education = useSelector<AppType, EducationType[]>(state => state.education)
    return (
        <Fade triggerOnce={true} direction={"left"} duration={1000} delay={500} className={s.wrapper}>
            <div>
                <Title center={true}>experience & education</Title>
                <ul className={s.list}>
                    {education.map((t, i) =>
                        <Education key={i} year={t.year}
                                   title={t.title}
                                   subtitle={t.subtitle}
                                   description={t.description}/>)}
                </ul>
            </div>
        </Fade>
    )
}
