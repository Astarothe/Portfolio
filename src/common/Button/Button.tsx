import s from "./Button.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {FC} from "react";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import Links from "react-scroll/modules/components/Link";
//@ts-ignore
import sv from "../../assets/cv/CV_Mishel_Savich.pdf"

type ButtonType = {
    icon: IconProp
    link?: string
    type?: "submit"
    download?: boolean
}

export const Button: FC<ButtonType> = ({icon, link, type, children, download}) => {
    const formButton = !!type;
    return (
        <>
            {formButton
                ? <button type={type} className={s.button}>
                    <span>{children}</span>
                    <span className={s.buttonIcon}>
                            <FontAwesomeIcon icon={icon} color={"white"} size={"1x"} className={s.icon}/>
                    </span>
                </button>
                :
                !download
                    ? <Links className={s.button} to={link || "#"}
                             spy={true}
                             smooth={true}
                             offset={0}
                             duration={1000}>
                        <span>{children}</span>
                        <span className={s.buttonIcon}>
                            <FontAwesomeIcon icon={icon} color={"white"} size={"1x"} className={s.icon}/>
                    </span>
                    </Links>
                    : <a href={sv} download className={s.button} target={"_blank"} rel="noreferrer">
                        <span>{children}</span>
                        <span className={s.buttonIcon}>
                            <FontAwesomeIcon icon={icon} color={"white"} size={"1x"} className={s.icon}/>
                    </span>
                    </a>}
        </>
    )
}