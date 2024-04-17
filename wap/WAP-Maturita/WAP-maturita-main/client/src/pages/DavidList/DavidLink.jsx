import { Link } from "react-router-dom"

export default function DavidLink(props) {

    return (
        <>
            <p>Name: {props.name}</p>
            <Link to={`/david/${props.id}`}>
                <p>View david</p>
            </Link>
        </>
    )
}