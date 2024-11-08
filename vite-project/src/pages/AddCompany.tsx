import Form from "../components/Form.tsx";
import {AddForm, FieldData} from "../models/formModels.ts";

export default function AddCompany() {

    const addCompanyFormData: FieldData[] = [
        {
            label: "Organization name",
            type: "text",
            name: "name",
            placeholder: "",
            validations: {
                required: true,
                maxLength: 50,
                minLength: 3,
            }
        },
        {
            label: "Organization description",
            type: "text",
            name: "description",
            placeholder: "",
            validations: {
                required: true,
                maxLength: 150,
                minLength: 3,
            }
        },
        {
            label: "Organization status",
            type: "select",
            name: "status",
            placeholder: "",
            validations: {
                required: true,
            }
        },
    ];

    const handlerOnSubmit = (data: AddForm) => {
        console.log("Form Data:", data);
    }

    return (
        <>
            <Form fieldsData={addCompanyFormData} onSubmit={handlerOnSubmit} buttonName={"Create an organization"}/>
        </>
    )
}