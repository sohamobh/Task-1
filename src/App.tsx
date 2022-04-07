import { ChakraProvider } from "@chakra-ui/react"

import { store } from "./app/store"
import { Provider } from "react-redux"

import Components from "pages/ComponentsCombine"

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
