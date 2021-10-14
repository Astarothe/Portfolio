import React from "react";
import s from "./Portfolio.module.scss"
import {Project} from "./Project/Project";
import {useSelector} from "react-redux";
import {AppType} from "../../bll/store";
import {PortfolioState} from "../../bll/portfolioReducer";
import {Fade, Slide} from "react-awesome-reveal";
import {Title} from "../../common/Title/Title";
import {Separator} from "../../common/Separator/Separator";

export const Portfolio = () => {
    const projects = useSelector<AppType, PortfolioState[]>(state => state.portfolio)
    const allProjects = projects.map((t) =>
        <Slide triggerOnce={true} duration={1500} delay={200} key={t.id} direction={"up"} className={s.animateWrapper}>
            <Fade duration={1500} delay={200} className={s.animate} triggerOnce={true}>
                <Project
                    id={t.id}
                    title={t.title}
                    link={t.link}
                    backgroundImg={t.backgroundImg}
                    description={t.description}/>
            </Fade>
        </Slide>
    )

    return (
        <>
            <div className={s.portfolioWrapper} id={"portfolio"}>
                <Title center={true}>Portfolio</Title>
                <ul className={s.list}>
                    {allProjects}
                </ul>
            </div>
        </>
    )
}