import React, {FC} from "react";
import s from "./Education.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons/faBriefcase";
import {Fade} from "react-awesome-reveal";
import {EducationType} from "../../../../bll/educationReducer";


export const Education: FC<EducationType> = ({year, title, subtitle, description}) => {
    return (
        <li className={s.item}>
            <div className={s.iconWrapper}>
                <FontAwesomeIcon icon={faBriefcase} color={"white"} size={"sm"} className={s.iconMini}/>
            </div>
            <Fade className={s.fade} delay={500} duration={1000}>
                <div></div>
            </Fade>

            <span className={s.year}>{year}</span>
            <h5 className={s.title}>{title} <span className={s.separator}>-</span><span
                className={s.subtitle}>{subtitle}</span></h5>
            <p className={s.description}>{description}</p>
        </li>
    )
}
