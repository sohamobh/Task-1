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
    filter,
} from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { formDataSelector } from "../../features/display/displaySelector"
import { DisplayInitialState } from "../../features/display/displaySlice"

const IndexTable: React.FC = () => {
    // const handleDelete=(id: number)=>{
    //     (state: DisplayInitialState) => state.todoFormSubmissionValue;
    //     ((state: RootState)=>state.id!==id)
    // }

    const todoFormSubmissionValue = useSelector(formDataSelector)

    return (
        <>
            {todoFormSubmissionValue?.email && (
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
                                <Tr>
                                    <Td>{todoFormSubmissionValue.email}</Td>
                                    <Td>{todoFormSubmissionValue.title}</Td>
                                    <Td>{todoFormSubmissionValue.desc}</Td>
                                    <Td>{todoFormSubmissionValue.status}</Td>

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
                                            // onClick={()=handleDelete(id)}
                                        >
                                            <DeleteIcon w={5} h={5} />
                                        </Box>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            )}
        </>
    )
}
export default IndexTable
