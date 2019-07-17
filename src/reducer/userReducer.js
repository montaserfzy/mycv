import {ACTIONS} from '../types/userTypes';

const initState = {
    session: null,
    isAbdulah: false,
    isMonty: false,
    error: '',
    success: '',
    isOpenNav:false
};

function UserReducer(state = initState, action) {

    switch (action.type) {
        case ACTIONS.SET_SESSION:
            return {...state, session: action.session};

        case ACTIONS.SET_KHALED_SESSION:
            return {...state, session: action.session};

        case ACTIONS.SET_ERROR:
            return {...state, error: action.error};

        case ACTIONS.SET_SUCCESS:
            return {...state, success: action.success};

        case ACTIONS.SET_NAV:
            return {...state, isOpenNav: action.isOpenNav};

        default:
            return state
    }
}

export default UserReducer;
