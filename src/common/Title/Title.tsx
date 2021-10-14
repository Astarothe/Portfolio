import React, {FC} from "react";
import s from "./Title.module.scss"

type TitleType = {
    center?: boolean
    style?: any
}

export const Title: FC<TitleType> = ({center, children,style}) => {
    const resultClass = center ? `${s.title} ${s.center}` : `${s.title}`
    return (
        <h3 className={resultClass} {...style}>{children}</h3>
    )
}
