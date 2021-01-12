import React from 'react';
import sContainer from '../styles/container.module.css'
import sText from '../styles/text.module.css'

export default function Header(){
    return (
        <nav className={sContainer.containerHeader}>
            <p className={sText.textP}>Spanish</p>
        </nav>
    )
}