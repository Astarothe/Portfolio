import React from "react";
import {Title} from "../../common/Title/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import s from "./Contact.module.scss";
import {Form} from "./Form/Form";
import {useSelector} from "react-redux";
import {AppType} from "../../bll/store";
import {ContactInfoType, ContactLinkType} from "../../bll/contactReducer";


export const Contact = () => {
    const contactsInfo = useSelector<AppType, ContactInfoType[]>(state => state.contact.contactInfo)
    const contactsLink = useSelector<AppType, ContactLinkType[]>(state => state.contact.contactLink)

    const info = contactsInfo.map(t => <p className={s.connect} key={t.id}>
        <a href={t.link} target={"_blank"} rel={"noreferrer"}>
            <FontAwesomeIcon icon={t.icon} color={"white"} size={"sm"}
                             className={`${t.id === 1 ? s.iconMail : s.iconTelephone}`}/>
        </a>
        <span>{t.title}</span>
        <a href={t.link} target={"_blank"} rel={"noreferrer"}>{t.linkText}</a>
    </p>)
    const link = contactsLink.map((t,i) => <li className={s.item} key={i}>
        <a href={t.link} target={"_blank"} rel={"noreferrer"}>
            <img src={t.img} alt=""/>
        </a>
    </li>)

    return (
        <>
            <div className={s.wrapper} id={"contact"}>
                <div className={s.contactWrapper} id={"contact"}>
                    <div className={s.contactInfo}>
                        <Title>Contacts </Title>
                        <p className={s.description}>Feel free to get in touch with me.
                            I am always open to discussing new projects,
                            creative ideas or opportunities to be part of your visions.</p>
                        {info}
                        <ul className={s.listLink}>
                            {link}
                        </ul>
                    </div>
                    <Form/>
                </div>
            </div>
        </>
    )
}
