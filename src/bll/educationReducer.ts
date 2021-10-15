const initialState: EducationType[] = [
    {
        year: "2021 - now",
        title: "Front-end / React developer",
        subtitle: "IT-Incubator",
        description: "Stack: React, Redux (Thunk), Typescript, Javascript, Axios, TDD, Material-UI, Jest, Git and GitHub, HTML, CSS, SCSS.",
    },
    {
        year: "2020 - 2020",
        title: "JavaScript / Front-end developer",
        subtitle: "The Rolling Scopes",
        description: "Stack: Javascript, HTML, CSS (Adaptive layout, cross browser), Git and GitHub.",
    },
    {
        year: "2020 - 2020",
        title: "HTML and CSS. Adaptive layout and automation",
        subtitle: "HTML-Academy",
        description: "Stack: Javascript, HTML, CSS (Adaptive layout, Accessibility), Less, Git and GitHub.",
    },
    {
        year: "2019 - 2020",
        title: "HTML and CSS. Professional website layout",
        subtitle: "HTML-Academy",
        description: "Stack: HTML, CSS (Adaptive layout, Accessibility), Git and GitHub.",
    }
]

export const educationReducer = (state: EducationType[] = initialState, action: any): EducationType[] => {
    switch (action) {
        default:
            return state
    }
}

export type EducationType = {
    year: string
    title: string
    subtitle: string
    description: string
}