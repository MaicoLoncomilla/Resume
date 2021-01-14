import React from 'react';
import fondo from '../../images/posibleFondo.jpg'
import sContainer from '../styles/container.module.css'
import sText from '../styles/text.module.css'
import sButton from '../styles/button.module.css'
import { useSelector } from 'react-redux';

export default function SectionImg(){

    const active = useSelector(state => state.active)

    return (
        <section className={sContainer.containerSection}>
            <div style={{ backgroundImage: `url(${fondo})` }} className={sContainer.containerImg}></div>
            <div className={sContainer.containerH1}>
                <h1 className={sText.textH1}>{active ? "Hola, soy Maico y" : " Hi, I'm Maico and"}</h1>
                <h1 className={sText.textH1}>{active ? " soy" : " I'm"}
                    <label className={sText.textLabelH1}>{active ? " Desarrollador Web," : " Web Developer,"}</label>
                </h1>
                <h3 className={sText.textH3}>
                    <label>{active ? " apasionado por lo que hago," : " passionate about what i do,"}</label>
                </h3>
                <h3 className={sText.textH3}>
                    <label> {active ? " y siempre aprendiendo algo nuevo." : " and always learning something new."}</label>
                </h3>
                <button className={sButton.buttonLink}>
                    <a className={sButton.aLink2}href="#section-contact" >{active ? "Hablemos" : "Let's talk"}</a>
                </button>
            </div>
        </section>
    )
}