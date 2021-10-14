import React, {FC} from "react";
import s from "./Input.module.scss"

type InputType = {
    type: string
    placeholder: string
    name: string
    id?: string
}

export const Input: FC<InputType> = ({type, placeholder, name, id}) => {
    return (
        <input type={type} name={name} placeholder={placeholder} className={s.input} id={id}/>
    )
}
