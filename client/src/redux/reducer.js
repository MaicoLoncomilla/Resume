import actionCreator from './action-creator';

const { IDIOMA, LOADINGBUTTON } = actionCreator;

const initialState = {
    active: false,
    loadingButton: false
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case IDIOMA:
            return {
                ...state,
                active: action.payload
            }
        case LOADINGBUTTON:
            return {
                ...state,
                loadingButton: action.payload
            }
        default:
            return {...state}
    }
}
export default reducer