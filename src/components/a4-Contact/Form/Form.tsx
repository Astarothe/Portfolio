import s from "./Form.module.scss";
import {Button} from "../../../common/Button/Button";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import React from "react";
import {Input} from "../../../common/Input/Input";

export const Form = () => {
    return (
        <div className={s.formWrapper}>
            <form action="https://formspree.io/f/xpzknnwz" method={"POST"}>
                <Input type="text" name="name" placeholder={"your name"}/>
                <Input type="email" name="email" placeholder={"your email"}/>
                <Input type="text" name="subject" placeholder={"your subject"}/>
                <textarea placeholder={"your message"} name={"message"}/>
                <Button icon={faPaperPlane} type={"submit"}>send message</Button>
            </form>
        </div>
    )
}