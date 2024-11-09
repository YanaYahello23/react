import Form from "../components/Form.tsx";
import {AddForm, FieldData} from "../models/formModels.ts";
import styles from "../css-modules/AddCompany.module.css";
import {STATUSES} from "../constants/data.ts";

export default function AddCompany() {

    const addCompanyFormData: FieldData<AddForm>[] = [
        {
            label: "Organization name",
            type: "text",
            name: "name",
            placeholder: "Enter name",
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
            placeholder: "Enter description",
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
            placeholder: "Enter status",
            validations: {
                required: true,
            },
            options: [...Object.values(STATUSES)]
        },
    ];

    const handlerOnSubmit = (data: AddForm) => {
        console.log("Form Data:", data);
    }

    return (
        <div className={styles.mainContainer}>
            <Form<AddForm> fieldsData={addCompanyFormData } onSubmit={handlerOnSubmit} buttonName={"Create an organization"}/>
        </div>
    )
}