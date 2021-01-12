import React from 'react';
import sContainer from '../styles/container.module.css'
import sText from '../styles/text.module.css'

export default function Projects({ title, description, front, back, database, direction }) {
    return (
        <div className={sContainer.containerSectionProjects} style={{flexDirection: direction}}>
            <img src="https://i.pinimg.com/originals/86/dd/34/86dd3444079e2558c0623a6bff0ea4f0.jpg" />
            <div>
                <p className={sText.textP}>Title: {title}</p>
                <p className={sText.textP}>Description: {description}</p>
                <p className={sText.textP}>FE: {front}</p>
                <p className={sText.textP}>BE: {back}</p>
                <p className={sText.textP}>Database: {database}</p>
            </div>
        </div>
    )
}