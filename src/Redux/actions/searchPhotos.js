import { actionTypes } from '../constants/actionTypes';
import reduxAjax from '../adapters/reduxAjax';
import { BASE_URL, API_KEY } from '../constants/apiInfo';

const requestPhotos = () => ({
    type: actionTypes.REQUEST_PHOTOS
});

const receivedPhotos = data => ({
    type: actionTypes.RECEIVED_PHOTOS,
    data
});

const errorPhotos = error => ({
    type: actionTypes.ERROR_PHOTOS,
    error
});

export const searchPhotos = (searchTerm, activePage) => {
    return dispatch => {
        dispatch(reduxAjax({
            requestAction: requestPhotos,
            successAction: receivedPhotos,
            errorAction: errorPhotos,
            method: 'GET',
            url: `${BASE_URL}search/photos/?client_id=${API_KEY}&page=${activePage}&query=${searchTerm}`
        }));
    }
}