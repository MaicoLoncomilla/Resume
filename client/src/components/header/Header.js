import React, { useState } from 'react';
import sContainer from '../styles/container.module.css';
import sText from '../styles/text.module.css';
import sButton from '../styles/button.module.css';
import { useDispatch, useSelector } from "react-redux";
import api from '../../redux/action-creator';

export default function Header(){

    const { IDIOMA } = api;
    const active = useSelector(state => state.active);
    const dispatch = useDispatch();
    const [ language, setLanguage ] = useState(active)
    const changeLanguage = () => {
        setLanguage(!language)
        dispatch({
            type: IDIOMA,
            payload: language
        })
    }
    return (
        <nav className={sContainer.containerHeader}>
            <p className={sText.textP}>{active ? "Proyectos" : "My Projects"}</p>
            <p className={sText.textP}>{active ? "Habilidades" : "My Skills"}</p>
            <p className={sText.textP}>{active ? "Hablemos" : "Let's talk"}</p>
            <button onClick={() => changeLanguage()} className={sButton.changeLanguage}>{active ? "English" : "Spanish"}</button>
        </nav>
    )
}