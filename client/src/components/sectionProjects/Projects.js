import React from 'react';
import sContainer from '../styles/container.module.css'
import sText from '../styles/text.module.css'
import sButton from '../styles/button.module.css'

export default function Projects({ title, description, front, back, database, direction, link, image }) {
    return (
        <div className={sContainer.containerSectionProjects} style={{ flexDirection: direction }}>
            <img src={image} alt="image-project" />
            <div className={sContainer.containerSectionProjectsDiv}>
                <p className={sText.textP}>Title:
                    <label className={sText.textLabel}> {title}</label>
                </p>
                <p className={sText.textP}>Description:
                    <label className={sText.textLabel}> {description}</label>
                </p>
                <p className={sText.textP}>FE:
                    <label className={sText.textLabel}> {front}</label>
                </p>
                <p className={sText.textP}>BE:
                    <label className={sText.textLabel}> {back}</label>
                </p>
                <p className={sText.textP}>Database:
                    <label className={sText.textLabel}> {database}</label>
                </p>
                <button className={sButton.buttonLink}>
                    <a className={sButton.aLink} href={link} target="_BLANK" rel="noopener noreferrer">OPEN</a>
                </button>
            </div>
        </div>
    )
}