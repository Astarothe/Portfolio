import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons/faBriefcase";
import {faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons/faEnvelopeOpen";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";

const initialState: NavItemType[] = [
    {
        title: "home",
        icon: faHome,
        path: "home",
        id: 1,
    },
    {
        title: "about",
        icon: faUser,
        path: "about",
        id: 2,
    },
    {
        title: "portfolio",
        icon: faBriefcase,
        path: "portfolio",
        id: 3,
    },
    {
        title: "contact",
        icon: faEnvelopeOpen,
        path: "contact",
        id: 4,
    },
]

export const headerReducer = (state: NavItemType[] = initialState, action: any): NavItemType[] => {
    switch (action) {
        default:
            return state
    }
}

export type NavItemType = {
    title: string,
    icon: IconDefinition,
    path: string,
    id: number
}