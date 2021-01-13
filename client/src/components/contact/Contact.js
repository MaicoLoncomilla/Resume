import React, { useState } from 'react';
import fondoContacto from '../../images/imagenFondoContacto.jpg';
import sContainer from '../styles/container.module.css'
import sText from '../styles/text.module.css'
import { useSelector } from 'react-redux';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import axios from 'axios'

export default function Contact(){
    const [ state, setState ] = useState({
        name: "",
        lastName: "",
        email: "",
        asunto: "",
        mensaje: "",
    })
    const active = useSelector(state => state.active);
    const handleTextChange = (name, value) => {
        setState({ ...state, [name]: value });
      };

    const sendEmail = event => {
        event.preventDefault();
        if (state.name === "" || state.lastName === "" || state.email === "" || state.asunto === "" || state.mensaje === "") {
            if (active) {
                return alert('Los campos no pueden estar vacios!')
            } else {
                return alert('Do not enter empty inputs!')
            }
        } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(state.email)) {
            if (active) {
                setState({ ...state, email: "" })
                return alert('El email no es correcto')
            } else {
                setState({ ...state, email: "" })
                return alert('Email is not Correct!')
            }
        }
        axios.post('https://proyectomaico.glitch.me/', state)
            .then(() => {
                setState({
                    name: "",
                    lastName: "",
                    email: "",
                    asunto: "",
                    mensaje: "",
                })
                return alert("Email Enviado")
            })
            .catch(err => {
                return console.log("Error! " + err)
            })
    }
    return (
        <footer className={sContainer.containerSectionFooter} id="section-contact">
            <div style={{ backgroundImage: `url(${fondoContacto})` }} className={sContainer.containerImg}></div>
            <form className={sContainer.containerForm} onSubmit={(e) => sendEmail(e)}>
                <h3 className={sText.textLabelH1} style={{ textAlign: "center" }}>{active ? "Hablemos" : "Contact Me"}</h3>
                <div className={sContainer.containerInput}>
                    <input
                        placeholder={active ? "Nombre" : "First Name"}
                        value={state.name}
                        onChange={e => handleTextChange("name", e.target.value)}
                    />
                    <input
                        placeholder={active ? "Apellido" : "Last Name"}
                        value={state.lastName}
                        onChange={e => handleTextChange("lastName", e.target.value)}
                    />
                </div>
                <div className={sContainer.containerInput}>
                    <input
                        placeholder={active ? "E-mail" : "Your Email"}
                        value={state.email}
                        onChange={e => handleTextChange("email", e.target.value)}
                    />
                    <input
                        placeholder={active ? "Tema" : "Subjet"}
                        value={state.asunto}
                        onChange={e => handleTextChange("asunto", e.target.value)}
                    />
                </div>
                <div className={sContainer.containerInput}>
                    <textarea
                        placeholder={active ? "Mensaje" : "Message"}
                        value={state.mensaje}
                        onChange={e => handleTextChange("mensaje", e.target.value)}
                    />
                </div>
                <button type="submit">{active ? "ENVIAR MENSAJE" : "SUBMIT MESSAGE"}</button>
                <div className={sContainer.containerRedes}>
                    <a rel="noopener noreferrer" target="_BLANK" href="https://www.linkedin.com/in/maicoloncomilla/"><LinkedInIcon /></a>
                    <a rel="noopener noreferrer" target="_BLANK" href="https://github.com/MaicoLoncomilla"><GitHubIcon /></a>
                </div>
            </form>
        </footer>
    )
}