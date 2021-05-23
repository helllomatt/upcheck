import { connect } from 'react-redux'
import Header from './components/Header'
import URL from './components/URL'

function App(props) {
    function urlList() {
        if (props.urls.length === 0) {
            return (
                <div className='p-5'>
                    There's nothing to show here!
                </div>
            )
        } else {
            return props.urls.map(url => {
                    return <URL key={url.URL} url={url} />
                })
        }
    }

    return (
        <div>
            <Header />
            <div className=''>
                {urlList()}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return { urls: state.urls.urls }
}

export default connect(mapStateToProps, null)(App);
