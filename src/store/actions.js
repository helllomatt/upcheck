import {
    SET_URLS,
} from './actiontypes'

export const setUrls = (urls) => ({
    type: SET_URLS,
    payload: {
        urls
    }
})