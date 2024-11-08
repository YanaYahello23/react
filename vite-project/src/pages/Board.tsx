import styles from "../css-modules/Board.module.css";
import {MOCK_DATA} from "../constants/data.ts";
import Status from "../components/Status.tsx";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../constants/router-contsnts.ts";
import Button from "../components/Button.tsx";

export default function Board() {
    const navigate = useNavigate();
    const tableHeaders: string[] = Object.keys(MOCK_DATA[0]).map((key) => key.toLocaleUpperCase());

    const handleRowClick = (id: number) => {
        navigate(`${ROUTES.details}/${id}`);
    };

    const addOrgHandler = () => {
        navigate(`${ROUTES.details}/${ROUTES.add}`);
    };

    return (
        <>
            <Button onClick={addOrgHandler}/>
            <table
                className={`${styles}, table-auto border-collapse border bg-gray-300 mt-2`}
                >
                <thead>
                <tr>
                    {
                        tableHeaders.map((header) => (
                            <th key={header} className="border border-gray-400">{header}</th>
                        ))
                    }
                </tr>
                </thead>
                <tbody>
                {MOCK_DATA.map((org) => (
                    <tr key={org.id}
                        onClick={() => handleRowClick(org.id)}
                        className="cursor-pointer hover:bg-gray-200 transition duration-100"
                    >
                        <td className="border border-gray-400">{org.id}</td>
                        <td className="border border-gray-400">{org.name}</td>
                        <td className="border border-gray-400"><Status statusId={org.status}/></td>
                        <td className="border border-gray-400">{org.location}</td>
                    </tr>
                ))}
                </tbody>
            </table>
</>
)
}