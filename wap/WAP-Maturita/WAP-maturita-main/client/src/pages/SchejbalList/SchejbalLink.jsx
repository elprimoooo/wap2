import { Link } from "react-router-dom"

export default function SchejbalLink(props) {

    return (
        <>
            <p>Name: {props.name}</p>
            <Link to={`/schejbal/${props.id}`}>
                <p>View schejbal</p>
            </Link>
        </>
    )
}