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

import { RootState } from "../../app/store"
import { useSelector } from "react-redux"

import { formDataSelector } from "../../features/display/displaySelector"
import { display } from "../../features/display/displaySlice"

const IndexTable: React.FC = () => {
    const tableData = useSelector(formDataSelector)

    console.log({ tableData }, "hiiiiiiiii")

    tableData.map((tableData) => {
        console.log(tableData)
    })

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
