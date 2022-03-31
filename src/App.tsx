import { ChakraProvider } from "@chakra-ui/react"
import { Provider } from "react-redux"

import { store } from "./app/store"

import Components from "./pages/ComponentsCombine"

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
