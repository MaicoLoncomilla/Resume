import React from 'react';
import sContainer from '../styles/container.module.css';
import sText from '../styles/text.module.css';
import { arrayFront, arrayBack } from '../utils/array';

export default function MySkill() {

    return (
        <section className={sContainer.containerSectionMySkill}>
            <h2 className={sText.textMySkill}>My Skills</h2>
            <div className={sContainer.containerSectionFrontBack}>
                <div className={sContainer.containerMainProgress}>
                    <h2 className={sText.textMySkillFrontBack}>Front End</h2>
                    {arrayFront.map(el =>
                        <div className={sContainer.containerProgress}>
                            <div>
                                <label>{el.title}</label>
                                <label>{el.value}%</label>
                            </div>
                            <progress max={100} value={el.value} />
                        </div>
                    )}

                </div>
                <div className={sContainer.containerMainProgress}>
                    <h2 className={sText.textMySkillFrontBack}>Back End</h2>
                    {arrayBack.map(el =>
                        <div className={sContainer.containerProgress}>
                            <div>
                                <label>{el.title}</label>
                                <label>{el.value}%</label>
                            </div>
                            <progress max={100} value={el.value} />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}