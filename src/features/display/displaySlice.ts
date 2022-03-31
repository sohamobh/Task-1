import { createSlice } from "@reduxjs/toolkit"

export interface DisplayInitialState {
    tableData: {
        email: string
        title: string
        desc: string
        status: string
    }[]
}

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
    },
})
export const { display } = displaySlice.actions
export default displaySlice.reducer
