const initialState: InfoType[] = [
    {
        title: "First name :",
        value: "Michel",
        id: 1,
    },
    {
        title: "Location :",
        value: "Belarus",
        id: 2,
    },
    {
        title: "Last name :",
        value: "Savich",
        id: 3,
    },
    {
        title: "Address :",
        value: "Novopolock",
        id: 4,
    },
    {
        title: "Age :",
        value: "23 Years",
        id: 5,
    },
    {
        title: "Phone :",
        value: "+375295956879",
        id: 6,
    },
    {
        title: "Nationality :",
        value: "Belorussian",
        id: 7,
    },
    {
        title: "Telegram :",
        value: "Astarothqq",
        id: 8,
    },
]

export const infoReducer = (state: InfoType[] = initialState, action: any): InfoType[] => {
    switch (action) {
        default:
            return state
    }
}

export type InfoType = {
    title: string
    value: string
    id: number
}