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
} from "@chakra-ui/react"

import { useDispatch, useSelector } from "react-redux"

import { formDataSelector } from "features/display/displaySelector"
import { useFormik } from "formik"
import { v4 as uuidv4 } from "uuid"

import { display } from "features/display/displaySlice"

import TodoValidationSchema from "Validation"
import { idText } from "typescript"
export interface editData {
    newData: {
        id: string
        email: string
        title: string
        desc: string
        status: string
    }[]
}
const IndexTable: React.FC = (type) => {
    const handleEdit = (id: string) => {
        alert(id)
        // const found = id.find((element: any) => element === id)
    }
    const dispatch = useDispatch()
    const { touched, errors, resetForm } = useFormik({
        initialValues: {
            id: uuidv4(),
            email: "",
            title: "",
            desc: "",
            status: "",
        },
        validationSchema: TodoValidationSchema,
        onSubmit: (values) => {
            if (type === "add") {
                dispatch(
                    display({
                        id: values.id,
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
                alert(values.id)
            }
            if (type === "edit") {
                console.log("updatingggg")
            }
        },
    })

    console.log({ errors, touched })

    const tableData = useSelector(formDataSelector)

    const handleDelete = () => {
        alert("delete is clicked using fucntion")
        dispatch(delete tableData.id)
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
                                {tableData.map((item) => {
                                    return (
                                        <Tr key={item.id}>
                                            <Td>{item.email}</Td>
                                            <Td>{item.title}</Td>
                                            <Td>{item.desc}</Td>
                                            <Td>{item.status}</Td>

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
                                                        handleEdit(item.id)
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
