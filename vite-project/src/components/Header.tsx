import {Link} from "react-router-dom";
import {ROUTES} from "../constants/router-contsnts.ts";

export default function Header() {
    return (
        <>
            <nav className="flex h-8 bg-black">
                <li><Link to="/" className="text-blue-50 align-middle">Home</Link></li>
                <li><Link to={ROUTES.board}  className="text-blue-50 align-middle">Board</Link></li>
                <li><Link to={ROUTES.contacts}  className="text-blue-50 align-middle">Contacts</Link></li>
            </nav>
        </>
    )
}