import { DeleteIcon, EditIcon } from "@chakra-ui/icons"
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Box,
    Input,
} from "@chakra-ui/react"

import { useDispatch, useSelector } from "react-redux"

import { formDataSelector } from "features/display/displaySelector"
import { useState } from "react"
import TodoValidationSchema from "Validation"
import { useFormik } from "formik"
import { display } from "features/display/displaySlice"

const IndexTable: React.FC = () => {
    const dispatch = useDispatch()
    const { touched, errors, setFieldValue, values, handleSubmit, resetForm } =
        useFormik({
            initialValues: {
                email: "",
                title: "",
                desc: "",
                status: "",
            },
            validationSchema: TodoValidationSchema,
            onSubmit: (values) => {
                dispatch(
                    display({
                        email: values.email,
                        title: values.title,
                        desc: values.desc,
                        status: values.status,
                    })
                )

                if (values) {
                    resetForm()
                    console.log("clear")
                }
                // alert(JSON.stringify(values, null, 2))
            },
        })
    console.log({ errors, touched })
    const [edit, setEdit] = useState<boolean>(false)
    const [editData, setEditData] = useState<object>({})

    const tableData = useSelector(formDataSelector)
    const handleDelete = () => {
        alert("delete is clicked using fucntion")
    }

    return (
        <>
            <span>
                <Box display="flex" overflow="hidden" width="100%">
                    <TableContainer height="fit-content" width="100%">
                        <Table size="lg">
                            <Thead>
                                <Tr>
                                    <Th>TASK BY</Th>
                                    <Th>TASK NAME</Th>
                                    <Th>TASK DESCRIPTION</Th>
                                    <Th>TASK STATUS</Th>
                                    <Th>ACTIONS</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {tableData.map((tableData) => {
                                    return (
                                        <Tr>
                                            <Td>{tableData.email}</Td>
                                            <Td>{tableData.title}</Td>
                                            <Td>{tableData.desc}</Td>
                                            <Td>{tableData.status}</Td>

                                            <Td>
                                                <Box
                                                    as="button"
                                                    borderRadius="md"
                                                    bg="teal"
                                                    color="white"
                                                    px={4}
                                                    h={12}
                                                    alignItems="center"
                                                    marginRight={4}
                                                    onClick={() => {
                                                        alert("edit is clicked")
                                                    }}
                                                >
                                                    <EditIcon w={5} h={5} />
                                                </Box>
                                                <Box
                                                    as="button"
                                                    borderRadius="md"
                                                    bg="teal"
                                                    color="white"
                                                    px={4}
                                                    h={12}
                                                    alignItems="center"
                                                    name="deleteData"
                                                    onClick={handleDelete}
                                                >
                                                    <DeleteIcon w={5} h={5} />
                                                </Box>
                                            </Td>
                                        </Tr>
                                    )
                                })}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            </span>
        </>
    )
}
export default IndexTable
