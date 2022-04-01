import { createSlice } from "@reduxjs/toolkit"

export interface DisplayInitialState {
    tableData: {
        email: string
        title: string
        desc: string
        status: string
    }[]
    editData: {
        id: number
        email: string
        title: string
        desc: string
        status: string
    }[]
}

const initialState: DisplayInitialState = {
    tableData: [],
    editData: [],
}

export const displaySlice = createSlice({
    name: "display",
    initialState,
    reducers: {
        display: (state, action) => {
            console.log(action)

            state.tableData.push(action.payload)
        },
        edit: (state, action) => {
            console.log(action)
            state.editData.push(action.payload)
        },
    },
})
export const { display, edit } = displaySlice.actions
export default displaySlice.reducer
