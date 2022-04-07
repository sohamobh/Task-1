import {
    Input,
    FormLabel,
    Container,
    Textarea,
    Select,
    Button,
    Box,
    FormControl,
    Text,
    FormHelperText,
} from "@chakra-ui/react"
import { editSelector } from "feautres/todoSelector"
import { add, clearEdit, setTodo } from "feautres/todoSlice"

import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { v4 as uuidv4 } from "uuid"
import { StatusOptions } from "components/Table/enumStatus"
import TodoValidationSchema from "Validation"
import COLORS from "components/colors"

const IndexForm: React.FC = () => {
    const editData = useSelector(editSelector)

    const dispatch = useDispatch()

    const { touched, errors, setFieldValue, values, handleSubmit, resetForm } =
        useFormik({
            initialValues: editData || {
                email: "",
                title: "",
                desc: "",
                status: "Create",
            },
            enableReinitialize: true,
            validationSchema: TodoValidationSchema,
            onSubmit: (values) => {
                const id = uuidv4()

                if (values) {
                    if (editData) {
                        dispatch(setTodo(values))
                        dispatch(clearEdit())
                    } else {
                        dispatch(add({ ...values, id }))
                    }
                }
                resetForm()
            },
        })

    return (
        <>
            <Box display="flex" margin="95px">
                <Container height="fit-content">
                    <FormControl>
                        <FormLabel>Email Address</FormLabel>
                        <Input
                            size="md"
                            width="400px"
                            name="email"
                            onChange={(e) => {
                                e.preventDefault()
                                setFieldValue("email", e.target.value)
                            }}
                            value={values.email}
                            isInvalid={Boolean(errors.email && touched.email)}
                            errorBorderColor="crimson"
                        />
                        <FormHelperText>
                            We'll never share your email.
                        </FormHelperText>
                        {touched.email && errors.email ? (
                            <div>
                                <Text fontSize="sm" color={COLORS.gray}>
                                    {errors.email}
                                </Text>
                            </div>
                        ) : null}
                    </FormControl>

                    <FormControl>
                        <FormLabel marginTop={8}>Task Title</FormLabel>
                        <Input
                            size="md"
                            width="400px"
                            name="title"
                            onChange={(e) => {
                                setFieldValue("title", e.target.value)
                            }}
                            value={values.title}
                            isInvalid={Boolean(errors.title && touched.title)}
                            errorBorderColor="crimson"
                        />
                        {touched.title && errors.title ? (
                            <div>
                                <Text fontSize="sm" color={COLORS.gray}>
                                    {errors.title}
                                </Text>
                            </div>
                        ) : null}
                    </FormControl>

                    <FormControl>
                        <FormLabel marginTop={8}>Task Description</FormLabel>
                        <Textarea
                            width="400px"
                            name="desc"
                            onChange={(e) => {
                                setFieldValue("desc", e.target.value)
                            }}
                            value={values.desc}
                            isInvalid={Boolean(errors.desc && touched.desc)}
                            errorBorderColor="crimson"
                        />
                        {touched.desc && errors.desc ? (
                            <div>
                                <Text fontSize="sm" color={COLORS.gray}>
                                    {errors.desc}
                                </Text>
                            </div>
                        ) : null}
                    </FormControl>

                    <FormControl>
                        <FormLabel marginTop={8}>Select Status</FormLabel>
                        <Select
                            size="md"
                            width="400px"
                            name="status"
                            onChange={(e) => {
                                setFieldValue("status", e.target.value)
                            }}
                            value={values.status}
                            isInvalid={Boolean(errors.status && touched.status)}
                            errorBorderColor="crimson"
                        >
                            <option value="Create">
                                {StatusOptions.CREATE}
                            </option>
                            <option value="Update">
                                {StatusOptions.UPDATE}
                            </option>
                            <option value="Delete">
                                {StatusOptions.DELETE}
                            </option>
                        </Select>
                        {touched.status && errors.status ? (
                            <div>
                                <Text fontSize="sm" color={COLORS.gray}>
                                    {errors.status}
                                </Text>
                            </div>
                        ) : null}
                    </FormControl>

                    <FormControl>
                        <Button
                            marginTop={8}
                            colorScheme="teal"
                            size="lg"
                            type="submit"
                            width="80px"
                            onClick={() => handleSubmit()}
                        >
                            {editData ? "Edit" : "Save"}
                        </Button>
                    </FormControl>
                </Container>
            </Box>
        </>
    )
}
export default IndexForm
