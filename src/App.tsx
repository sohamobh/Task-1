import { ChakraProvider } from "@chakra-ui/react"
import { Provider } from "react-redux"

import { store } from "/home/webelight-047/Desktop/Soha/Task-1/task-1/src/app/store"

import Components from "/home/webelight-047/Desktop/Soha/Task-1/task-1/src/pages/ComponentsCombine"

const App = () => {
    return (
        <>
            <Provider store={store}>
                <ChakraProvider>
                    <Components />
                </ChakraProvider>
            </Provider>
        </>
    )
}

export default App
