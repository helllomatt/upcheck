import { connect } from 'react-redux'
import { getUrlsThunk, addUrlThunk } from '../store/thunks/urls'

function Header(props) {
    function updateUrlListing() {
        props.getUrlsThunk()
    }

    function addSite(e) {
        e.preventDefault()
        const siteElement = e.target.elements.site
        const site = siteElement.value

        props.addUrlThunk(site)

        siteElement.value = ''
    }

    return (
        <div className='border-b p-5 border-gray-300 flex items-center'>
            <div className='flex-grow'>
                <h1 className='text-2xl'>UpCheck</h1>
                <p>Checks to see if sites are up</p>
            </div>
            <div className='flex items-center'>
                <div className='flex w-half rounded-md border border-gray-300 mr-3'>
                    <form onSubmit={addSite} className='flex items-center'>
                        <input type='text' className='flex-grow rounded-md  p-3' name='site' />
                        <button type='submit' className='px-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </button>
                    </form>
                </div>
                <button type='button' onClick={updateUrlListing}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default connect(null, { getUrlsThunk, addUrlThunk })(Header)