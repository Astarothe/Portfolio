import {faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons/faEnvelopeOpen";
import {faPhoneSquareAlt} from "@fortawesome/free-solid-svg-icons/faPhoneSquareAlt";
import telegram from "../assets/icons/telegrams-icon.svg";
import linkedin from "../assets/icons/linkedin-icon.svg";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

const initialState: ContactType = {
    contactInfo: [
        {
            link: "mailto:minatosavich@gmail.com",
            linkText: "minatosavich@gmail.com",
            icon: faEnvelopeOpen,
            title: "Mail me",
            id: 1,
        },
        {
            link: "tel:+375295956879",
            linkText: "+37529 595 68 79",
            icon: faPhoneSquareAlt,
            title: "Call me",
            id: 2,
        }],
    contactLink: [
        {
            link: "https://telegram.me/Astarothqq",
            img: telegram,
        },
        {
            link: "https://linkedin.com/in/michel-savich",
            img: linkedin,
        },
    ]
}

export const contactReducer = (state: ContactType = initialState, action: any): ContactType => {
    switch (action) {
        default:
            return state
    }
}

export type ContactType = {
    contactInfo: ContactInfoType[],
    contactLink: ContactLinkType[],
}

export type ContactInfoType = {
    link: string,
    linkText: string,
    icon: IconProp,
    title: string,
    id: number,
}
export type ContactLinkType = {
    link: string,
    img: string,
}