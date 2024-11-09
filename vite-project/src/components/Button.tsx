interface ButtonProps {
    onClick?: () => void;
    text?: string;
    className?: string;
    type?: string;
}

export default function Button({ onClick = null, text = "Add new organization", className = "", type = "submit" }: ButtonProps) {
    return (
        <button
            type={type}
            className={`bg-blue-600 text-stone-200 rounded p-1 ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
