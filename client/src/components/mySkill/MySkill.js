import React from 'react';
import sContainer from '../../styles/container.module.css';
import sText from '../../styles/text.module.css';
import { useSelector } from 'react-redux';
import redux from '../../assets/images/redux.png';
import react from '../../assets/images/React.svg';
import css from '../../assets/images/css.svg';
import html from '../../assets/images/html.svg';
import javascript from '../../assets/images/javascript.png';
import node from '../../assets/images/node.svg';

export default function MySkill() {

    const active = useSelector(state => state.active)

    return (
        <section className={sContainer.containerSectionMySkill} id="section-mySkill">
            <h2 className={sText.textMySkill}>{!active ? "Habilidades" : "My Skills"}</h2>
            <div className={sContainer.containerSectionFrontBack}>
                <div className={sContainer.containerMainProgress}>
                    <h2 className={sText.textMySkillFrontBack}>Front End</h2>
                    <div className={sContainer.imgIcons}>
                        <img src={react} style={{width: 80}} alt="ReactJS React-Native"/>
                        <img src={redux} style={{width: 80}} alt="Redux"/>
                        <img src={css} style={{width: 80}} alt="CSS"/>
                        <img src={html} style={{width: 80}} alt="HTML"/>
                        <img src={javascript} style={{width: 55, padding: '0px 12.5px'}} alt="JavaScript"/>
                    </div>
                </div>
                <div className={sContainer.containerMainProgress}>
                    <h2 className={sText.textMySkillFrontBack}>Back End</h2>
                    <div className={sContainer.imgIconsBack}>
                        <img src={node} alt="NodeJs"/>
                        <p className={sText.express}>Express</p>
                    </div>
                </div>
            </div>
        </section>
    )
}