import React from "react";
import s from "./Home.module.scss";
import {Button} from "../../common/Button/Button";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons/faArrowRight";
import Particles from "react-particles-js";
import {Fade} from "react-awesome-reveal";

const particlesOpt = {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": true,
                "value_area": 800
            }
        }
    }
}

export const Home = () => {
    return (
        <section className={s.home} id={"home"}>
            <Particles params={particlesOpt} className={s.particles}/>
            <Fade triggerOnce={true} delay={500}>
                <div className={s.wrapper}>
                    <h1>I'm mishel savich.
                        <span>Front-end Developer</span>
                    </h1>
                    <p>
                        I'm a Belorussian based front‑end developer
                        focused on crafting clean & user‑friendly experiences.
                        I am passionate about building excellent software that improves the lives.
                    </p>
                    <Button icon={faArrowRight} link={"about"}>more about me</Button>
                </div>
            </Fade>
        </section>
    )
}