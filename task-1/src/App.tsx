import IndexForm from "./components/Form/index"
import IndexTable from "./components/Table"

import "./style.css"
import "./App.css"

const App = () => {
    return (
        <>
            <div className="main">
                <IndexForm />
                <IndexTable />
            </div>
        </>
    )
}

export default App
