import {FormData} from "../models/formModels.ts";
import {ChangeEvent, FormEvent, useState} from "react";
import Button from "./Button.tsx";


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
        onSubmit(formState);
    };

    return (
        <form onSubmit={handleSubmit}>
            {fieldsData.map((field) => {
                switch (field.type) {
                    case "text":
                    case "email":
                    case "password":
                        return (
                            <div key={field.label} className="mt-2">
                                <label className="block">{field.label}</label>
                                <input
                                    className="rounded h-8 p-2 w-full"
                                    type={field.type}
                                    name={field.label}
                                    placeholder={field.placeholder}
                                    onChange={handleChange}
                                />
                            </div>
                        );
                    case "checkbox":
                        return (
                            <div key={field.label}>
                                <label className="block text-blue-50">
                                    <input
                                        className="rounded h-8 p-2"
                                        type="checkbox"
                                        name={String(field.name)}
                                        checked={!!formState[field.name] || false}
                                        onChange={handleChange}
                                    />
                                    {field.label}
                                </label>
                            </div>
                        );
                    case "select":
                        return (
                            <div key={field.label} className="mt-2">
                                <label className="block mr-2">{field.label}</label>
                                <select
                                    className="rounded h-10 w-full p-2"
                                    name={field.label}
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
            <Button text={buttonName} className="mt-2"/>
        </form>
    )
}