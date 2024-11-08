export interface FieldData<T> {
    label: string;
    type: "text" | "email" | "checkbox" | "select" | "password";
    name:  keyof T;
    placeholder?: string;
    validations: {
        required: boolean;
        maxLength?: number;
        minLength?: number;
        regExp?: string;
    };
    options?: any[];
}

export interface FormData<T> {
    onSubmit: (data: T) => void;
    fieldsData: FieldData<T>[];
    buttonName: string;
}

export interface AddForm {
    name: string;
    description: string;
    status: string;
}