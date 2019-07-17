import {ACTIONS} from "../types/userTypes";
import axios from 'axios';
import EndPoints from "../providers/endpoints";


export const setUserSession = (session) => ({
    type: ACTIONS.SET_KHALED_SESSION,
    session: session
});
export const error = errorMessage => ({
    type: ACTIONS.SET_ERROR,
    error: errorMessage
});


export const success = message => ({
    type: ACTIONS.SET_SUCCESS,
    success: message
});


export const setNavigationState = isOpenNav => ({
    type: ACTIONS.SET_NAV,
    isOpenNav
});


export const saveUserInfo = (user) => dispatch => {

    dispatch(error(''));
    dispatch(success(''));

    return axios.post(`${EndPoints.BASE_URL}${EndPoints.USER}`, user)
        .then(async ({data, status}) => {
            if (status > 300) {
                return await dispatch(error(data.message));
            }
            await dispatch(setUserSession(data));
            await dispatch(success('Saved Successfully !'));

        }).catch(async (fail) => {
            await dispatch(error(fail.message));
            console.log('error on doLoginRequest, ', fail);
        });
};




