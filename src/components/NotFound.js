import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () =>
    {
        return(
            <div>
                <h1>404</h1>
                <h1>The file you are looking for is NOT FOUND</h1>
                <Link to ="/">
                    <P>GO BACK TO HOME PAGE</P>
                </Link>
            </div>
        )
    }

export default NotFound;