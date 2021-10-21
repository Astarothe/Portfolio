import React from "react";
import s from "./Info.module.scss"
import {useSelector} from "react-redux";
import {AppType} from "../../../bll/store";
import {InfoType} from "../../../bll/infoReducer";
import {Title} from "../../../common/Title/Title";
import {Button} from "../../../common/Button/Button";
import {faDownload} from "@fortawesome/free-solid-svg-icons/faDownload";
import codewars from "../../../assets/icons/codewars-icon.svg"
import github from "../../../assets/icons/github-icon.svg"


export const Info = () => {
    const info = useSelector<AppType, InfoType[]>(state => state.info)
    return (
        <div className={s.infoContainer}>
            <div className={s.infoWrapper}>
                <Title>Personal infos</Title>
                <ul className={s.infoList}>
                    {
                        info.map(t => <li key={t.id} className={s.infoItem}>
                            <span className={s.title}>{t.title} </span>
                            <span className={s.value}>{t.value}</span>
                        </li>)
                    }
                </ul>
                <Button icon={faDownload} download={true}>Download cv</Button>
            </div>
            <div className={s.links}>
                <ul>
                    <li>
                        <a href="https://www.codewars.com/users/Astarothe" target={"_blank"} rel={"noreferrer"}>
                            <img src={codewars} alt="codewars"/>
                            <p>CodeWars</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Astarothe" target={"_blank"} rel={"noreferrer"}>
                            <img src={github} alt="github"/>
                            <p>GitHub</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

