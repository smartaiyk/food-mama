import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER } from './types';

//Login --get user token
export const loginUser = userData => dispatch => {
    axios
        .post('/authentication', userData)
        .then(res => {
            // Save to localStorage
            const { token } = res.data;
            // Set token to ls
            localStorage.setItem('jwtToken', token);
            // Set token to Auth header
            setAuthToken(token);
            // Decode token to get user data
            const decoded = jwt_decode(token);
            // Set current user
            dispatch(setCurrentUser(decoded));
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err
            })
        );
};

// Set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

//log user out
export const logoutUser = () => dispatch => {
    //remove the token from localStorage
    localStorage.removeItem('jwtToken');
    //remove auth header for future requests
    setAuthToken(false);
    //set current user to empty object and isAuthenticated to false
    dispatch(setCurrentUser({}));
}