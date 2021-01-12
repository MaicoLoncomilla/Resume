import React from 'react';
import sContainer from '../styles/container.module.css'
import sText from '../styles/text.module.css'

export default function Header(){
    return (
        <nav className={sContainer.containerHeader}>
            <p className={sText.textP}>My Projects</p>
            <p className={sText.textP}>My Skills</p>
            <p className={sText.textP}>Contacts</p>
            <p className={sText.textP}>cambiar a un switch</p>
        </nav>
    )
}