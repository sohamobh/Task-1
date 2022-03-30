import ReactDOM from "react-dom"

import { ChakraProvider } from "@chakra-ui/react"

import App from "./App"

import { Provider } from "react-redux"
import { store } from "./app/store"

import "./index.css"

ReactDOM.render(
    <Provider store={store}>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </Provider>,

    document.getElementById("root")
)
