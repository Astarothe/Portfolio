import React from "react";
import s from "./About.module.scss"
import {Experience} from "./b3-Experience/Experience";
import {Info} from "./b1-Info/Info";
import {Skills} from "./b2-Skills/Skills";
import {Separator} from "../../common/Separator/Separator";

export const About = () => {
    return (
        <section className={s.wrapper} id={"about"}>
            <Info/>
            <Separator/>
            <Skills/>
            <Separator/>
            <Experience/>
            <Separator/>
        </section>
    )
}