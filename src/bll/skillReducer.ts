import react from "../assets/icons/react-icon.svg"
import redux from "../assets/icons/redux-icon.svg"
import restApi from "../assets/icons/rest-api-icon.svg"
import sass from "../assets/icons/sass-icon.svg"
import html from "../assets/icons/html-icon.svg"
import css from "../assets/icons/css-icon.svg"

const initialState: SkillType[] = [
    {img: react, name: "React"},
    {img: redux, name: "Redux"},
    {img: restApi, name: "REST API"},
    {img: sass, name: "Sass"},
    {img: "JS", name: "JavaScript"},
    {img: "TS", name: "TypeScript"},
    {img: html, name: "HTML5"},
    {img: css, name: "CSS"},
]

export const skillReducer = (state: SkillType[] = initialState, action: any): SkillType[] => {
    switch (action) {
        default:
            return state
    }
}

export type SkillType = {
    img: string
    name: string
}