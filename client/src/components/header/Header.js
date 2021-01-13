import React, { useState } from 'react';
import sContainer from '../styles/container.module.css';
import sText from '../styles/text.module.css';
import sButton from '../styles/button.module.css';
import { useDispatch, useSelector } from "react-redux";
import api from '../../redux/action-creator';
import DehazeIcon from '@material-ui/icons/Dehaze';

export default function Header(){

    const { IDIOMA } = api;
    const active = useSelector(state => state.active);
    const [ activeSideBar, setActiveSideBar ] = useState(false);
    const [ language, setLanguage ] = useState(active);
    const dispatch = useDispatch();
    const changeLanguage = () => {
        setLanguage(!language)
        dispatch({
            type: IDIOMA,
            payload: language
        })
    }
    return (
        <nav className={sContainer.containerHeader}>
            <div className={sButton.containerNone}>
                <a href="#section-projects" className={sText.textA}>{active ? "Proyectos" : "My Projects"}</a>
                <a href="#section-mySkill" className={sText.textA}>{active ? "Habilidades" : "My Skills"}</a>
                <a href="#section-contact" className={sText.textA}>{active ? "Hablemos" : "Let's talk"}</a>
                <button onClick={() => changeLanguage()} className={sButton.changeLanguage}>{active ? "English" : "Spanish"}</button>
            </div>
            <div className={sButton.iconEnable} onClick={() => setActiveSideBar(!activeSideBar)}>
                <DehazeIcon  fontSize="large"/>
            </div>
            {activeSideBar && 
            <div className={sContainer.containerEnable}>
                <a href="#section-projects" onClick={() => setActiveSideBar(!activeSideBar)} className={sText.textA}>{active ? "Proyectos" : "My Projects"}</a>
                <a href="#section-mySkill" onClick={() => setActiveSideBar(!activeSideBar)} className={sText.textA}>{active ? "Habilidades" : "My Skills"}</a>
                <a href="#section-contact" onClick={() => setActiveSideBar(!activeSideBar)} className={sText.textA}>{active ? "Hablemos" : "Let's talk"}</a>
                <button onClick={() => {
                    changeLanguage();
                    setActiveSideBar(!activeSideBar)
                    }} className={sButton.changeLanguage}>{active ? "English" : "Spanish"}</button>
            </div>
            }
        </nav>
    )
}