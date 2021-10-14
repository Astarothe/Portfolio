import React from 'react';
import s from './App.module.scss';
import {Home} from "./components/a1-Home/Home";
import {About} from './components/a2-About/About';
import {Portfolio} from "./components/a3-Portfolio/Portfolio";
import {Contact} from "./components/a4-Contact/Contact";
import {Separator} from "./common/Separator/Separator";
import {Header} from "./common/Header/Header";

function App() {
    return (
        <>
            <Header />
            <main>
                <Home/>
                <About/>
                <Portfolio/>
                <div className={s.wrapper}>
                    <Separator/>
                </div>
                <Contact/>
            </main>
        </>
    );
}

export default App;
