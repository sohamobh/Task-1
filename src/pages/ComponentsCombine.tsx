import { Box } from "@chakra-ui/react"

import IndexForm from "../components/Form"
import IndexTable from "../components/Table"

const Components = () => {
    return (
        <>
            <Box
                display="flex"
                flex-direction="row"
                justify-content="space-evenly"
            >
                <IndexForm />
                <IndexTable />
            </Box>
        </>
    )
}
export default Components
