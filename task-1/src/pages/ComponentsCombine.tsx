import { Box } from "@chakra-ui/react"

import IndexForm from "/home/webelight-047/Desktop/Soha/Task-1/task-1/src/components/Form/index"
import IndexTable from "/home/webelight-047/Desktop/Soha/Task-1/task-1/src/components/Table/index"

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
