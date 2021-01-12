import actionCreator from './action-creator'

const { IDIOMA } = actionCreator

const initialState = {
    active: false
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case IDIOMA:
            return {
                ...state,
                active: action.payload
            }
        default:
            return {...state}
    }
}
export default reducer