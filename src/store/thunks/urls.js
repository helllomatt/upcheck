import axios from 'axios'
import { setUrls } from '../actions'

export function getUrlsThunk() {
    return function (dispatch) {
        return axios.get('https://n82qf0h8c4.execute-api.us-east-2.amazonaws.com/urls')
            .then(response => {
                return dispatch(setUrls(response.data.Items))
            })
            .catch(err => {
                console.error('failed to GET_URLS')
            })
    }
}

export function addUrlThunk(url) {
    return function (dispatch) {
        return axios.post('https://n82qf0h8c4.execute-api.us-east-2.amazonaws.com/urls', {
            url
        }).then(response => {
            return dispatch(setUrls(response.data.Items))
        })
        .catch(err => {
            console.error('failed to ADD_URL')
        })
    }
}

export function deleteUrlThunk(url) {
    return function (dispatch) {
        return axios.delete('https://n82qf0h8c4.execute-api.us-east-2.amazonaws.com/urls/' + btoa((url))).then(response => {
            return dispatch(setUrls(response.data.Items))
        })
        .catch(err => {
            console.error('failed to ADD_URL')
        })
    }
}