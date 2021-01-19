import React from 'react';
import sContainer from '../styles/container.module.css';
import sText from '../styles/text.module.css';
import sButton from '../styles/button.module.css';
import { useDispatch, useSelector } from "react-redux";
import api from '../../redux/action-creator';
import LanguageIcon from '@material-ui/icons/Language';
import DescriptionIcon from '@material-ui/icons/Description';
import cvEspañol from '../../cv/maicoloncomillaCV_Español.pdf'
import cvIngles from '../../cv/maicoloncomillaCV_English.pdf'

export default function Header(){

    const { IDIOMA } = api;
    const active = useSelector(state => state.active);
    const dispatch = useDispatch();
    const changeLanguage = () => {
        dispatch({
            type: IDIOMA,
            payload: !active
        })
    }
    return (
        <nav className={sContainer.containerHeader} >
            <div
                className={sContainer.containerButton}
                onClick={() => changeLanguage()} >
                <div className={sContainer.containerIconA}>
                    <LanguageIcon className={sText.Icon} />
                    <p className={sText.textA}>{active ? "English" : "Spanish"}</p>
                </div>
            </div>
            <form
                className={sContainer.containerFormHeader}
                action={active ? cvEspañol : cvIngles}
                method="GET"
                target="_blank"
                >
                <div className={sContainer.containerIconA}>
                    <DescriptionIcon className={sText.Icon} />
                    <button
                        className={sButton.buttonCV}
                        type="submit">{active ? "Descargar CV" : "Download CV"}
                    </button>
                </div>
            </form>
        </nav>
    )
}