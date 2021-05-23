import { connect } from 'react-redux'
import { deleteUrlThunk } from "../store/thunks/urls"

function URL(props) {
    function deleteUrl() {
        props.deleteUrlThunk(props.url.URL)
    }

    function lastUpdateTime() {
        if (props.url.LastUpdateTime === 0) {
            return 'Never Updated'
        } else {
            return props.url.LastUpdateTime
        }
    }

    function isLive() {
        if (props.url.Live) {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        } else {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    }

    return (
        <div className='flex p-5 border-t border-b border-gray-100'>
            <div className='flex-grow'>{ props.url.URL }</div>
            <div className='flex items-center'>
                <div className='mr-5'>{ lastUpdateTime() }</div>
                <div className='mr-5'>{ isLive() }</div>
                <button type='button' onClick={deleteUrl}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, { deleteUrlThunk })(URL);