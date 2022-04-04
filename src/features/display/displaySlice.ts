import { createSlice } from "@reduxjs/toolkit"

export interface DisplayInitialState {
    tableData: {
        id: string
        email: string
        title: string
        desc: string
        status: string
    }[]
}

//console.log(id)

const initialState: DisplayInitialState = {
    tableData: [],
}
export const displaySlice = createSlice({
    name: "display",
    initialState,
    reducers: {
        display: (state, action) => {
            console.log(action)
            state.tableData.push(action.payload)
        },

        delete: (state, action) => {
            const tableDataArr: [] = JSON.parse(tableData)
            tableDataArr.forEach((tableData, index) => {
                if (tableData.id === action.payload) {
                    tableDataArr.splice(index, 1)
                }
            })
            state.tableData = tableDataArr
        },
    },
})
export const { display, delete } = displaySlice.actions
export default displaySlice.reducer
