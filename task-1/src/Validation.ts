import { object, string } from "yup"

const TodoValidationSchema = object().shape({
    email: string()
        .email("Invalid email")
        .required("We'll never share your email."),
    title: string().required("Required*"),
    desc: string().required("Required*"),
    status: string().required("Required*"),
})

export default TodoValidationSchema
