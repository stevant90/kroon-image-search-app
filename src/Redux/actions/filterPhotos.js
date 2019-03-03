import { actionTypes } from '../constants/actionTypes';
import reduxAjax from '../adapters/reduxAjax';
import { BASE_URL, API_KEY } from '../constants/apiInfo';

const requestFilterPhotos = () => ({
    type: actionTypes.REQUEST_FILTER_PHOTOS
});

const receivedFilterPhotos = data => ({
    type: actionTypes.RECEIVED_FILTER_PHOTOS,
    data
});

const errorFilterPhotos = error => ({
    type: actionTypes.ERROR_FILTER_PHOTOS,
    error
});

export const filterPhotos = (searchTerm, activePage, filterTerm) => {
    return dispatch => {
        dispatch(reduxAjax({
            requestAction: requestFilterPhotos,
            successAction: receivedFilterPhotos,
            errorAction: errorFilterPhotos,
            method: 'GET',
            url: `${BASE_URL}search/photos/?client_id=${API_KEY}&page=${activePage}&orientation=${filterTerm}&query=${searchTerm}`
        }));
    }
}
