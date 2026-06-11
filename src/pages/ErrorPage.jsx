import { Link } from "react-router"
export default function ErrorPage(){
    return(
        <>
        <h1>Hello world you are on the wrong side of the site</h1>
        <Link to="/">Go Back to Home Page</Link>
        </>
    )
}