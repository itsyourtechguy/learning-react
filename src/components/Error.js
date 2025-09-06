import { useRouteError } from "react-router";
import { Link } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <div className="error">
            <h1>Oops! Something went wrong.</h1>
            <h3>{error?.statusText || error?.message}</h3>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/">Go Back to Home Page</Link>
        </div>
    )
}

export default Error;