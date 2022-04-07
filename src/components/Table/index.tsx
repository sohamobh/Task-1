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
import { deleteTodo, editTodo } from "feautres/todoSlice"
import { AppDispatch } from "app/store"
import { todoSelector } from "feautres/todoSelector"

import { useDispatch, useSelector } from "react-redux"

const IndexTable: React.FC = (type) => {
    const dispatch = useDispatch<AppDispatch>()
    const Todo = useSelector(todoSelector)

    const handleEdit = (id: string) => {
        dispatch(editTodo(id))
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
                                {Todo.map((item: any) => {
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
                                                    onClick={() =>
                                                        handleEdit(item.id)
                                                    }
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
                                                    onClick={() => {
                                                        // const id = uuidv4()
                                                        dispatch(
                                                            deleteTodo(item.id)
                                                        )
                                                    }}
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
