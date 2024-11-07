import {useParams} from "react-router-dom";
import {MOCK_DATA} from "../constants/data.ts";

export default function Details() {
    const {id} = useParams();

    const orgByID = id ? MOCK_DATA.find((org) => org.id === +id): null

    return (
        <>
            <div>
                Details { orgByID?.name }
            </div>
        </>
    )
}