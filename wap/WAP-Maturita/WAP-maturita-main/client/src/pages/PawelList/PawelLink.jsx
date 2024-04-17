import { Link } from "react-router-dom"

export default function PawelLink(props) {

    return (
        <>
            <p>Name: {props.name}</p>
            <Link to={`/pawel/${props.id}`}>
                <p>View pawel</p>
            </Link>
        </>
    )
}