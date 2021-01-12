import React from 'react';
import fondoContacto from '../../images/imagenFondoContacto.jpg';
import sContainer from '../styles/container.module.css'

export default function Contact(){
    return (
        <footer className={sContainer.containerSectionFooter}>
            <div style={{ backgroundImage: `url(${fondoContacto})` }} className={sContainer.containerImg}></div>
            <form className={sContainer.containerForm}>
                <div className={sContainer.containerInput}>
                    <input placeholder="Name"/>
                    <input placeholder="Email"/>
                </div>
                <div className={sContainer.containerInput}>
                    <input placeholder="Your Email"/>
                    <input placeholder="Subjet"/>
                </div>
                <div className={sContainer.containerInput}>
                    <textarea placeholder="Messages"/>
                </div>
                <button type="submit">SUBMIT MESSAGES</button>
            </form>
        </footer>
    )
}