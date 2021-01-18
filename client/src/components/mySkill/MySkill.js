import React from 'react';
import sContainer from '../styles/container.module.css';
import sText from '../styles/text.module.css';
import { useSelector } from 'react-redux';
import redux from '../../images/redux.png';
import react from '../../images/React.svg';
import css from '../../images/css.svg';
import html from '../../images/html.svg';
import javascript from '../../images/javascript.png';
import node from '../../images/node.svg';

export default function MySkill() {

    const active = useSelector(state => state.active)

    return (
        <section className={sContainer.containerSectionMySkill} id="section-mySkill">
            <h2 className={sText.textMySkill}>{active ? "Habilidades" : "My Skills"}</h2>
            <div className={sContainer.containerSectionFrontBack}>
                <div className={sContainer.containerMainProgress}>
                    <h2 className={sText.textMySkillFrontBack}>Front End</h2>
                    <div className={sContainer.imgIcons}>
                        <img src={react}/>
                        <img src={redux}/>
                        <img src={css}/>
                        <img src={html}/>
                        <img src={javascript}/>
                    </div>
                </div>
                <div className={sContainer.containerMainProgress}>
                    <h2 className={sText.textMySkillFrontBack}>Back End</h2>
                    <div className={sContainer.imgIconsBack}>
                        <img src={node}/>
                        <p className={sText.express}>Express</p>
                    </div>
                </div>
            </div>
        </section>
    )
}