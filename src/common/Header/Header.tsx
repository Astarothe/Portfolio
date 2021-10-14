import React, {useEffect, useRef, useState} from "react";
import s from "./Header.module.scss"
import Link from "react-scroll/modules/components/Link";
import {useSelector} from "react-redux";
import {AppType} from "../../bll/store";
import {NavItemType} from "../../bll/headerReducer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Header = () => {
    const [toggle, setToggle] = useState(false)
    const menu = useSelector<AppType, NavItemType[]>(state => state.header)
    const menuItem = menu.map(t => <li key={t.id} className={s.item}>
        <Link to={t.path} activeClass={s.active}
              spy={true}
              smooth={true}
              offset={t.path === "about" ? 0 : t.path === "contact" ? -0 : -80}
              duration={1000}>
            <FontAwesomeIcon icon={t.icon} color={"white"} size={"sm"} className={s.iconMini}/>
            <p className={s.title}>{t.title}</p>
        </Link>
    </li>)
    const finallyMenu = toggle ? `${s.wrapperList} ${s.active}` : `${s.wrapperList}`

    useEffect(() => {
        toggle ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
    }, [toggle])

    const wrapper = useRef<any>()
    const burgerMenu = useRef<any>()
    const handleDocumentClick = (e: any) => {
        if (wrapper.current && !wrapper.current.contains(e.target) && burgerMenu.current && !burgerMenu.current.contains(e.target)) {
            setToggle(false)
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);
        return () => document.removeEventListener('click', handleDocumentClick);
    }, [])


    return (
        <header>
            <nav className={s.navBar}>
                <div className={s.wrapperToggle} ref={burgerMenu}>
                    <input type="checkbox" checked={toggle} onChange={() => setToggle(!toggle)}/>
                    <span className={s.toggle}></span>
                    <span className={s.toggle}></span>
                    <span className={s.toggle}></span>
                </div>
                <div className={finallyMenu}>
                    <ul className={s.list} ref={wrapper}>
                        {menuItem}
                    </ul>
                </div>
            </nav>
        </header>
    )
}