import React from 'react';
import fondo from '../../images/imagenFondo.jpg'
import sContainer from '../styles/container.module.css'
import sText from '../styles/text.module.css'


export default function SectionImg(){

    return (
        <section className={sContainer.containerSection}>
            <div style={{ backgroundImage: `url(${fondo})` }} className={sContainer.containerImg}></div>
            <div className={sContainer.containerH1}>
                <h1 className={sText.textH1}>Hi, my name is Maico</h1>
                <h1 className={sText.textH1}>and I'm full Stack Web Developer</h1>
            </div>
        </section>
    )
}