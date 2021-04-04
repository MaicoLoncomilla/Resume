import React from 'react';
import sContainer from '../../styles/container.module.css'
import sText from '../../styles/text.module.css'
import sButton from '../../styles/button.module.css'
import { useSelector } from 'react-redux';

export default function Projects({ title, description, front, back, database, direction, link, image, linkGithub }) {
    const active = useSelector(state => state.active)
    return (
        <div className={sContainer.containerSectionProjects} style={{ flexDirection: direction }}>
            <img src={image} loading="lazy" alt="imageProject" />
            <div className={sContainer.containerSectionProjectsDiv}>
                <p className={sText.textP}>{!active ? "Titulo: " : "Title: "}
                    <label className={sText.textLabel}> {title}</label>
                </p>
                <p className={sText.textP}>{!active ? "Descripción: " : "Description: "}
                    <label className={sText.textLabel}> {description}</label>
                </p>
                <p className={sText.textP}>FE:
                    <label className={sText.textLabel}> {front}</label>
                </p>
                <p className={sText.textP}>BE:
                    <label className={sText.textLabel}> {back}</label>
                </p>
                <p className={sText.textP}>{!active ? "Base de Datos: " : "Database: "}
                    <label className={sText.textLabel}> {database}</label>
                </p>
                <p className={sText.textP}>{!active ? "Codigo: " : "Code: "}
                    <a href={linkGithub} className={sText.aTextA} target="_BLANK" rel="noopener noreferrer">{!active ? "Click aqui" : "Click Here"}</a>
                </p>
                <button className={sButton.buttonLink}>
                    <a className={sButton.aLink} href={link} target="_BLANK" rel="noopener noreferrer">{!active ? "ABRIR" : "OPEN"}</a>
                </button>
            </div>
        </div>
    )
}