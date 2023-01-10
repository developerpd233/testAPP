const reducer = (state={}, action) => {
    switch(action.type){
        case 'THEME_SELECTION': {
         return {...state, theme: action.theme}
        }
        default: {
            return {state}
        }
    }
}
export default reducer