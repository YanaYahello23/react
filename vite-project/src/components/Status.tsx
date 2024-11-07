interface StatusProps {
    statusId: number;
}

const STATUSES: { [key: number]: string } = {
    1: "bg-green-500",
    2: "bg-yellow-500",
    3: "bg-red-500"
};

export default function Status({ statusId }: StatusProps) {
    return (
        <div className={`${STATUSES[statusId]} h-2 w-2 rounded`}>
        </div>
    );
}