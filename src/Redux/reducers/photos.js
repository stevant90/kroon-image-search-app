import { actionTypes } from '../constants/actionTypes';

const initialState = {
    photos: [],
    totalPages: null,
    totalPhotos: null
};

export default function photos(state = initialState, action) {
    switch (action.type) {
        case actionTypes.REQUEST_PHOTOS:
            return {
                ...state,
                photos: [],
                totalPages: null,
                totalPhotos: null
            };
        case actionTypes.RECEIVED_PHOTOS:
            return {
                ...state,
                photos: action.data.results,
                totalPages: action.data.total_pages,
                totalPhotos: action.data.total
            };
        case actionTypes.ERROR_PHOTOS:
            return {
                ...state,
                photos: [],
                totalPages: null,
                totalPhotos: null
            };
        case actionTypes.REQUEST_FILTER_PHOTOS:
            return {
                ...state,
                photos: [],
                totalPages: null,
                totalPhotos: null
            };
        case actionTypes.RECEIVED_FILTER_PHOTOS:
            return {
                ...state,
                photos: action.data.results,
                totalPages: action.data.total_pages,
                totalPhotos: action.data.total
            };
        case actionTypes.ERROR_FILTER_PHOTOS:
            return {
                ...state,
                photos: [],
                totalPages: null,
                totalPhotos: null
            };
        default:
            return state;
    }
}