import { Spinner } from 'react-bootstrap';

function Loader() {
    return (
        <div className="loader">
            <Spinner animation="border" variant='info' className='loader-spinner'>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}

export default Loader;