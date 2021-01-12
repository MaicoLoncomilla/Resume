import React from 'react';
import fondoContacto from '../../images/imagenFondoContacto.jpg';
import sContainer from '../styles/container.module.css'
import sText from '../styles/text.module.css'
import { useSelector } from 'react-redux';

export default function Contact(){

    const active = useSelector(state => state.active);

    return (
        <footer className={sContainer.containerSectionFooter}>
            <div style={{ backgroundImage: `url(${fondoContacto})` }} className={sContainer.containerImg}></div>
            <form className={sContainer.containerForm}>
                <h3 className={sText.textLabelH1} style={{textAlign: "center"}}>{active ? "Hablemos" : "Contact Me"}</h3>
                <div className={sContainer.containerInput}>
                    <input placeholder={active ? "Nombre" : "First Name"}/>
                    <input placeholder={active ? "Apellido" : "Last Name"}/>
                </div>
                <div className={sContainer.containerInput}>
                    <input placeholder={active ? "E-mail" : "Your Email"}/>
                    <input placeholder={active ? "Tema" : "Subjet"}/>
                </div>
                <div className={sContainer.containerInput}>
                    <textarea placeholder={active ? "Mensaje" : "Message"}/>
                </div>
                <button type="submit">{active ? "ENVIAR MENSAJE" : "SUBMIT MESSAGE"}</button>
            </form>
        </footer>
    )
}