import React from 'react';
import sContainer from '../styles/container.module.css';
import sText from '../styles/text.module.css';
import { arrayFront, arrayBack } from '../utils/array';
import { useSelector } from 'react-redux';

export default function MySkill() {

    const active = useSelector(state => state.active)

    return (
        <section className={sContainer.containerSectionMySkill} id="section-mySkill">
            <h2 className={sText.textMySkill}>{active ? "Habilidades" : "My Skills"}</h2>
            <div className={sContainer.containerSectionFrontBack}>
                <div className={sContainer.containerMainProgress}>
                    <h2 className={sText.textMySkillFrontBack}>Front End</h2>
                    {arrayFront.map((el, index) =>
                        <div className={sContainer.containerProgress} key={index}>
                            <div>
                                <label className={sText.labelTitleMySkill}>{el.title}</label>
                                <label className={sText.labelTitleMySkill}>{el.value}%</label>
                            </div>
                            <progress max={100} value={el.value} />
                        </div>
                    )}

                </div>
                <div className={sContainer.containerMainProgress}>
                    <h2 className={sText.textMySkillFrontBack}>Back End</h2>
                    {arrayBack.map((el, index) =>
                        <div className={sContainer.containerProgress} key={index}>
                            <div>
                                <label className={sText.labelTitleMySkill}>{el.title}</label>
                                <label className={sText.labelTitleMySkill}>{el.value}%</label>
                            </div>
                            <progress max={100} value={el.value} />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}