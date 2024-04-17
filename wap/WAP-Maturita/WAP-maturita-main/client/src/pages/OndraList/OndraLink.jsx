import { Link } from "react-router-dom"

export default function OndraLink(props) {

    return (
        <>
            <p>name: {props.name}</p>
            <Link to={`/ondra/${props.id}`}>
                <p>View ondra</p>
            </Link>
        </>
    )
}