import React, {FC} from "react";
import s from "./Project.module.scss"
import {PortfolioState} from "../../../bll/portfolioReducer";

export const Project: FC<PortfolioState> = ({backgroundImg, link, description, title}) => {
    return (
        <>
            <li className={s.item}>
                <figure style={backgroundImg}>
                    <a href={link.site} target={"_blank"} rel="noopener noreferrer">
                        site
                    </a>
                    <a href={link.code} target={"_blank"} rel="noopener noreferrer">
                        code
                    </a>
                </figure>
                <p className={s.description}>
                    <span className={s.title}>{title}</span>
                    Technology stack: <span>{description}</span>
                </p>
            </li>
        </>
    )
}