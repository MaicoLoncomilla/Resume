import axios from 'axios';

const actionCreator = {

    IDIOMA: "IDIOMA",
    
    sendEmail: function (data, alert, active) {
        return dispatch => {
            const promise = axios.post('https://proyectomaico.glitch.me/', data)
            this._dispatchPromise(promise, dispatch, alert, active)
        }
    },
    
    LOADINGBUTTON: "LOADINGBUTTON",

    _dispatchPromise: function (promise, dispatch, alert, active) {
        return promise
            .then(() => {
                dispatch({ type: this.LOADINGBUTTON, payload: false })
                if (active) {
                    return alert.show('Email enviado correctamente!', { type: "success", timeout: 2500 })
                } else {
                    return alert.show('Email sent successfully', { type: "success", timeout: 2500 })
                }
            })
            .catch(err => {
                if (active) {
                    return alert.show(`Ocurrio un Error ${err}`, { type: "error", timeout: 2500 })
                } else {
                    return alert.show(`Error! ${err}`, { type: "error", timeout: 2500 })
                }
            })
    }
}

export default actionCreator;