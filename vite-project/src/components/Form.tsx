import {FormData} from "../models/formModels.ts";
import {ChangeEvent, FormEvent, useState} from "react";


export default function Form <T extends {}>({ onSubmit, fieldsData, buttonName }: FormData<T>) {
    const [formState, setFormState] = useState<T>({} as T);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(formState); // Pass form data to the parent component
    };

    return (
        <form onSubmit={handleSubmit}>
            {fieldsData.map((field) => {
                switch (field.type) {
                    case "text":
                    case "email":
                    case "password":
                        return (
                            <div key={field.label}>
                                <label>{field.label}</label>
                                <input
                                    type={field.type}
                                    name={field.label}
                                    placeholder={field.placeholder}
                                    value={formState[field.name] || ""}
                                    onChange={handleChange}
                                />
                            </div>
                        );
                    case "checkbox":
                        return (
                            <div key={field.label}>
                                <label>
                                    <input
                                        type="checkbox"
                                        name={field.name}
                                        checked={formState[field.name] || false}
                                        onChange={handleChange}
                                    />
                                    {field.label}
                                </label>
                            </div>
                        );
                    case "select":
                        return (
                            <div key={field.label}>
                                <label>{field.label}</label>
                                <select
                                    name={field.label}
                                    value={formState[field.name] || ""}
                                    onChange={handleChange}
                                >
                                    <option value="">Select an option</option>
                                    {field.options?.map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        );
                    default:
                        return null;
                }
            })}
            <button type="submit">{buttonName}</button>
        </form>
    )
}