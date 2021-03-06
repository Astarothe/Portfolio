import {combineReducers, createStore} from "redux";
import {infoReducer} from "./infoReducer";
import {skillReducer} from "./skillReducer";
import {educationReducer} from "./educationReducer";
import {portfolioReducer} from "./portfolioReducer";
import {contactReducer} from "./contactReducer";
import {headerReducer} from "./headerReducer";

const rootReducer = combineReducers({
    info: infoReducer,
    skills: skillReducer,
    education: educationReducer,
    portfolio: portfolioReducer,
    contact: contactReducer,
    header: headerReducer,
})

export const store = createStore(rootReducer)

export type AppType = ReturnType<typeof rootReducer>