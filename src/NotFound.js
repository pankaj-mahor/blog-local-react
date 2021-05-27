import {Link} from 'react-router-dom';


const NotFound = () => {
    return ( 
        <div className="error-page">
            <h2>Hey Dude!</h2>
            <p>Looks Like You Landed on a wrong planet.</p>
            <Link to="/" className="read-more">Lets Go Home</Link>
        </div>

    );
}
 
export default NotFound;