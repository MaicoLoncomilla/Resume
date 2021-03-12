import React, { useState } from 'react';
import fondoContacto from '../../assets/images/imagenFondoContacto.jpg';
import sContainer from '../../styles/container.module.css';
import sText from '../../styles/text.module.css';
import sButton from '../../styles/button.module.css';
import { useDispatch, useSelector } from 'react-redux';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useAlert } from 'react-alert';
import api from '../../redux/action-creator'

export default function Contact(){
    const [ state, setState ] = useState({
        name: "",
        lastName: "",
        email: "",
        asunto: "",
        mensaje: "",
    })
    const dispatch = useDispatch()
    const active = useSelector(state => state.active);
    const loadingButton = useSelector(state => state.loadingButton);
    const handleTextChange = (name, value) => {
        setState({ ...state, [name]: value });
      };
    const { LOADINGBUTTON } = api
    const alert = useAlert()
    const sendEmail = event => {
        event.preventDefault();
        
        if (!state.name || !state.lastName || !state.email || !state.asunto || !state.mensaje) {
            if (active) {
                return alert.error('Los campos no pueden estar vacios!', { type: "error", timeout: 2500})
            } else {
                return alert.error('Do not enter empty inputs!', { type: "error", timeout: 2500})
            }
        } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(state.email)) {
            if (active) {
                setState({ ...state, email: "" })
                return alert.show('El email no es correcto', { type: "error", timeout: 2500 })
            } else {
                setState({ ...state, email: "" })
                return alert.show('Email is not Correct!', { type: "error", timeout: 2500 })
            }
        }
        dispatch({type: LOADINGBUTTON, payload: !loadingButton})
        dispatch(api.sendEmail(state, alert, active))

        setState({
            name: "",
            lastName: "",
            email: "",
            asunto: "",
            mensaje: "",
        })
    }
    return (
        <footer className={sContainer.containerSectionFooter} id="section-contact">
            <div style={{ backgroundImage: `url(${fondoContacto})` }} className={sContainer.containerImg}></div>
            <form className={sContainer.containerForm} onSubmit={(e) => sendEmail(e)}>
                <h3 className={sText.textLabelH1} style={{ textAlign: "center" }}>{!active ? "Hablemos" : "Contact Me"}</h3>
                <div className={sContainer.containerInput}>
                    <input
                        placeholder={!active ? "Nombre" : "First Name"}
                        value={state.name}
                        onChange={e => handleTextChange("name", e.target.value)}
                    />
                    <input
                        placeholder={!active ? "Apellido" : "Last Name"}
                        value={state.lastName}
                        onChange={e => handleTextChange("lastName", e.target.value)}
                    />
                </div>
                <div className={sContainer.containerInput}>
                    <input
                        placeholder={!active ? "E-mail" : "Your Email"}
                        value={state.email}
                        onChange={e => handleTextChange("email", e.target.value)}
                    />
                    <input
                        placeholder={!active ? "Tema" : "Subjet"}
                        value={state.asunto}
                        onChange={e => handleTextChange("asunto", e.target.value)}
                    />
                </div>
                <div className={sContainer.containerInput}>
                    <textarea
                        placeholder={!active ? "Mensaje" : "Message"}
                        value={state.mensaje}
                        onChange={e => handleTextChange("mensaje", e.target.value)}
                    />
                </div>
                <button type="submit" className={loadingButton ? sButton.button_loading : null}>
                    <span className={loadingButton ? sButton.span_loading : null}>
                        {!active ? "ENVIAR MENSAJE" : "SUBMIT MESSAGE"}
                    </span>
                </button>
                <div className={sContainer.containerRedes}>
                    <a rel="noopener noreferrer" target="_BLANK" href="https://www.linkedin.com/in/maicoloncomilla/">
                        <LinkedInIcon fontSize="large" />
                    </a>
                    <a rel="noopener noreferrer" target="_BLANK" href="https://github.com/MaicoLoncomilla">
                        <GitHubIcon fontSize="large" />
                    </a>
                </div>
            </form>
        </footer>
    )
}