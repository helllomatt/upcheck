import { 
    SET_URLS
} from '../actiontypes'

const initialState = {
    urls: []
}

export default function URLReducer(state = initialState, action) {
    switch (action.type) {
        case SET_URLS: {
            return {
                ...state,
                urls: action.payload.urls || state.urls
            }
        }
        default: 
            return state
    }
}