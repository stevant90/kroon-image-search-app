import keyMirror from 'keymirror';

export const actionTypes = keyMirror({
    REQUEST_PHOTOS: null,
    RECEIVED_PHOTOS: null,
    ERROR_PHOTOS: null,

    REQUEST_FILTER_PHOTOS: null,
    RECEIVED_FILTER_PHOTOS: null,
    ERROR_FILTER_PHOTOS: null,
});