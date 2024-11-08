interface ButtonProps {
    onClick: () => void;
    text?: string;
    className?: string;
}

export default function Button({ onClick, text = "Add new organization", className = "" }: ButtonProps) {
    return (
        <button
            className={`bg-blue-600 text-stone-200 rounded p-1 ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
