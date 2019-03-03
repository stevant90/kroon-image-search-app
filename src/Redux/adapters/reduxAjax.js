import axios from 'axios';

export default function reduxAxios({ requestAction, successAction, errorAction, method, url, axiosArgs = {} }) {
    return dispatch => {
        if (requestAction) {
            dispatch(requestAction(axiosArgs.params));
        }

        return axios({
            ...axiosArgs,
            method,
            url,
        }).then(response => {
            if (successAction) {
                dispatch(successAction(response.data));
            }

            return response.data;

        }).catch(error => {
            if (errorAction) {
                dispatch(errorAction(error.response.data));
            }
        });
    }
}