import React from 'react';
import fondo from '../../images/imagenFondo.jpg'
import sContainer from '../styles/container.module.css'
import sText from '../styles/text.module.css'


export default function SectionImg(){

    return (
        <section className={sContainer.containerSection}>
            <div style={{ backgroundImage: `url(${fondo})` }} className={sContainer.containerImg}></div>
            <div className={sContainer.containerH1}>
                <h1 className={sText.textH1}>Hi, I'm Maico</h1>
                <h1 className={sText.textH1}>and I'm <label className={sText.textLabelH1}>Full Stack Web Developer</label></h1>
            </div>
        </section>
    )
}